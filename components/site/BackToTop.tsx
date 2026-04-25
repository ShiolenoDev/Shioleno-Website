'use client'

import { ChevronUp } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SCROLL_PX = 200

export function BackToTop () {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isHome) return
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_PX)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const scrollToTop = useCallback(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }, [])

  if (isHome) return null

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 z-40 h-10 w-10 rounded-sm border border-border/80 !normal-case !tracking-normal',
        'bg-card/95 shadow-sm backdrop-blur-sm',
        'transition duration-500 ease-out [transition-property:opacity,transform,border-color,box-shadow]',
        'hover:border-primary/50 hover:shadow',
        'focus-visible:ring-1 focus-visible:ring-primary/30',
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-1 opacity-0'
      )}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ChevronUp className="h-4 w-4 text-primary" aria-hidden />
    </Button>
  )
}
