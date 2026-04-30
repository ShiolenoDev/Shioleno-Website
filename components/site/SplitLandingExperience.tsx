import Image from 'next/image'
import Link from 'next/link'
import { splitLandingDepartments } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const heroTitleLine =
  'block font-display text-[1.65rem] font-semibold uppercase leading-[1.08] tracking-[0.14em] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.35)] sm:text-3xl sm:tracking-[0.16em] md:text-[2.35rem] md:leading-[1.12] lg:text-5xl lg:tracking-[0.18em]'

/**
 * Desk hero + headline and two division columns (wood / metal).
 * Static layout — no hover-driven dimming or layout shift; site CTAs are bordered buttons with a white fill on hover.
 */
export function SplitLandingExperience () {
  return (
    <main
      id="main-content"
      className="relative flex min-h-[calc(100dvh-4rem)] flex-1 flex-col md:min-h-[calc(100dvh-4.5rem)]"
    >
      <div className="relative w-full flex-1 overflow-hidden">
        <Image
          src="/images/desk-header.png"
          alt="Curved wood reception desk, white countertop, and wood-paneled lobby — Shioleno millwork."
          fill
          className="object-cover object-[38%_center] brightness-[1.07] contrast-[0.97]"
          sizes="100vw"
          priority
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/15 via-black/22 to-black/32"
          aria-hidden
        />
        <div className="relative z-[2] flex min-h-[calc(100dvh-4rem)] flex-col items-center px-4 pb-10 pt-8 sm:px-8 sm:pb-14 sm:pt-10 md:min-h-[calc(100dvh-4.5rem)] md:px-12 md:pb-20 md:pt-12">
          <div className="flex w-full max-w-6xl flex-1 flex-col items-center">
            <header className="w-full shrink-0 text-center">
              <h1 className="text-balance">
                <span className={heroTitleLine}>Bespoke precision</span>
                <span className={cn(heroTitleLine, 'mt-2 sm:mt-3')}>
                  Fabrication
                </span>
              </h1>
            </header>

            <div
              className="mt-auto w-full max-w-5xl pt-16 sm:pt-20 md:pt-24"
              role="presentation"
            >
              <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16 lg:gap-x-20 xl:gap-x-28">
                {splitLandingDepartments.map((dept) => {
                  const isWood = dept.id === 'wood'
                  return (
                    <div
                      key={dept.id}
                      className="flex flex-col items-center px-2 py-2 text-center sm:px-6"
                    >
                      <h2 className="text-balance font-display text-xl font-bold uppercase tracking-[0.2em] text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.35)] sm:text-2xl sm:tracking-[0.24em]">
                        {dept.title}
                      </h2>
                      <dl className="mt-7 w-full max-w-[280px] space-y-4 text-center text-white sm:mt-8 sm:max-w-none sm:space-y-5">
                        <div>
                          <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/80">
                            Phone
                          </dt>
                          <dd className="mt-1.5 flex justify-center">
                            <a
                              href={`tel:${dept.phoneTel}`}
                              className="text-sm font-medium tabular-nums tracking-wide text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.3)] transition-colors hover:text-primary sm:text-base"
                            >
                              {dept.phoneDisplay}
                            </a>
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/80">
                            Email
                          </dt>
                          <dd className="mt-1.5 flex justify-center break-all text-sm text-white sm:text-[0.95rem]">
                            <a
                              href={`mailto:${dept.email}`}
                              className="max-w-full transition-colors hover:text-primary hover:underline hover:underline-offset-2"
                            >
                              {dept.email}
                            </a>
                          </dd>
                        </div>
                      </dl>
                      <Link
                        href={dept.href}
                        className={cn(
                          'relative mt-9 inline-flex min-w-[12.5rem] items-center justify-center overflow-hidden',
                          'rounded-sm border-2 border-white bg-transparent px-8 py-3',
                          'font-display text-[0.65rem] font-bold uppercase tracking-[0.24em] text-white',
                          'outline-none transition-[color,background-color,box-shadow,transform] duration-300 ease-out',
                          'hover:bg-white hover:text-zinc-900 hover:shadow-[0_4px_24px_rgba(255,255,255,0.2)]',
                          'active:scale-[0.99]',
                          'focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50'
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
      </div>
    </main>
  )
}
