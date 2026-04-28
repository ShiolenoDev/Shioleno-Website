'use client'

import Link from 'next/link'
import { useCallback, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type WhatWeDoHashLinkProps = {
  href: string
  className?: string
  children: ReactNode
}

/**
 * Same-page #hash jumps: update the URL and scroll smoothly. Uses native
 * `scrollIntoView` so the browser can optimize the animation (custom rAF
 * scrolling felt laggy on long distances).
 */
export function WhatWeDoHashLink ({
  href,
  className,
  children
}: WhatWeDoHashLinkProps) {
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (typeof window === 'undefined') return
      const url = new URL(href, window.location.origin)
      if (url.pathname !== window.location.pathname || !url.hash) return
      const id = url.hash.slice(1)
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      void window.history.pushState(null, '', href)
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
    },
    [href]
  )

  return (
    <Link href={href} scroll={false} className={cn(className)} onClick={onClick}>
      {children}
    </Link>
  )
}
