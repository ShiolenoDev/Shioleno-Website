'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { splitLandingDepartments } from '@/lib/site-data'
import { cn } from '@/lib/utils'

/**
 * Desk hero + centered headline and two division columns (wood / metal), matching
 * legacy landing mock; primary CTAs to `/millwork` and `/metal`.
 */
export function SplitLandingExperience () {
  const [hovered, setHovered] = useState<'wood' | 'metal' | null>(null)

  return (
    <main
      id="main-content"
      className="relative flex min-h-[calc(100dvh-4rem)] flex-1 flex-col md:min-h-[calc(100dvh-4.5rem)]"
      onMouseLeave={() => {
        setHovered(null)
      }}
    >
      <div className="relative w-full flex-1 overflow-hidden">
        <Image
          src="/images/desk-header.png"
          alt="Curved wood reception desk, white countertop, and wood-paneled lobby — Shioleno millwork."
          fill
          className="object-cover object-[38%_center]"
          sizes="100vw"
          priority
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/35 via-black/42 to-black/55"
          aria-hidden
        />
        <div
          className={cn(
            'pointer-events-none absolute inset-y-0 left-0 z-[2] w-1/2 bg-black/0 transition-[background-color] duration-500',
            hovered === 'metal' && 'bg-black/40'
          )}
          aria-hidden
        />
        <div
          className={cn(
            'pointer-events-none absolute inset-y-0 right-0 z-[2] w-1/2 bg-black/0 transition-[background-color] duration-500',
            hovered === 'wood' && 'bg-black/40'
          )}
          aria-hidden
        />
        <div className="relative z-[3] flex min-h-[calc(100dvh-4rem)] flex-col items-center px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 md:min-h-[calc(100dvh-4.5rem)] md:px-10 md:pb-24 md:pt-14">
          <div className="flex w-full max-w-5xl flex-1 flex-col items-center justify-center">
            <h1 className="text-center font-display text-[1.65rem] font-semibold uppercase leading-[1.12] tracking-[0.14em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] sm:text-3xl sm:tracking-[0.16em] md:text-[2.35rem] md:leading-[1.15] lg:text-5xl lg:tracking-[0.18em]">
              Bespoke precision
            </h1>

            <div
              className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-10 sm:mt-14 md:mt-16 md:grid-cols-2 md:gap-6 lg:gap-10"
              role="presentation"
            >
              {splitLandingDepartments.map((dept) => {
                const isWood = dept.id === 'wood'
                const enterLabel = `Enter ${isWood ? 'millwork site' : 'metal fabrication site'}`
                return (
                  <div
                    key={dept.id}
                    className={cn(
                      'group relative flex flex-col items-center px-2 py-8 text-center sm:px-4 sm:py-10 md:px-6',
                      'rounded-sm border border-white/10 bg-black/20 backdrop-blur-[1px] sm:bg-black/25',
                      isWood ? 'md:border-r md:border-white/15 md:pr-8 lg:pr-10' : 'md:pl-8 lg:pl-10'
                    )}
                    onMouseEnter={() => {
                      setHovered(dept.id)
                    }}
                  >
                    <Link
                      href={dept.href}
                      className="absolute inset-0 z-[1] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/60"
                      aria-label={`${enterLabel} — ${dept.title}`}
                    />
                    <h2 className="pointer-events-none relative z-[2] text-balance font-display text-xl font-bold uppercase tracking-[0.2em] text-white sm:text-2xl sm:tracking-[0.24em]">
                      {dept.title}
                    </h2>
                    <dl className="relative z-[2] mt-7 w-full max-w-[240px] space-y-4 text-left text-white sm:mt-8 sm:max-w-none sm:space-y-5">
                      <div>
                        <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/75">
                          Phone
                        </dt>
                        <dd className="mt-1.5">
                          <a
                            href={`tel:${dept.phoneTel}`}
                            className="relative z-[3] text-sm font-medium tabular-nums tracking-wide text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.4)] transition-colors hover:text-white sm:text-base"
                          >
                            {dept.phoneDisplay}
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/75">
                          Email
                        </dt>
                        <dd className="mt-1.5 break-all text-sm text-white sm:text-[0.95rem]">
                          <a
                            href={`mailto:${dept.email}`}
                            className="relative z-[3] transition-colors hover:text-white/95 hover:underline hover:underline-offset-2"
                          >
                            {dept.email}
                          </a>
                        </dd>
                      </div>
                    </dl>
                    <Link
                      href={dept.href}
                      className={cn(
                        'relative z-[3] mt-8 inline-flex min-h-11 items-center justify-center border-2 border-white bg-white/10 px-6 py-2.5 text-center font-display text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white',
                        'transition-colors duration-300 hover:border-white hover:bg-white hover:text-black',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50'
                      )}
                    >
                      {isWood ? 'Millwork site' : 'Metal site'}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
