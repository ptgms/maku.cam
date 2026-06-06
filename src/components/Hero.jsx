import AppStoreButton from './AppStoreButton.jsx'
import FilmFrame from './FilmFrame.jsx'
import { demo } from '../assets/index.js'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <span className="eyebrow">for iPhone</span>
        <h1>
          A roll of film,
          <br />
          not a camera roll.
        </h1>
        <p className="lead">
          Eight shots a week. No bursts, no do-overs.
          <br />
          The limit is the point - you start seeing again.
        </p>

        <div className="hero-cta-group">
          <AppStoreButton />
          <a href="#concept" className="btn btn-ghost">
            Learn more
          </a>
        </div>

        <div className="film-cluster" aria-hidden="true">
          <FilmFrame src={demo.bird} className="frame-back-left" />
          <FilmFrame src={demo.mountains} className="frame-center" caption="walk in evening" />
          <FilmFrame src={demo.forrest} className="frame-back-right" />
        </div>
      </div>
    </section>
  )
}
