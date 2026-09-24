import { useEffect, useRef, useState } from 'react'
import { useStore } from '../ui/Store'
import { INQUIRY, PROJECT_MODAL } from '../data'

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  border: '1px solid rgba(30,32,36,0.2)',
  borderRadius: 4,
  fontFamily: 'inherit',
  fontSize: '0.95rem',
  background: '#fff'
}

function ProjectModal() {
  const { project, openInquiry, closeModal } = useStore()
  const closeRef = useRef(null)

  useEffect(() => {
    if (project && closeRef.current) closeRef.current.focus()
  }, [project])

  if (!project) return null

  return (
    <div
      className="modal-overlay is-open"
      id="project-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal()
      }}
    >
      <div className="modal-dialog">
        <div className="modal-head">
          <div>
            <span style={{ color: 'var(--ink-blue)', fontWeight: 700 }}>{project.drg}</span>
            <span style={{ color: 'var(--ink-muted)', margin: '0 8px' }}>//</span>
            <span style={{ color: 'var(--ink-muted)' }}>{project.scale}</span>
          </div>
          <button ref={closeRef} className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
            ✕
          </button>
        </div>
        <div className="modal-body">
          <div
            style={{
              position: 'relative',
              borderRadius: 6,
              overflow: 'hidden',
              marginBottom: 24,
              border: '1px solid rgba(30,32,36,0.15)',
              maxHeight: 420,
              background: '#000'
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 12,
              marginBottom: 12
            }}
          >
            <h2 id="modal-title" style={{ fontSize: '1.8rem', fontWeight: 800 }}>
              {project.title}
            </h2>
            <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--ink-blue)', fontWeight: 700, textTransform: 'uppercase' }}>
              {project.categoryLabel}
            </span>
          </div>

          <p style={{ color: 'var(--ink-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: 24 }}>
            {project.description}
          </p>

          <div
            style={{
              background: 'var(--bg-paper)',
              border: '1px dashed rgba(30,32,36,0.2)',
              borderRadius: 6,
              padding: '18px 22px',
              marginBottom: 24
            }}
          >
            <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--ink-blue)', fontWeight: 700, marginBottom: 10, textTransform: 'uppercase' }}>
              {PROJECT_MODAL.deliverablesTitle}
            </div>
            <ul
              className="mono"
              style={{ listStyle: 'square', paddingLeft: 20, fontSize: '0.82rem', color: 'var(--ink-dark)', display: 'flex', flexDirection: 'column', gap: 6 }}
            >
              {project.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div className="mono" style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>
              LOCATION: <strong style={{ color: 'var(--ink-dark)' }}>{project.location}</strong> · AREA:{' '}
              <strong style={{ color: 'var(--ink-dark)' }}>{project.area}</strong> · YEAR:{' '}
              <strong style={{ color: 'var(--ink-dark)' }}>{project.year}</strong>
            </div>
            <button
              className="btn-blueprint"
              type="button"
              onClick={() => {
                closeModal()
                openInquiry()
              }}
            >
              {PROJECT_MODAL.inquireCta}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function InquiryModal() {
  const { inquiryOpen, closeModal } = useStore()
  const closeRef = useRef(null)
  const timers = useRef([])
  const [status, setStatus] = useState(false)
  const [busy, setBusy] = useState(false)
  const [submitText, setSubmitText] = useState(INQUIRY.submit)

  const name = INQUIRY.fields.name
  const email = INQUIRY.fields.email
  const typology = INQUIRY.fields.typology
  const area = INQUIRY.fields.area
  const brief = INQUIRY.fields.brief

  useEffect(() => {
    if (inquiryOpen && closeRef.current) closeRef.current.focus()
  }, [inquiryOpen])

  useEffect(() => () => timers.current.forEach((t) => clearTimeout(t)), [])

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setBusy(true)
    setSubmitText(INQUIRY.submittingText)

    const t1 = setTimeout(() => {
      if (status) {
        form.reset()
        setBusy(false)
        setSubmitText(INQUIRY.submit)
        return
      }
      setStatus(true)
      setSubmitText(INQUIRY.submittedText)
      const t2 = setTimeout(() => {
        closeModal()
        form.reset()
        setStatus(false)
        setBusy(false)
        setSubmitText(INQUIRY.submit)
      }, 2500)
      timers.current.push(t2)
    }, 800)
    timers.current.push(t1)
  }

  if (!inquiryOpen) return null

  return (
    <div
      className="modal-overlay is-open"
      id="inquiry-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal()
      }}
    >
      <div className="modal-dialog" style={{ maxWidth: 640 }}>
        <div className="modal-head">
          <div>
            <span style={{ color: 'var(--ink-blue)', fontWeight: 700 }}>{INQUIRY.head[0]}</span>
            <span style={{ color: 'var(--ink-muted)', margin: '0 8px' }}>//</span>
            <span style={{ color: 'var(--ink-muted)' }}>{INQUIRY.head[1]}</span>
          </div>
          <button ref={closeRef} className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
            ✕
          </button>
        </div>
        <div className="modal-body">
          <h2 id="inquiry-title" style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: 8 }}>
            {INQUIRY.title}
          </h2>
          <p style={{ color: 'var(--ink-muted)', fontSize: '0.95rem', marginBottom: 24 }}>
            {INQUIRY.desc}
          </p>

          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label className="mono" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: 6 }}>
                  {name.label}
                </label>
                <input type={name.type} required={name.required} placeholder={name.placeholder} style={inputStyle} />
              </div>
              <div>
                <label className="mono" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: 6 }}>
                  {email.label}
                </label>
                <input type={email.type} required={email.required} placeholder={email.placeholder} style={inputStyle} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label className="mono" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: 6 }}>
                  {typology.label}
                </label>
                <select style={inputStyle}>
                  {typology.options.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mono" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: 6 }}>
                  {area.label}
                </label>
                <input type={area.type} placeholder={area.placeholder} style={inputStyle} />
              </div>
            </div>

            <div>
              <label className="mono" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: 6 }}>
                {brief.label}
              </label>
              <textarea
                rows="3"
                required={brief.required}
                placeholder={brief.placeholder}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>

            {status && (
              <div
                id="inquiry-status"
                className="mono"
                style={{ padding: 12, background: '#E8F5E9', color: '#2E7D32', border: '1px solid #C8E6C9', borderRadius: 4, fontSize: '0.8rem' }}
              >
                {INQUIRY.successNote}
              </div>
            )}

            <button type="submit" className="btn-blueprint" disabled={busy} style={{ width: '100%', padding: 14, fontSize: '0.9rem' }}>
              {submitText}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function Modals() {
  const { inquiryOpen, project, closeModal } = useStore()

  useEffect(() => {
    const open = inquiryOpen || !!project
    document.body.classList.toggle('modal-open', open)
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [inquiryOpen, project, closeModal])

  return (
    <>
      <ProjectModal />
      <InquiryModal />
    </>
  )
}