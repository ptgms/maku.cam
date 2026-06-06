import { icons } from '../assets/index.js'
import './AppIcons.css'

const ICON_SET = [
  { src: icons.camera, name: 'Camera', tag: 'the original', free: true },
  { src: icons.eightAWeek, name: '8 a Week', tag: 'loud & proud', free: false },
  { src: icons.film, name: 'Film', tag: 'warm & analog', free: false },
  { src: icons.typography, name: 'Typography', tag: 'clean & quiet', free: false },
]

export default function AppIcons() {
  return (
    <section id="icons" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Make it yours</span>
          <h2>Four icons. One app.</h2>
          <p className="icons-intro">
            Choose the home-screen icon that fits your vibe. The default camera is always free.
            Unlock the rest with maku+.
          </p>
        </div>

        <div className="icons-grid">
          {ICON_SET.map((icon, i) => (
            <div
              key={icon.name}
              className={`icon-item reveal${icon.free ? ' free-icon' : ''}`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <img src={icon.src} alt={`${icon.name} app icon`} />
              <div className="icon-name">{icon.name}</div>
              <div className="icon-tag">{icon.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
