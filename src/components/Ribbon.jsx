import { RIBBON } from '../data'

export default function Ribbon() {
  const doubled = [...RIBBON.items, ...RIBBON.items]
  return (
    <div className="blueprint-ribbon" aria-hidden="true">
      <div className="ribbon-track">
        {doubled.map((item, i) => (
          <span className="ribbon-item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}