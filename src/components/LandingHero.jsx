import { useEffect, useRef } from 'react'
import { useStore } from '../ui/Store'
import { HERO } from '../data'

export default function LandingHero() {
  const { openInquiry } = useStore()
  const rootRef = useRef(null)

  // Pause the hero's decorative infinite animations (drift grid, beam sweep,
  // scroll cue) once the hero has fully scrolled out of view — no point paying
  // for paint every frame on layers nobody can see. The `.is-offscreen` flag
  // on the hero + a mirrored body class drive pure-CSS animation-play-state.
  useEffect(() => {
    const section = rootRef.current
    if (!section || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => {
        const off = !entry.isIntersecting
        section.classList.toggle('is-offscreen', off)
        document.body.classList.toggle('hero-offscreen', off)
      },
      { threshold: 0 }
    )
    io.observe(section)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={rootRef} className="landing-hero" id="hero" aria-label="OFFSITE — design buildings before they exist">
      <div className="landing-hero__bg" aria-hidden="true"></div>
      <div className="landing-hero__grid" aria-hidden="true"></div>
      <div className="landing-hero__beam" aria-hidden="true"></div>
      <div className="landing-hero__veil" aria-hidden="true"></div>

      <div className="landing-hero__content">
        <span className="landing-hero__kicker">{HERO.kicker}</span>
        <h1 className="landing-hero__title">{HERO.title}</h1>
        <p className="landing-hero__sub">{HERO.sub}</p>
        <div className="landing-hero__cta">
          <button className="btn-blueprint" type="button" onClick={openInquiry}>
            {HERO.primaryCta}
          </button>
          <a className="landing-hero__enter" href={HERO.secondaryCta.href}>
            {HERO.secondaryCta.label} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="landing-hero__cue" aria-hidden="true">
        <span className="landing-hero__cue-text">{HERO.scrollHint}</span>
        <span className="landing-hero__cue-line">
          <i></i>
        </span>
      </div>
    </section>
  )
}