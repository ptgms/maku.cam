import Wordmark from './Wordmark.jsx'
import { useDownload } from '../download.jsx'
import './Nav.css'

export default function Nav() {
  const download = useDownload()
  return (
    <nav>
      <div className="nav-inner">
        <Wordmark />
        <a href="#" className="btn btn-primary nav-cta" onClick={download}>
          Download
        </a>
      </div>
    </nav>
  )
}
