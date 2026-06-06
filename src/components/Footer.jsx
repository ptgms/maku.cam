import Wordmark from './Wordmark.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <Wordmark size={18} />
        <div className="footer-links">
          <a href="https://docs.ptgms.space/maku/privacy/" target="_blank" rel="noopener">
            Privacy Policy
          </a>
          <a href="https://docs.ptgms.space/maku/terms/" target="_blank" rel="noopener">
            Terms of Use
          </a>
        </div>
        <p className="footer-copy">© 2025 maku. Made with intention.</p>
      </div>
    </footer>
  )
}
