import { useEffect, useState } from 'react'
import { reduceMotion } from './reduceMotion'

/**
 * Site-wide motion, run once from SiteLayout:
 * - [data-reveal] elements fade and slide in when they scroll into view (re-scanned on every route change)
 * - --sy on <html> follows scroll position, for parallax layers (.sh-parallax)
 * - .sh-spot elements get --mx / --my under the pointer, for the soft spotlight on hover
 * Returns whether the page has scrolled past the top (for the glass header).
 */
export function useSiteMotion(routeKey) {
  const [scrolled, setScrolled] = useState(false)

  // Scroll position for parallax + header state.
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      if (!reduceMotion()) document.documentElement.style.setProperty('--sy', String(y))
      setScrolled(y > 12)
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame) }
  }, [])

  // Pointer spotlight on cards and tiles.
  useEffect(() => {
    const onMove = e => {
      const el = e.target.closest?.('.sh-spot')
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])

  // Scroll reveals, re-scanned after each route change.
  useEffect(() => {
    const items = () => document.querySelectorAll('[data-reveal]:not(.is-in)')
    if (reduceMotion() || !('IntersectionObserver' in window)) {
      items().forEach(el => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 })
    // Wait a frame so the new route's DOM is in place.
    const t = setTimeout(() => items().forEach(el => io.observe(el)), 30)
    return () => { clearTimeout(t); io.disconnect() }
  }, [routeKey])

  return scrolled
}
