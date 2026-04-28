'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { metalNavLinks, navLinks } from '@/lib/site-data'
import type { NavLink } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const logoSrc = '/images/shioleno_full.svg'

const MOBILE_ITEM_DELAY_MS = 45

const logoClassName = 'h-7 w-auto opacity-95 sm:h-8'

function headerLinkIsActive (href: string, pathname: string, isMetal: boolean): boolean {
  if (isMetal) {
    return href === '/metal'
      ? pathname === '/metal' || pathname.startsWith('/metal/')
      : pathname === href || pathname.startsWith(`${href}/`)
  }
  if (href === '/millwork') return pathname === '/millwork'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header () {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const menuId = useId()
  const [mounted, setMounted] = useState(false)

  const isLanding = pathname === '/'
  const isMetalSection = pathname === '/metal' || pathname.startsWith('/metal/')
  const headerNavLinks: NavLink[] = isMetalSection ? metalNavLinks : navLinks
  const useMobileMenu = headerNavLinks.length > 1
  const navAriaLabel = isMetalSection ? 'Metal fabrication' : 'Main'

  useEffect(() => {
    if (isLanding) {
      setOpen(false)
    }
  }, [isLanding])

  useEffect(() => {
    if (!useMobileMenu) {
      setOpen(false)
    }
  }, [useMobileMenu])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open || !useMobileMenu) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open, useMobileMenu])

  const mapLink = (link: NavLink, i: number, inMenuList: boolean) => {
    const active = headerLinkIsActive(link.href, pathname, isMetalSection)
    const itemClass = cn(
      inMenuList
        ? 'block w-full py-5 text-center text-base font-medium uppercase tracking-[0.2em] transition-colors duration-500 sm:py-6 sm:text-lg'
        : 'px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500 hover:text-foreground',
      active
        ? 'text-foreground'
        : inMenuList
          ? 'text-muted-foreground hover:text-foreground'
          : 'text-muted-foreground'
    )
    if (inMenuList) {
      return (
        <li
          key={link.href}
          className="border-b border-border/20 last:border-b-0"
          style={{
            transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
            transitionDelay: open ? `${i * MOBILE_ITEM_DELAY_MS}ms` : '0ms',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(0.5rem)'
          }}
        >
          <Link
            className={itemClass}
            href={link.href}
            onClick={() => {
              setOpen(false)
            }}
          >
            {link.label}
          </Link>
        </li>
      )
    }
    return (
      <Link key={link.href} className={itemClass} href={link.href}>
        {link.label}
      </Link>
    )
  }

  return (
    <header
      className={cn(
        'font-display sticky top-0 z-50 w-full border-b transition-[background,backdrop-filter,border-color,color] duration-500 ease-out',
        isLanding
          ? 'border-border/40 bg-background text-foreground'
          : open
            ? 'border-border/40 bg-background/90 text-foreground backdrop-blur-md supports-[backdrop-filter]:bg-background/85'
            : scrolled
              ? 'border-border/40 bg-background/80 text-foreground backdrop-blur-md supports-[backdrop-filter]:bg-background/70'
              : 'border-transparent bg-background/0 text-foreground'
      )}
    >
      {isLanding ? (
        <div className="container flex h-16 max-w-6xl items-center justify-between gap-4 md:h-[4.5rem]">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={() => {
              setOpen(false)
            }}
          >
            <Image
              src={logoSrc}
              alt="Shioleno Industries"
              width={220}
              height={40}
              className={logoClassName}
              priority
            />
          </Link>
          <p className="shrink-0 text-right font-display text-sm font-bold uppercase leading-none tracking-[0.16em] text-black sm:text-base md:text-lg lg:text-xl lg:tracking-[0.18em]">
            EST 1983
          </p>
        </div>
      ) : useMobileMenu ? (
        <div className="container flex h-16 max-w-6xl items-center justify-between gap-4 md:h-[4.5rem]">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={() => {
              setOpen(false)
            }}
          >
            <Image
              src={logoSrc}
              alt="Shioleno Industries"
              width={220}
              height={40}
              className={logoClassName}
              priority
            />
          </Link>
          <nav
            className="hidden items-center gap-0 lg:flex lg:gap-1"
            aria-label={navAriaLabel}
          >
            {headerNavLinks.map((link) => mapLink(link, 0, false))}
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="shrink-0"
              onClick={() => {
                setOpen((o) => !o)
              }}
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      ) : (
        <div className="container flex h-16 max-w-6xl items-center justify-between gap-4 md:h-[4.5rem]">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={() => {
              setOpen(false)
            }}
          >
            <Image
              src={logoSrc}
              alt="Shioleno Industries"
              width={220}
              height={40}
              className={logoClassName}
              priority
            />
          </Link>
          <nav aria-label={navAriaLabel}>
            {headerNavLinks.map((link) => {
              const active = headerLinkIsActive(link.href, pathname, isMetalSection)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-500 hover:text-foreground',
                    active && 'text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
      {mounted && !isLanding && useMobileMenu
        ? createPortal(
            <div
              id={menuId}
              className={cn(
                'fixed left-0 right-0 z-[100] flex min-h-0 flex-col border-t border-border/25',
                'bg-gradient-to-b from-card via-card to-background/80 backdrop-blur-lg',
                'top-16 md:top-[4.5rem] bottom-0',
                'transition-[opacity,transform,visibility] duration-500 ease-out',
                open
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-2 pointer-events-none opacity-0',
                'lg:hidden'
              )}
              style={{ willChange: open ? 'opacity, transform' : 'auto' }}
              aria-hidden={!open}
            >
              <div className="flex h-full min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain px-6 py-6 sm:px-10 sm:py-8">
                <ul
                  className="mx-auto flex w-full max-w-md flex-1 list-none flex-col items-stretch justify-center gap-0 py-4"
                  role="list"
                >
                  {headerNavLinks.map((link, i) => mapLink(link, i, true))}
                </ul>
              </div>
            </div>,
            document.body
          )
        : null}
    </header>
  )
}
