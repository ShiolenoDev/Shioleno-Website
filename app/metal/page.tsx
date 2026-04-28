import Image from 'next/image'
import Link from 'next/link'
import { splitLandingDepartments } from '@/lib/site-data'
import { buildPageMetadata } from '@/lib/seo'

const metal = splitLandingDepartments[1]

export const metadata = buildPageMetadata({
  title: 'Metal Fabrication',
  description:
    'Metal fabrication at Shioleno Industries — Arlington, TX. Site launching soon; contact the division below.',
  path: '/metal',
  includeKeywords: true
})

export default function MetalPage () {
  return (
    <main
      id="main-content"
      className="relative flex min-h-[calc(100dvh-4rem)] flex-1 flex-col md:min-h-[calc(100dvh-4.5rem)]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/images/metal-landing.png"
          alt=""
          fill
          className="object-cover object-[center_40%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />
      </div>
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20 md:px-8">
        <div className="w-full max-w-lg border border-white/15 bg-background/90 px-8 py-12 text-center shadow-lg backdrop-blur-sm sm:px-12 sm:py-14 supports-[backdrop-filter]:bg-background/85">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Under construction
          </p>
          <h1 className="mt-6 font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Metal fabrication
          </h1>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Site launching soon — contact us below.
          </p>
          <dl className="mt-10 space-y-6 text-left">
            <div>
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Phone
              </dt>
              <dd className="mt-2">
                <a
                  href={`tel:${metal.phoneTel}`}
                  className="font-display text-lg text-foreground transition-colors hover:text-primary"
                >
                  {metal.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </dt>
              <dd className="mt-2 break-all">
                <a
                  href={`mailto:${metal.email}`}
                  className="text-base text-foreground underline-offset-4 transition-colors hover:text-primary"
                >
                  {metal.email}
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-10 text-xs text-muted-foreground">
            <Link
              href="/"
              className="font-medium uppercase tracking-[0.2em] text-foreground/80 underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Back
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
