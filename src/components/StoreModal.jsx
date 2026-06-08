import { useEffect } from 'react'
import { APP_STORE_URL, PLAY_STORE_URL } from '../stores.js'
import './StoreModal.css'

// Fallback chooser shown when we can't detect the visitor's platform.
export default function StoreModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="store-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Choose your store"
    >
      <div className="store-modal" onClick={(e) => e.stopPropagation()}>
        <button className="store-modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h3>Get maku</h3>
        <p>Pick your platform to download the app.</p>
        <div className="store-modal-actions">
          <a href={APP_STORE_URL} className="btn btn-primary" target="_blank" rel="noopener">
            <span className="apple-mark" aria-hidden="true">&#63743;</span>
            App Store
          </a>
          <a href={PLAY_STORE_URL} className="btn btn-ghost" target="_blank" rel="noopener">
            <span className="play-mark" aria-hidden="true">&#9654;</span>
            Google Play
          </a>
        </div>
      </div>
    </div>
  )
}
