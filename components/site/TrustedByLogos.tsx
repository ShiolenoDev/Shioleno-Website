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
        <div className="container max-w-5xl px-5 py-14 sm:px-6 sm:py-16 md:py-20">
          <ul
            className="mx-auto flex list-none flex-wrap items-center justify-center gap-x-6 gap-y-10 p-0 sm:gap-x-10 sm:gap-y-12 md:gap-x-12"
            role="list"
          >
            {aboutPartnerLogos.map((logo) => (
              <li
                key={logo.src}
                className="flex h-[3.6rem] w-[9.6rem] items-center justify-center sm:h-[4.8rem] sm:w-48 md:h-24 md:w-[14.4rem]"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 640px) 10rem, (max-width: 768px) 12rem, 15rem"
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
