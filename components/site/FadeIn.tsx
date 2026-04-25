'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type FadeInProps = {
  children: ReactNode
  className?: string
  delayMs?: number
}

const DURATION_MS = 600

export function FadeIn ({ children, className, delayMs = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true)
            obs.disconnect()
            break
          }
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'will-change-transform [transition:opacity_600ms_cubic-bezier(0.22,1,0.36,1),transform_600ms_cubic-bezier(0.22,1,0.36,1)]',
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-2.5 opacity-0',
        className
      )}
      style={{
        transitionDuration: `${DURATION_MS}ms`,
        ...(delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : {})
      }}
    >
      {children}
    </div>
  )
}
