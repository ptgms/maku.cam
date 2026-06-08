export const APP_STORE_URL = '' // todo
export const PLAY_STORE_URL = '' // todo

// Best-effort guess at the visitor's mobile platform.
// Returns 'ios', 'android', or null when we can't tell (e.g. desktop).
export function detectPlatform() {
  if (typeof navigator === 'undefined') return null

  const ua = navigator.userAgent || navigator.vendor || ''

  if (/android/i.test(ua)) return 'android'

  // iPadOS 13+ reports as a Mac, so also sniff for touch.
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (/Macintosh/.test(ua) && typeof document !== 'undefined' && 'ontouchend' in document)
  if (isIOS) return 'ios'

  return null
}

export function storeUrlFor(platform) {
  if (platform === 'ios') return APP_STORE_URL
  if (platform === 'android') return PLAY_STORE_URL
  return null
}
