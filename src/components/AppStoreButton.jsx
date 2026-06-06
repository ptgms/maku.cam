import { APP_STORE_URL } from './Wordmark.jsx'

// Apple logo glyph + label, styled as the primary cream CTA.
export default function AppStoreButton({ children = 'Download on the App Store', className = 'btn-primary' }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`btn ${className}`.trim()}
      target="_blank"
      rel="noopener"
    >
      <span className="apple-mark" aria-hidden="true">&#63743;</span>
      {children}
    </a>
  )
}
