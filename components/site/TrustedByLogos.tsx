import Image from 'next/image'
import { aboutPartnerLogos } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const titleClass = cn(
  'font-display text-balance text-lg font-semibold leading-[1.1] text-foreground',
  'tracking-[-0.02em] sm:text-xl md:text-2xl',
  'lg:text-[1.75rem] lg:leading-[1.12]'
)

type TrustedByLogosProps = {
  className?: string
}

const breakout =
  'relative left-1/2 right-auto w-screen max-w-[100vw] -translate-x-1/2'

export function TrustedByLogos ({ className }: TrustedByLogosProps) {
  return (
    <section
      className={cn('overflow-x-clip', breakout, className)}
      aria-labelledby="trusted-by-heading"
    >
      <div className="bg-white">
        <div className="container max-w-5xl px-2.5 py-14 sm:px-5 sm:py-16 md:px-6 md:py-20">
          <ul
            className="mx-auto grid w-full list-none auto-rows-auto grid-cols-2 items-center justify-items-stretch justify-center gap-x-2 gap-y-7 p-0 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 md:grid-cols-4 md:gap-x-8 md:gap-y-12 lg:grid-cols-5 lg:gap-x-10"
            role="list"
          >
            {aboutPartnerLogos.map((logo, index) => (
              <li
                key={logo.src}
                className="flex w-full min-w-0 items-center justify-center"
              >
                <div
                  className={cn(
                    'relative w-full',
                    index === 0 ? 'h-32' : 'h-32 md:h-24',
                    index === 0 && 'z-[1]',
                  )}
                  style={
                    index === 0
                      ? { transform: 'scale(1.2)', transformOrigin: 'center' }
                      : undefined
                  }
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain object-center"
                    sizes={
                      index === 0
                        ? '(max-width: 768px) 55vw, (max-width: 1024px) 26vw, 19rem'
                        : '(max-width: 768px) 40vw, (max-width: 1024px) 20vw, 16rem'
                    }
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 border-t border-border/25 pt-10 text-center sm:mt-12 sm:pt-12 md:mt-14 md:pt-14">
            <h2 id="trusted-by-heading" className={titleClass}>
              Shioleno Industries Trusted by National Brands
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
