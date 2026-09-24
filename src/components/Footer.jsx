import { useStore } from '../ui/Store'
import { SITE } from '../data'

export default function Footer() {
  const { openInquiry } = useStore()
  const { footer, contact, legal } = SITE

  return (
    <footer className="blueprint-footer" role="contentinfo">
      <div className="container">
        <div className="footer-main">
          <div>
            <div className="footer-brand__name">{SITE.brand.name}</div>
            <p className="footer-brand__desc">{footer.desc}</p>
            <div style={{ marginTop: 18 }}>
              <button
                type="button"
                className="btn-blueprint"
                onClick={openInquiry}
                style={{ background: 'var(--accent-orange)', borderColor: 'var(--accent-orange-hover)' }}
              >
                {footer.cta}
              </button>
            </div>
          </div>

          <div>
            <div className="footer-col-title">{footer.navTitle}</div>
            <ul className="footer-nav">
              {footer.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">{footer.disciplinesTitle}</div>
            <ul className="footer-nav">
              {footer.disciplines.map((d) => (
                <li key={d}>
                  <a href="#services">{d}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">{footer.contactTitle}</div>
            <div className="footer-contact-item">
              <span className="label">{contact.emailLabel}</span>
              <a href={`mailto:${contact.email}`} className="value">
                {contact.email}
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="label">{contact.locationLabel}</span>
              <span className="value">{contact.location}</span>
            </div>
            <div className="footer-contact-item">
              <span className="label">{contact.hoursLabel}</span>
              <span className="value">{contact.hours}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {legal.legalName} {legal.allRights}
          </span>
          <span>{legal.tagline}</span>
        </div>
      </div>
    </footer>
  )
}