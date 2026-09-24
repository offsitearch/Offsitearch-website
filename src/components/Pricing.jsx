import { useStore } from '../ui/Store'
import { PRICING } from '../data'

const Check = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function Pricing() {
  const { openInquiry } = useStore()

  return (
    <section className="pricing-section deck-slide" id="packages" aria-labelledby="pricing-title">
      <div className="sheet-head">
        <div className="container">
          <div className="sheet-header">
            <h2 className="sheet-header__title" id="pricing-title">
              {PRICING.title}
            </h2>
            <p className="sheet-header__tagline">{PRICING.tagline}</p>
          </div>
        </div>
      </div>

      <div className="sheet-body">
        <div className="container">
          <div className="manila-folder">
            <div className="manila-folder__tabs">
              <div className="manila-tab active">
                <span>{PRICING.tabs[0]}</span>
              </div>
              <div className="manila-tab">
                <span>{PRICING.tabs[1]}</span>
              </div>
            </div>

            <div className="manila-folder__body">
              <div className="pricing-grid">
                {PRICING.packages.map((pkg) => (
                  <div className={`price-card${pkg.featured ? ' featured' : ''}`} key={pkg.tier}>
                    {pkg.featured && <span className="price-card__tag">{PRICING.featuredTag}</span>}
                    <span className="price-card__tier">{pkg.tier}</span>
                    <h3 className="price-card__title">{pkg.title}</h3>
                    <p className="price-card__desc">{pkg.desc}</p>
                    <ul className="price-card__scope-list">
                      {pkg.scope.map((item) => (
                        <li key={item}>
                          {Check}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={pkg.featured ? 'btn-blueprint' : 'btn-blueprint-ghost'}
                      type="button"
                      onClick={openInquiry}
                      style={{ width: '100%' }}
                    >
                      {pkg.cta}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}