import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/site/FadeIn";
import { Button } from "@/components/ui/button";
import { homeHeadline, homeSubheadline } from "@/lib/site-data";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Millwork & Casework",
  description: siteConfig.description,
  path: "/millwork",
});

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <section
        className="relative border-b border-border/20"
        aria-label="Welcome"
      >
        <div
          className="relative w-full"
          style={{ marginLeft: "calc(50% - 50vw)", width: "100vw" }}
        >
          <div className="relative min-h-[min(64vh,820px)] w-full overflow-hidden sm:min-h-[min(70vh,900px)]">
            <Image
              src="/images/hero-landing.png"
              alt="Modern professional showroom with charcoal and wood service counters, product shelving, and warm ambient lighting."
              fill
              className="object-cover object-[center_40%]"
              sizes="100vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/35 via-black/45 to-black/65"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-28 bg-gradient-to-t from-background to-transparent sm:h-36"
              aria-hidden
            />
            <div className="relative z-[3] flex min-h-[min(64vh,820px)] flex-col justify-end sm:min-h-[min(70vh,900px)]">
              <div className="container max-w-5xl px-4 pb-20 pt-20 sm:px-6 sm:pb-24 sm:pt-24 md:px-8 md:pb-32 md:pt-28">
                <div className="max-w-3xl md:max-w-[42rem]">
                  <FadeIn>
                    <h1 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.5),0_4px_28px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl lg:text-7xl">
                      {homeHeadline}
                    </h1>
                  </FadeIn>
                  <FadeIn className="mt-7" delayMs={100}>
                    <p className="max-w-2xl text-base leading-[1.65] text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] sm:text-lg">
                      {homeSubheadline}
                    </p>
                  </FadeIn>
                  <FadeIn className="mt-10 flex flex-wrap gap-3" delayMs={180}>
                    <Button
                      asChild
                      size="lg"
                      className="min-w-[180px] border-0 bg-white text-foreground uppercase tracking-[0.1em] shadow-md hover:bg-white/90"
                    >
                      <Link href="/millwork/what-we-do">What we do</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="min-w-[180px] border-white bg-transparent uppercase tracking-[0.1em] text-white hover:border-white hover:bg-white/10 hover:text-white"
                    >
                      <Link href="/millwork/contact">Contact us</Link>
                    </Button>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-tile-section-wash">
        <div className="container max-w-5xl py-20 md:py-28">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="border border-border/60 bg-card p-8 shadow-sm md:p-10">
              <h2 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground sm:text-3xl">
                Manufacturing at scale
              </h2>
              <p className="mt-5 text-sm leading-[1.75] text-muted-foreground sm:text-base">
                Custom casework, millwork, and fixtures engineered for
                durability, precision, and predictable delivery across
                hospitality, healthcare, retail, commercial trade, and special
                projects.
              </p>
              <div className="mt-8">
                <Button asChild variant="link" className="h-auto p-0">
                  <Link href="/millwork/about">About our approach</Link>
                </Button>
              </div>
            </div>
            <div className="border border-border/60 bg-card p-8 shadow-sm md:p-10">
              <h2 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground sm:text-3xl">
                Get a quote
              </h2>
              <p className="mt-5 text-sm leading-[1.75] text-muted-foreground sm:text-base">
                Share your project details and timeline — we will follow up to
                align scope, options, and next steps.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/millwork/contact">Start the conversation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
