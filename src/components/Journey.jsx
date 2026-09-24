import { useJourneyLifecycle } from '../hooks/useJourney'
import { JOURNEY } from '../data'

export default function Journey() {
  const { journeyRef } = useJourneyLifecycle()
  const { phases } = JOURNEY

  return (
    <>
      <section ref={journeyRef} className="hero-scroll" id="journey" aria-label="The OFFSITE architectural journey">
        {phases.map((phase) => {
          const Heading = phase.n === 1 ? 'h1' : 'h2'
          return (
            <article
              key={phase.id}
              id={phase.id}
              className={`hero-slide hero-slide--${phase.n}`}
              aria-labelledby={`${phase.id}-title`}
            >
              <div className="hero-slide__bg" data-frame-dir={phase.dir} data-frame-count="30"></div>
              <div className="hero-slide__veil" aria-hidden="true"></div>
              <div className="hero-slide__tint" aria-hidden="true"></div>
              <div className="hero-card">
                <span className="hero-card__label">
                  <span className="hero-card__label-dot" aria-hidden="true"></span>
                  {phase.label}
                </span>
                <Heading className="hero-card__title" id={`${phase.id}-title`}>
                  {phase.title}
                </Heading>
                <p className="hero-card__desc">{phase.desc}</p>
              </div>
            </article>
          )
        })}
      </section>

      {/* 5-phase journey ruler: a real drafting-glass ruler in the project's
          main gold. The travelling gold fill runs 0→100% with scroll. */}
      <div className="phase-ruler" aria-hidden="true">
        <span className="phase-ruler__brand">{JOURNEY.brand}</span>
        <span className="phase-ruler__glass">
          <span className="phase-ruler__scale">
            {phases.map((phase, i) => (
              <span className="phase-ruler__mark" style={{ left: `${10 + i * 20}%` }} key={phase.id}>
                <i>{String(phase.n).padStart(2, '0')}</i>
              </span>
            ))}
          </span>
          <span className="phase-ruler__fill" aria-hidden="true"></span>
        </span>
        <span className="phase-ruler__unit">{JOURNEY.unit}</span>
      </div>
    </>
  )
}