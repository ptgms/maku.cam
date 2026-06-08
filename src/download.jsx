import { createContext, useCallback, useContext, useState } from 'react'
import { detectPlatform, storeUrlFor } from './stores.js'
import StoreModal from './components/StoreModal.jsx'

const DownloadContext = createContext(null)

export function DownloadProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false)

  // Send the visitor straight to their store; fall back to the chooser modal.
  const download = useCallback((e) => {
    const url = storeUrlFor(detectPlatform())
    if (url) {
      if (e) e.preventDefault()
      window.open(url, '_blank', 'noopener')
    } else {
      if (e) e.preventDefault()
      setModalOpen(true)
    }
  }, [])

  return (
    <DownloadContext.Provider value={download}>
      {children}
      <StoreModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </DownloadContext.Provider>
  )
}

export function useDownload() {
  return useContext(DownloadContext)
}
