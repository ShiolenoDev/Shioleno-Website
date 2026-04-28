'use client'

import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FadeIn } from '@/components/site/FadeIn'
import {
  GALLERY_FILTER_QUERY_KEY,
  galleryCategoryLabels,
  parseGalleryFilterParam,
  type GalleryCategory,
  type GalleryItem
} from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const tabs: { id: GalleryCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'retail', label: 'Retail' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'trade', label: 'Trade' }
]

type GalleryGridProps = {
  items: GalleryItem[]
  className?: string
}

export function GalleryGrid ({ items, className }: GalleryGridProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const active = useMemo(
    () => parseGalleryFilterParam(searchParams.get(GALLERY_FILTER_QUERY_KEY)),
    [searchParams]
  )

  const setFilter = useCallback(
    (id: GalleryCategory | 'all') => {
      const params = new URLSearchParams(searchParams.toString())
      if (id === 'all') {
        params.delete(GALLERY_FILTER_QUERY_KEY)
      } else {
        params.set(GALLERY_FILTER_QUERY_KEY, id)
      }
      const q = params.toString()
      router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false })
    },
    [pathname, router, searchParams]
  )

  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)
  const [mounted, setMounted] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()

  const filtered = useMemo(() => {
    if (active === 'all') return items
    return items.filter((i) => i.category === active)
  }, [active, items])

  const lightboxIndex = useMemo(() => {
    if (!lightbox) return -1
    return filtered.findIndex((i) => i.id === lightbox.id)
  }, [lightbox, filtered])

  const openLightbox = useCallback((item: GalleryItem) => {
    setLightbox(item)
  }, [])

  const goLightbox = useCallback(
    (delta: number) => {
      if (lightboxIndex < 0 || filtered.length === 0) return
      const next = (lightboxIndex + delta + filtered.length) % filtered.length
      setLightbox(filtered[next])
    },
    [filtered, lightboxIndex]
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!lightbox) return
    if (!filtered.some((i) => i.id === lightbox.id)) {
      setLightbox(null)
    }
  }, [filtered, lightbox])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') goLightbox(1)
      if (e.key === 'ArrowLeft') goLightbox(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, goLightbox])

  useEffect(() => {
    if (!lightbox) {
      return undefined
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [lightbox])

  useEffect(() => {
    if (lightbox) {
      closeButtonRef.current?.focus()
    }
  }, [lightbox])

  const lightboxNode =
    lightbox && mounted ? (
      createPortal(
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/90 backdrop-blur-[2px] transition-opacity"
            aria-label="Close image viewer"
            onClick={() => setLightbox(null)}
          />
          <div
            className="relative z-10 flex max-h-[100dvh] w-full max-w-5xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 flex shrink-0 items-center justify-end gap-2 sm:mb-3">
              {filtered.length > 1 ? (
                <span className="mr-auto text-xs text-white/60">
                  {lightboxIndex + 1} / {filtered.length}
                </span>
              ) : null}
              <Button
                ref={closeButtonRef}
                type="button"
                size="icon"
                variant="outline"
                className="h-10 w-10 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                aria-label="Close"
                onClick={() => setLightbox(null)}
              >
                <X className="h-5 w-5" strokeWidth={2.25} />
              </Button>
            </div>
            <div className="relative flex min-h-0 w-full flex-1 items-center justify-center gap-2 sm:gap-3">
              {filtered.length > 1 ? (
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  className="h-9 w-9 shrink-0 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:h-10 sm:w-10"
                  aria-label="Previous image"
                  onClick={() => goLightbox(-1)}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              ) : null}
              <div className="relative h-[min(70dvh,720px)] w-full max-w-4xl">
                <Image
                  src={lightbox.imageSrc}
                  alt={`${lightbox.title}. ${lightbox.description}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>
              {filtered.length > 1 ? (
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  className="h-9 w-9 shrink-0 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:h-10 sm:w-10"
                  aria-label="Next image"
                  onClick={() => goLightbox(1)}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              ) : null}
            </div>
            <div className="mt-4 max-w-4xl self-center text-center sm:mt-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                {galleryCategoryLabels[lightbox.category]}
              </p>
              <h2
                id={titleId}
                className="mt-1 font-display text-lg font-medium tracking-[-0.01em] text-white sm:text-xl"
              >
                {lightbox.title}
              </h2>
              <p className="mt-2 text-sm text-white/80">{lightbox.description}</p>
            </div>
          </div>
        </div>,
        document.body
      )
    ) : null

  return (
    <div className={cn('space-y-14', className)}>
      {lightboxNode}
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter gallery by category"
      >
        {tabs.map((t) => (
          <Button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={active === t.id}
            variant={active === t.id ? 'default' : 'outline'}
            size="sm"
            className="!text-xs"
            onClick={() => {
              setFilter(t.id)
            }}
          >
            {t.label}
          </Button>
        ))}
      </div>
      <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {filtered.map((item, i) => (
          <li key={item.id}>
            <FadeIn delayMs={Math.min(i * 50, 300)}>
              <article
                className={cn(
                  'group overflow-hidden border border-border/60 bg-card',
                  'shadow-sm transition duration-500 ease-out hover:shadow',
                  'hover:border-border'
                )}
              >
                <button
                  type="button"
                  className="group/image relative block w-full overflow-hidden bg-muted text-left focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary/50"
                  onClick={() => openLightbox(item)}
                  aria-label={`Open full size: ${item.title}`}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.imageSrc}
                      alt=""
                      fill
                      className="object-cover transition duration-500 ease-out group-hover/image:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <span className="sr-only">
                    {item.title}
                    .
                    {item.description}
                  </span>
                </button>
                <div className="space-y-2 border-t border-border/30 bg-card px-4 py-4">
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    {galleryCategoryLabels[item.category]}
                  </p>
                  <h3 className="font-display text-lg font-medium tracking-[-0.01em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          </li>
        ))}
      </ul>
    </div>
  )
}
