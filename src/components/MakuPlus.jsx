import { useDownload } from '../download.jsx'
import './MakuPlus.css'

const PERKS = [
  'Create custom film looks - grain, warmth, contrast, vignette, and more',
  'Back up your photos to your private cloud - survives a reinstall or a new phone',
  'Unlock all four app icons',
]

export default function MakuPlus() {
  const download = useDownload()
  return (
    <section id="pro" className="section">
      <div className="container">
        <div className="pro-card reveal">
          <div className="pro-text">
            <span className="eyebrow">maku+</span>
            <h2>Unlock everything.</h2>
            <p className="sub">Custom filters, cloud backup, and every app icon.</p>

            <ul className="pro-perks">
              {PERKS.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>

            <a href="#" className="btn btn-primary" onClick={download}>
              Get maku+ <span className="maku-plus-badge">maku+</span>
            </a>
            <p className="pro-note">Thanks for supporting maku.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
