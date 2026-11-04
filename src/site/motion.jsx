import { Fragment, useEffect, useRef, useState } from 'react'
import { reduceMotion } from './reduceMotion'

/*
 * Motion helpers for the SHAROME site. No animation library: IntersectionObserver, requestAnimationFrame
 * and CSS transitions. Everything respects "reduce motion" in the visitor's OS settings.
 */

/**
 * Headline that rises in word by word. Wrap a word in *asterisks* to set it in the italic accent face.
 * Screen readers get the plain sentence.
 */
export function SplitWords({ text, as = 'h1', className = '', delay = 0 }) {
  const Tag = as
  const plain = text.replace(/\*/g, '')
  const words = text.split(' ')
  return (
    <Tag className={`sh-split-words ${className}`} aria-label={plain}>
      {words.map((w, i) => {
        const accent = w.startsWith('*')
        const clean = w.replace(/\*/g, '')
        return (
          <Fragment key={i}>
            <span className="sh-w" aria-hidden="true">
              <span className={accent ? 'sh-accent' : undefined} style={{ '--i': i + delay }}>{clean}</span>
            </span>
            {i < words.length - 1 ? ' ' : ''}
          </Fragment>
        )
      })}
    </Tag>
  )
}

/** Number that counts up from 0 the first time it scrolls into view. */
export function CountUp({ to, duration = 1400, suffix = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(() => (reduceMotion() ? to : 0))

  useEffect(() => {
    const el = ref.current
    if (!el || reduceMotion() || !('IntersectionObserver' in window)) {
      const f = requestAnimationFrame(() => setValue(to))
      return () => cancelAnimationFrame(f)
    }
    let frame = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = now => {
        const p = Math.min(1, (now - start) / duration)
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(frame) }
  }, [to, duration])

  return <span ref={ref} className="sh-num">{value}{suffix}</span>
}
