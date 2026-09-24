import { WORKFLOW } from '../data'

export default function Workflow() {
  return (
    <section className="workflow-section deck-slide" id="workflow" aria-labelledby="workflow-title">
      <div className="sheet-head">
        <div className="container">
          <header className="sheet-header">
            <div className="sheet-header__meta">
              <span>{WORKFLOW.meta[0]}</span>
              <div className="sheet-header__rule"></div>
              <span>{WORKFLOW.meta[1]}</span>
            </div>
            <div className="sheet-header__title-row">
              <h2 className="sheet-header__title" id="workflow-title">
                {WORKFLOW.title}
              </h2>
              <p className="sheet-header__tagline">{WORKFLOW.tagline}</p>
            </div>
          </header>
        </div>
      </div>

      <div className="sheet-body">
        <div className="container">
          <div className="workflow-grid">
            {WORKFLOW.steps.map((step) => (
              <article className="workflow-card" key={step.n}>
                <div className="stamp-badge">
                  <span className="stamp-circle">{step.n}</span>
                  <span className="stamp-underlined">{step.stamp}</span>
                </div>
                <h3 className="workflow-card__title">{step.title}</h3>
                <p className="workflow-card__desc">{step.desc}</p>
                <div className="workflow-card__foot">
                  <span>OUTPUT</span>
                  <strong>{step.output}</strong>
                </div>
              </article>
            ))}
          </div>

          {/* Merged studio-register KPI ledger. */}
          <div className="kpi-ledger" aria-label={WORKFLOW.register.label}>
            <div className="sheet-header__meta">
              <span>{WORKFLOW.register.meta[0]}</span>
              <div className="sheet-header__rule"></div>
              <span>{WORKFLOW.register.meta[1]}</span>
            </div>
            <div className="metrics-grid">
              {WORKFLOW.register.kpis.map((kpi) => (
                <div className="metric-box" key={kpi.label}>
                  <div className="metric-number">{kpi.num}</div>
                  <div className="metric-label">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}