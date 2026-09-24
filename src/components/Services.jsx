import { SERVICES } from '../data'

export default function Services() {
  return (
    <section className="services-section deck-slide" id="services" aria-labelledby="services-title">
      <div className="sheet-head">
        <div className="container">
          <header className="sheet-header">
            <div className="sheet-header__meta">
              <span>{SERVICES.meta[0]}</span>
              <div className="sheet-header__rule"></div>
              <span>{SERVICES.meta[1]}</span>
            </div>
            <div className="sheet-header__title-row">
              <h2 className="sheet-header__title" id="services-title">
                {SERVICES.title}
              </h2>
              <p className="sheet-header__tagline">{SERVICES.tagline}</p>
            </div>
          </header>
        </div>
      </div>

      <div className="sheet-body">
        <div className="container">
          <div className="services-grid">
            {SERVICES.items.map((s) => (
              <div className="service-card" key={s.num}>
                <span className="service-card__num">{s.num}</span>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <ul className="service-card__scope">
                  {s.scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}