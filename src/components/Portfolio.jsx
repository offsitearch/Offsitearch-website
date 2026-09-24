import { useState } from 'react'
import { PROJECTS, FILTERS, DOSSIER } from '../data/projects'
import { useStore } from '../ui/Store'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const { openProject } = useStore()

  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <section className="portfolio-section deck-slide" id="dossier" aria-labelledby="dossier-title">
      <div className="sheet-head">
        <div className="container">
          <header className="sheet-header">
            <div className="sheet-header__meta">
              <span>{DOSSIER.meta[0]}</span>
              <div className="sheet-header__rule"></div>
              <span>{DOSSIER.meta[1]}</span>
            </div>
            <div className="sheet-header__title-row">
              <h2 className="sheet-header__title" id="dossier-title">
                {DOSSIER.title}
              </h2>
              <p className="sheet-header__tagline">{DOSSIER.tagline}</p>
            </div>
          </header>
        </div>
      </div>

      <div className="sheet-body">
        <div className="container">
          <div className="manila-folder">
            <div className="manila-folder__tabs" role="tablist" aria-label="Project Archive Tabs">
              <div className="manila-tab active" role="tab" aria-selected="true">
                <span>{DOSSIER.tabs[0]}</span>
              </div>
              <div className="manila-tab" role="tab" aria-selected="false">
                <span>{DOSSIER.tabs[1]}</span>
              </div>
            </div>

            <div className="manila-folder__body">
              <div className="filter-bar">
                <div className="filter-pills" role="toolbar" aria-label="Filter Categories">
                  {FILTERS.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      className={`filter-btn${filter === f.id ? ' active' : ''}`}
                      onClick={() => setFilter(f.id)}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
                <div className="dossier-count">
                  Showing {visible.length} of {PROJECTS.length} archived sheets
                </div>
              </div>

              <div className="projects-grid">
                {visible.map((p) => (
                  <article
                    key={p.id}
                    className="project-card"
                    data-category={p.category}
                    data-project-id={p.id}
                    onClick={() => openProject(p)}
                  >
                    <div className="project-card__thumb">
                      <img src={p.thumb} alt={p.alt} width="512" height="512" decoding="async" loading="lazy" />
                      <span className="project-scale-badge">{p.scale}</span>
                    </div>
                    <div className="project-card__info">
                      <span className="project-meta-type">{p.type}</span>
                      <h3 className="project-title">{p.title}</h3>
                      <p className="project-location">{p.blurb}</p>
                      <div className="project-card__meta-bar">
                        <span>{p.drg}</span>
                        <span className="view-drawing-link">{DOSSIER.inspectText}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}