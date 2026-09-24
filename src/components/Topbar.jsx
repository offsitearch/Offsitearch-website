import { useStore } from '../ui/Store'
import { SITE } from '../data'

export default function Topbar() {
  const { openInquiry } = useStore()
  const { brand, topbar } = SITE

  return (
    <header className="navbar" role="banner">
      <a href="#hero" className="navbar__brand" aria-label={brand.homeAria}>
        <div className="navbar__logo-box">
          <img src={brand.logo} alt={brand.logoAlt} width="22" height="22" />
        </div>
        <span className="navbar__brand-text">{brand.name}</span>
      </a>

      <nav className="navbar__nav" aria-label={`${brand.name} sections`}>
        {topbar.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="navbar__actions">
        <button className="btn-blueprint" type="button" onClick={openInquiry}>
          {topbar.cta}
        </button>
      </div>
    </header>
  )
}