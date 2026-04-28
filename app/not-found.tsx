import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Page not found'
}

export default function NotFound () {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main
        id="main-content"
        className="relative flex flex-1 flex-col items-center justify-center px-6 py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          aria-hidden
        >
          <div className="absolute left-1/2 top-0 h-[min(50vh,28rem)] w-[min(90vw,42rem)] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/[0.12] via-transparent to-transparent blur-3xl" />
        </div>
        <div className="relative w-full max-w-lg">
          <div
            className="absolute -left-px top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-primary/80 via-primary/40 to-primary/15 sm:top-10 sm:bottom-10"
            aria-hidden
          />
          <div className="border border-border/60 bg-card/95 py-14 pl-10 pr-8 shadow-[0_1px_0_0_hsl(0_0%_100%_/_0.7)_inset,0_12px_40px_-12px_hsl(0_0%_0%_/_0.08)] backdrop-blur-[2px] sm:py-16 sm:pl-14 sm:pr-12 supports-[backdrop-filter]:bg-card/90">
            <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-primary">
              404
            </p>
            <h1 className="mt-4 font-display text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl">
              Page not found
            </h1>
            <p className="mt-5 max-w-sm text-sm leading-[1.7] text-muted-foreground sm:text-base">
              This URL doesn&apos;t match anything on the site. Return to the main
              page to continue.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="min-w-[200px]">
                <Link href="/">Back to home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
