import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * v3 — journey scrollytelling controller (ported from v2 hero.js).
 *
 * One GSAP ScrollTrigger scrubs the whole 5-phase journey (`top top` →
 * `bottom bottom`), timing each phase's filmstrip to a smoothed scroll
 * position (scrub 0.8) along the exponential momentum curve (K = 1.2).
 * Frames lazy-hydrate; the ruler fill travels 0→100%; when the journey is
 * fully travelled the ruler retracts and the downstream topbar arrives
 * (`is-downstream` on `.navbar-wrapper`).
 */
export function useJourneyLifecycle() {
  const journeyRef = useRef(null)
  const effectRan = useRef(false)

  useEffect(() => {
    if (effectRan.current) return
    effectRan.current = true

    const section = journeyRef.current
    const slides = Array.from(section ? section.querySelectorAll('.hero-slide') : [])
    if (!slides.length) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const PRELOAD_AHEAD = 2
    const FRAME_WINDOW = 8 // frames hydrated either side of the scrub target
    const K = 1.2

    const rulerFill = document.querySelector('.phase-ruler__fill')
    const rulerEls = document.querySelectorAll('.phase-ruler')
    const wrapper = document.querySelector('.navbar-wrapper')

    /* ---------- cleanup registry ---------- */
    const listeners = []
    const on = (target, type, fn, opts) => {
      target.addEventListener(type, fn, opts)
      listeners.push(() => target.removeEventListener(type, fn, opts))
    }
    let stTween = null
    let observer = null

    /* ---------- phase reveal ---------- */
    function revealSlide(slide) {
      slide.classList.add('is-visible')
    }

    function initReveal() {
      if (!reduceMotion && 'IntersectionObserver' in window) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                revealSlide(entry.target)
                observer.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.45 }
        )
        slides.forEach((slide) => observer.observe(slide))
      } else {
        slides.forEach(revealSlide)
      }
    }

    /* ---------- phase flip ---------- */
    let lastTop = 0
    function flipTo(top, delta) {
      if (section) section.dataset.dir = delta >= 0 ? 'down' : 'up'
    }

    /* ---------- ruler ---------- */
    function buildRulerScale() {
      const scale = document.querySelector('.phase-ruler__scale')
      if (!scale || scale.__built) return
      scale.__built = true
      for (let p = 2; p <= 100; p += 2) {
        const t = document.createElement('span')
        t.className = 'phase-ruler__tick'
        if (p % 20 === 0) t.classList.add('phase-ruler__tick--major')
        else if (p % 5 === 0) t.classList.add('phase-ruler__tick--mid')
        t.style.left = `${p}%`
        scale.appendChild(t)
      }
    }

    function setNavbarState(complete) {
      if (wrapper) wrapper.classList.toggle('is-downstream', complete)
    }

    function updateRuler(offset, H, slideCount) {
      if (!rulerFill) return
      buildRulerScale()
      const total = Math.max(1, (slideCount + 1) * H)
      const progress = Math.max(0, Math.min(1, offset / total))
      rulerFill.style.width = `${(progress * 100).toFixed(2)}%`
      const complete = offset >= total
      rulerEls.forEach((el) => el.classList.toggle('is-complete', complete))
      setNavbarState(complete)
    }

    /* ---------- geometry ---------- */
    let sectionTop = 0
    function measureSection() {
      if (!section) return
      sectionTop = section.getBoundingClientRect().top + (window.pageYOffset || window.scrollY || 0)
    }

    /* ---------- filmstrip builders ---------- */
    function buildFrames(slide) {
      if (slide.__frames) return slide.__frames
      const bg = slide.querySelector('.hero-slide__bg')
      if (!bg) return []
      const dir = bg.getAttribute('data-frame-dir')
      const count = parseInt(bg.getAttribute('data-frame-count'), 10) || 0
      const frames = []
      for (let i = 0; i < count; i += 1) {
        const el = document.createElement('div')
        el.className = 'hero-frame'
        bg.appendChild(el)
        frames.push({ el, loaded: false, loading: false })
      }
      slide.__frames = frames
      slide.__dir = dir
      return frames
    }

    function frameUrl(slide, index) {
      const num = String(index + 1).padStart(2, '0')
      return slide.__dir + '/' + num + '.webp'
    }

    function loadFrame(slide, index) {
      const frame = slide.__frames[index]
      if (!frame || frame.loaded || frame.loading) return
      frame.loading = true
      const img = new Image()
      img.decoding = 'async'
      img.onload = () => {
        frame.loaded = true
        frame.el.style.backgroundImage = 'url(' + JSON.stringify(frameUrl(slide, index)) + ')'
        requestPaint()
      }
      img.onerror = () => {
        frame.loaded = true // missing file must never trap the scrub
        requestPaint()
      }
      img.src = frameUrl(slide, index)
    }

    /**
     * Progressive hydration: instead of firing all 30 frames of a phase at
     * once (heavy first paint + burst of requests), load the frame nearest the
     * scrub target first, then expand outward one ring at a time. A fast scrub
     * stays covered because the window travels with the target; a slow one lets
     * the surrounding frames settle in. Bounded network + memory.
     */
    function loadWindow(slide, center, radius = FRAME_WINDOW) {
      const frames = buildFrames(slide)
      const n = frames.length
      if (!n) return
      const c = Math.max(0, Math.min(n - 1, center))
      loadFrame(slide, c)
      for (let d = 1; d <= radius; d += 1) {
        if (c - d >= 0) loadFrame(slide, c - d)
        if (c + d < n) loadFrame(slide, c + d)
      }
    }

    /** Fill the rest of the active phase during idle time so the full story is
     *  cached once the visitor lingers — never competing with visible work. */
    function loadIdle(slide) {
      if (!slide || slide.__idleQueued || slide.__idleDone) return
      slide.__idleQueued = true
      const run = () => {
        slide.__idleQueued = false
        slide.__idleDone = true
        if (!slide.__frames) return
        slide.__frames.forEach((_, i) => loadFrame(slide, i))
      }
      if (window.requestIdleCallback) window.requestIdleCallback(run, { timeout: 2500 })
      else setTimeout(run, 900)
    }

    /* ---------- painting ---------- */
    function paintFrame(slide, index) {
      // Touch only the two elements that actually change (previous → hidden,
      // next → shown) instead of writing opacity/z-index to all 30 frames on
      // every scrub tick. Big cut in style recalcs per frame.
      if (slide.__visible === index) return
      const frames = slide.__frames
      const prev = slide.__visible
      if (prev != null && frames[prev]) {
        frames[prev].el.style.opacity = '0'
        frames[prev].el.style.zIndex = '0'
      }
      const next = frames[index]
      if (next) {
        next.el.style.opacity = '1'
        next.el.style.zIndex = '1'
      }
      slide.__visible = index
    }

    function lastLoadedIndex(slide, target) {
      const frames = slide.__frames
      if (!frames || !frames.length) return -1
      for (let i = target; i >= 0; i -= 1) {
        if (frames[i].loaded) return i
      }
      for (let i = target + 1; i < frames.length; i += 1) {
        if (frames[i].loaded) return i
      }
      return -1
    }

    let painting = false
    let lastOffset = 0
    let booted = false
    let stackTop = -1

    function paintState(offset) {
      const H = window.innerHeight || document.documentElement.clientHeight || 900
      const last = lastOffset
      lastOffset = offset
      const delta = booted ? offset - last : 0

      updateRuler(offset, H, slides.length)

      const runway = H * slides.length
      const s = Math.max(0, Math.min(runway, offset))
      const scaled = s / H
      const top = Math.min(slides.length - 1, Math.max(0, Math.floor(scaled)))

      if (!booted) {
        lastTop = top
        booted = true
      }

      if (top !== lastTop) {
        lastTop = top
        flipTo(top, delta)
      }

      // Resting stack: outgoing cover sits directly beneath the incoming one;
      // the incoming phase's CSS transition reveals IT over the outgoing.
      // Only rewritten when the phase actually changes — not every scroll tick.
      if (top !== stackTop) {
        const outgoing = delta > 0 ? top - 1 : top + 1
        slides.forEach((slide, i) => {
          slide.classList.toggle('is-active', i === top)
          slide.style.zIndex = i === top ? '' : i === outgoing ? '40' : '10'
        })
        stackTop = top
      }

      const slide = slides[top]
      if (slide && !slide.classList.contains('is-visible')) revealSlide(slide)

      const frames = buildFrames(slide)
      if (!frames || !frames.length) return
      const start = top * H
      const raw = Math.max(0, Math.min(1, (offset - start) / H))

      // THE MOMENTUM CURVE — exponential deceleration / deep-focus pacing.
      const E = 1 - Math.exp(-K)
      const eased = (1 - Math.exp(-K * raw)) / E
      const target = Math.min(frames.length - 1, Math.floor(eased * frames.length))

      // Rolling hydration window around the frame actually being shown.
      loadWindow(slide, target, FRAME_WINDOW)
      // Light preload of the next phases' opening frames so a transition is
      // never blank; the rest hydrates as the scrub approaches.
      for (let k = 1; k <= PRELOAD_AHEAD; k += 1) {
        const idx = top + k
        if (idx < slides.length) loadWindow(slides[idx], 0, 3)
      }
      loadIdle(slide)

      const shown = lastLoadedIndex(slide, target)
      if (shown >= 0) paintFrame(slide, shown)
    }

    function requestPaint(offset) {
      if (painting) return
      painting = true
      const at = typeof offset === 'number' ? offset : lastOffset
      requestAnimationFrame(() => {
        painting = false
        paintState(at)
      })
    }

    function onRefresh() {
      measureSection()
      requestPaint()
    }

    /* ---------- reduced motion: static ---------- */
    let staticActive
    if (reduceMotion) {
      staticActive = () => {
        const H = window.innerHeight || document.documentElement.clientHeight || 900
        const offset = (window.pageYOffset || window.scrollY || 0) - sectionTop
        const top = Math.min(slides.length - 1, Math.max(0, Math.floor(offset / H)))
        slides.forEach((slide, i) => {
          slide.classList.toggle('is-active', i === top)
          slide.classList.add('is-visible')
        })
        updateRuler(offset, H, slides.length)
      }
      slides.forEach((slide) => {
        loadWindow(slide, 0, 0)
        paintFrame(slide, 0)
      })
      measureSection()
      staticActive()
      on(window, 'scroll', staticActive, { passive: true })
      on(window, 'resize', () => {
        measureSection()
        staticActive()
      })
      initReveal()
      return () => cleanup()
    }

    /* ---------- boot ---------- */
    measureSection()
    paintState(0)
    on(window, 'resize', onRefresh, { passive: true })
    initReveal()

    stTween = gsap.to(
      { progress: 0 },
      {
        progress: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
          onRefresh,
          onUpdate: (self) => {
            const H = window.innerHeight || document.documentElement.clientHeight || 900
            paintState(self.progress * (H * slides.length))
          }
        }
      }
    )

    // Tail beyond the phase runway: ruler reaches 100% and hides, topbar arrives.
    on(window, 'scroll', () => {
      if (!rulerFill) return
      const H = window.innerHeight || document.documentElement.clientHeight || 900
      const offset = (window.pageYOffset || window.scrollY || 0) - sectionTop
      if (offset > H * slides.length) {
        const total = (slides.length + 1) * H
        const progress = Math.min(1, offset / total)
        rulerFill.style.width = `${(progress * 100).toFixed(2)}%`
        const complete = offset >= total
        rulerEls.forEach((el) => el.classList.toggle('is-complete', complete))
        setNavbarState(complete)
      }
    }, { passive: true })

    function cleanup() {
      listeners.forEach((off) => off())
      if (stTween && stTween.scrollTrigger) stTween.scrollTrigger.kill()
      if (observer) observer.disconnect()
      slides.forEach((slide) => {
        if (slide.__frames) {
          slide.__frames.forEach((f) => f.el.remove())
          delete slide.__frames
        }
        slide.classList.remove('is-active', 'is-visible')
        slide.style.zIndex = ''
      })
      if (rulerFill) rulerFill.style.width = ''
      rulerEls.forEach((el) => el.classList.remove('is-complete'))
      if (wrapper) wrapper.classList.remove('is-downstream')
      const scale = document.querySelector('.phase-ruler__scale')
      if (scale) {
        scale
          .querySelectorAll('.phase-ruler__tick')
          .forEach((t) => t.remove())
        delete scale.__built
      }
    }

    return cleanup
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { journeyRef }
}