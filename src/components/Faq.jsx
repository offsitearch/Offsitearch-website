import { useEffect, useRef, useState } from 'react'
import { FAQ } from '../data'

export default function Faq() {
  const [open, setOpen] = useState(0)
  const answers = useRef([])

  useEffect(() => {
    answers.current.forEach((el, i) => {
      if (el) el.style.maxHeight = i === open ? `${el.scrollHeight}px` : ''
    })
  }, [open])

  const toggle = (i) => setOpen((prev) => (prev === i ? -1 : i))

  return (
    <section className="faq-section deck-slide" id="faq" aria-labelledby="faq-title">
      <div className="sheet-head">
        <div className="container">
          <div className="sheet-header" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <div className="sheet-header__meta" style={{ justifyContent: 'center' }}>
              <span>{FAQ.meta[0]}</span>
              <span>{FAQ.meta[1]}</span>
            </div>
            <h2 className="sheet-header__title" id="faq-title">
              {FAQ.title}
            </h2>
            <p className="sheet-header__tagline" style={{ margin: '0 auto' }}>
              {FAQ.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="sheet-body">
        <div className="container">
          <div className="faq-list">
            {FAQ.items.map((item, i) => (
              <div className={`faq-item${open === i ? ' active' : ''}`} key={i}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={open === i}
                  onClick={() => toggle(i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-toggle-icon">▼</span>
                </button>
                <div
                  className="faq-answer"
                  ref={(el) => {
                    answers.current[i] = el
                  }}
                >
                  <div className="faq-answer__inner">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}