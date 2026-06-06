import { APP_STORE_URL } from './Wordmark.jsx'
import './MakuPlus.css'

const PERKS = [
  'Create custom film looks - grain, warmth, contrast, vignette, and more',
  'Back up your photos to your private iCloud - survives a reinstall or a new phone',
  'Unlock all four app icons',
]

export default function MakuPlus() {
  return (
    <section id="pro" className="section">
      <div className="container">
        <div className="pro-card reveal">
          <div className="pro-text">
            <span className="eyebrow">maku+</span>
            <h2>Unlock everything.</h2>
            <p className="sub">Custom filters, iCloud backup, and every app icon.</p>

            <ul className="pro-perks">
              {PERKS.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>

            <a href={APP_STORE_URL} className="btn btn-primary" target="_blank" rel="noopener">
              Get maku+ <span className="maku-plus-badge">maku+</span>
            </a>
            <p className="pro-note">Thanks for supporting maku.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
