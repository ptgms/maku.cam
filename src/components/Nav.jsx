import Wordmark, { APP_STORE_URL } from './Wordmark.jsx'
import './Nav.css'

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <Wordmark />
        <a href={APP_STORE_URL} className="btn btn-primary nav-cta" target="_blank" rel="noopener">
          Download
        </a>
      </div>
    </nav>
  )
}
