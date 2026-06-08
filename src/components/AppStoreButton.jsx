import { useState } from 'react'
import { detectPlatform } from '../stores.js'
import { useDownload } from '../download.jsx'

// Primary cream CTA. Adapts its label/glyph to the detected platform and
// routes the click through the shared download handler (store link or modal).
export default function AppStoreButton({ children, className = 'btn-primary' }) {
  const download = useDownload()
  const [platform] = useState(detectPlatform)

  let glyph = null
  let label = children || 'Download maku'
  if (!children) {
    if (platform === 'ios') {
      glyph = <span className="apple-mark" aria-hidden="true">&#63743;</span>
      label = 'Download on the App Store'
    } else if (platform === 'android') {
      glyph = <span className="play-mark" aria-hidden="true">&#9654;</span>
      label = 'Get it on Google Play'
    }
  }

  return (
    <a href="#" className={`btn ${className}`.trim()} onClick={download}>
      {glyph}
      {label}
    </a>
  )
}
