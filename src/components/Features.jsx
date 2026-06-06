import './Features.css'

const FEATURES = [
  {
    icon: '🎞️',
    title: 'Instant-film frames',
    body: 'Every photo comes out as a film print - thick white border, caption space below. Like a real Polaroid, only it lives in your pocket.',
  },
  {
    icon: '📆',
    title: 'Weekly Rolls',
    body: 'Photos sort themselves into the week they were taken. Each roll is a chapter. No folders, no albums to curate. Just your life, week by week.',
  },
  {
    icon: '✨',
    title: 'Film filters',
    body: 'Shoot in warm vintage Retro or grainy black-and-white. The look bakes into the film at capture - what you frame is what you get.',
  },
  {
    icon: '✏️',
    title: 'Captions & Albums',
    body: 'Write on the white border like real instant film. Pull shots into named albums - Vacation, Family, Tuesday. Share as a grid, a PDF photobook, or a collage.',
  },
  {
    icon: '📍',
    title: 'Location tagging',
    body: "New photos remember where they were taken. Your location never leaves your albums - it's stored only on places where you have access to, no one else.",
  },
  {
    icon: '⏱️',
    title: 'Self-timer & flash',
    body: '3- and 10-second countdown timers. Front and back cameras. A flash that works like a real camera’s. Everything you need for a good shot, nothing else.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">What&rsquo;s inside</span>
          <h2>
            Everything you need.
            <br />
            Nothing you don&rsquo;t.
          </h2>
        </div>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <article
              key={f.title}
              className="feature-card reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <span className="feature-icon" aria-hidden="true">
                {f.icon}
              </span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
