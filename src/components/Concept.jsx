import FilmFrame from './FilmFrame.jsx'
import { demo } from '../assets/index.js'
import './Concept.css'

export default function Concept() {
  return (
    <section id="concept" className="section">
      <div className="container">
        <div className="concept-grid">
          <div className="concept-text reveal">
            <span className="eyebrow">Eight a week</span>
            <h2>
              You get eight exposures.
              <br />
              That&rsquo;s the whole idea.
            </h2>
            <p>
              When you only have eight shots, every frame matters. You stop shooting everything and
              start shooting <em>something</em>. maku slows photography down to something more personal, 
              one careful shot at a time.
            </p>
            <p>
              Each week starts fresh on Monday. Your photos file themselves into weekly Rolls, so
              looking back feels like flipping through a journal, not scrolling a feed.
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <FilmFrame
              className="concept-frame"
              src={demo.cat}
              alt="A cat photo in a film frame"
              caption="new family member"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
