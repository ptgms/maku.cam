import { useEffect } from 'react'

// Adds `.visible` to every `.reveal` element as it scrolls into view.
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
