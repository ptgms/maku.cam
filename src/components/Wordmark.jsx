const APP_STORE_URL = 'https://apps.apple.com/app/maku/id6744310703'

export { APP_STORE_URL }

export default function Wordmark({ size = 22, href = '#hero' }) {
  return (
    <a href={href} className="wordmark" aria-label="maku" style={{ fontSize: size }}>
      maku
      <span className="wordmark-bar" />
    </a>
  )
}
