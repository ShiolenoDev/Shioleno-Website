import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FadeIn } from "@/components/site/FadeIn";
import { CTASection } from "@/components/site/CTASection";
import { TrustedByLogos } from "@/components/site/TrustedByLogos";
import {
  aboutEngineeredForDurability,
  aboutExecution,
  aboutManufacturingAdvantage,
  aboutOnePartner,
  aboutWhatSetsUsApart,
  aboutWhatYouCanExpect,
} from "@/lib/site-data";
import { buildPageMetadata } from "@/lib/seo";

const aboutEngineeredDurabilityImages: Array<{
  src: string;
  alt: string;
  width: number;
  height: number;
}> = [
  {
    src: "/images/about-what-sets-us-apart.png",
    alt: "Automated production line with a large wood panel on a roller conveyor, yellow safety fencing, and industrial equipment in a modern manufacturing facility.",
    width: 684,
    height: 424,
  },
  {
    src: "/images/about-engineered-durability-2.png",
    alt: "A large-scale automated CNC or panel machine with an overhead dust-collection system on a factory floor.",
    width: 678,
    height: 454,
  },
  {
    src: "/images/about-engineered-durability-3.png",
    alt: "HOMAG industrial woodworking line with panels on a roller conveyor, overhead dust collection, and wire safety fencing in a production facility.",
    width: 682,
    height: 600,
  },
  {
    src: "/images/about-engineered-durability-4.png",
    alt: "A HOMAG industrial machine processing wood panels, surrounded by wire safety fencing, in a clean warehouse.",
    width: 660,
    height: 422,
  },
  {
    src: "/images/about-engineered-durability-5.png",
    alt: "CNC woodworking center in operation, with a control console, vacuum hoses, and team members on the production floor.",
    width: 656,
    height: 460,
  },
];

const aboutManufacturingAdvantageImages = aboutEngineeredDurabilityImages.slice(
  0,
  2,
);
const aboutEngineeredForDurabilityFirstImage: {
  src: string;
  alt: string;
  width: number;
  height: number;
} = {
  src: "/images/about-engineered-durability-1.png",
  alt:
    "High-angle view of a manufacturing plant floor with large processing equipment, overhead ductwork, red structural steel, and industrial lighting.",
  width: 684,
  height: 424,
};
const aboutEngineeredDurabilityOnlyImages = [
  aboutEngineeredForDurabilityFirstImage,
  ...aboutEngineeredDurabilityImages.slice(2).filter(
    (image) => image.src !== "/images/about-engineered-durability-3.png",
  ),
];

const aboutExecutionImages: Array<{
  src: string;
  alt: string;
  width: number;
  height: number;
}> = [
  {
    src: "/images/about-execution-1.png",
    alt: "Warehouse floor with rows of strapped, shrink-wrapped flat packs on pallets, loading bay door, and high-angle industrial view.",
    width: 912,
    height: 454,
  },
  {
    src: "/images/about-execution-2.png",
    alt: "Organized distribution warehouse with blue pallet racks, stacked inventory, and yellow safety lines on a concrete floor.",
    width: 926,
    height: 432,
  },
];

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Over 40 years of precision casework, millwork, and fixtures. Engineering depth, advanced production, and scalable U.S. manufacturing for national programs.",
  path: "/millwork/about",
});

function BulletList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul
      className={`list-disc space-y-3 pl-5 text-sm leading-[1.75] text-foreground/88 sm:text-base ${className || ""}`}
    >
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

/** Visual break between about sections — gradient rule + bronze marker */
function AboutSectionDivider () {
  return (
    <div
      className="my-12 flex items-center gap-3 md:my-16"
      role="separator"
      aria-hidden
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/70 to-border/40" />
      <div
        className="h-1.5 w-1.5 shrink-0 rotate-45 border border-primary/50 bg-background"
        aria-hidden
      />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border/70 to-border/40" />
    </div>
  );
}

export default function AboutPage () {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        asTitle="h1"
        title="Built for Precision. Engineered for Scale."
      />
      <div className="bg-tile-section-wash">
        <div className="container max-w-4xl py-20 md:py-28">
          <FadeIn>
            <div className="space-y-6 sm:space-y-7">
              <p className="text-base leading-[1.8] text-muted-foreground sm:text-lg">
                With over 40 years of experience, Shioleno Industries delivers
                high-quality, engineered casework and millwork solutions —
                designed to keep projects on time and on budget.
              </p>
              <p className="mt-6 text-base leading-[1.8] text-muted-foreground sm:text-lg">
                Shioleno Industries is a precision-focused manufacturing partner
                specializing in custom casework, millwork and fixtures for
                hospitality, commercial retail/trade and healthcare environments.
              </p>
              <p className="mt-6 text-base leading-[1.8] text-muted-foreground sm:text-lg">
                With decades of experience, we combine engineering expertise,
                advanced production capabilities, and scalable operations to
                deliver consistent, high-quality results — across every project.
              </p>
            </div>
          </FadeIn>

          <AboutSectionDivider />

          <section aria-labelledby="what-sets-us-apart">
            <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-10 lg:gap-12">
              <FadeIn>
                <figure className="w-full">
                  <div className="overflow-hidden rounded-xl border border-border/20 bg-white shadow-sm">
                    <div className="relative aspect-[4/3] w-full sm:aspect-[3/2]">
                      <Image
                        src={aboutEngineeredDurabilityImages[2].src}
                        alt={aboutEngineeredDurabilityImages[2].alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 767px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </figure>
              </FadeIn>
              <div>
                <FadeIn>
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.28em] text-primary/90">
                    Differentiators
                  </p>
                  <SectionHeading
                    as="h2"
                    id="what-sets-us-apart"
                    title="What sets us apart"
                    className="mb-6"
                  />
                </FadeIn>
                <FadeIn delayMs={50}>
                  <BulletList items={aboutWhatSetsUsApart} />
                </FadeIn>
              </div>
            </div>
          </section>

          <AboutSectionDivider />

          <section
            aria-labelledby="manufacturing-advantage"
            className="space-y-6 md:space-y-8"
          >
            <FadeIn>
              <p className="mb-1 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Production
              </p>
              <SectionHeading
                as="h2"
                id="manufacturing-advantage"
                title="Manufacturing advantage"
                className="mb-4"
              />
              <h3 className="mt-2 font-display text-2xl font-medium tracking-[-0.02em] text-foreground/95 sm:text-3xl">
                {aboutManufacturingAdvantage.heading}
              </h3>
            </FadeIn>
            <FadeIn className="mt-2" delayMs={30}>
              <BulletList items={aboutManufacturingAdvantage.bullets} />
            </FadeIn>
            <FadeIn delayMs={50}>
              <ul
                className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2"
                role="list"
              >
                {aboutManufacturingAdvantageImages.map((image) => (
                  <li key={image.src}>
                    <div className="overflow-hidden rounded-xl border border-border/20 bg-white shadow-sm">
                      <div className="relative aspect-[4/3] w-full sm:aspect-[3/2]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 639px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </section>

          <AboutSectionDivider />

          <section
            aria-labelledby="engineered-durability"
            className="space-y-6 md:space-y-8"
          >
            <FadeIn>
              <p className="mb-1 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Quality
              </p>
              <SectionHeading
                as="h2"
                id="engineered-durability"
                title="Engineered for durability"
                className="mb-4"
              />
              <h3 className="mt-2 font-display text-2xl font-medium tracking-[-0.02em] text-foreground/95 sm:text-3xl">
                {aboutEngineeredForDurability.heading}
              </h3>
            </FadeIn>
            <FadeIn className="mt-2" delayMs={30}>
              <BulletList items={aboutEngineeredForDurability.bullets} />
            </FadeIn>
            <FadeIn delayMs={50}>
              <ul
                className="grid list-none grid-cols-1 gap-3 p-0 sm:gap-4 md:grid-cols-2 lg:grid-cols-3"
                role="list"
              >
                {aboutEngineeredDurabilityOnlyImages.map((image, index) => (
                  <li
                    key={`${image.src}-engineered-durability-${String(index)}`}
                    className="min-w-0"
                  >
                    <div className="overflow-hidden rounded-xl border border-border/20 bg-white shadow-sm">
                      <div className="relative aspect-[4/3] w-full min-h-0">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </section>

          <AboutSectionDivider />

          <section aria-labelledby="what-you-can-expect" className="space-y-5">
            <FadeIn>
              <p className="mb-1 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Partnership
              </p>
              <SectionHeading
                as="h2"
                id="what-you-can-expect"
                title="What you can expect"
                className="mb-2"
              />
            </FadeIn>
            <FadeIn className="mt-1" delayMs={50}>
              <BulletList items={aboutWhatYouCanExpect} />
            </FadeIn>
          </section>

          <AboutSectionDivider />

          <section aria-labelledby="execution">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-primary/90">
              Delivery
            </p>
            <div className="grid gap-8 md:grid-cols-[minmax(0,320px)_1fr] md:items-start md:gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-12">
              <FadeIn>
                <ul
                  className="list-none space-y-3 p-0 sm:space-y-4"
                  role="list"
                >
                  {aboutExecutionImages.map((image) => (
                    <li key={image.src}>
                      <div className="overflow-hidden rounded-xl border border-border/20 bg-muted/10 shadow-sm">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          className="h-auto w-full object-cover"
                          sizes="(max-width: 767px) 100vw, 360px"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <div>
                <FadeIn>
                  <SectionHeading
                    as="h2"
                    id="execution"
                    title="Execution you can rely on"
                    className="mb-4"
                  />
                  <p className="mt-2 text-base font-medium leading-[1.65] text-foreground/95 sm:text-lg">
                    {aboutExecution.quote}
                  </p>
                </FadeIn>
                <FadeIn className="mt-4" delayMs={50}>
                  <BulletList items={aboutExecution.bullets} />
                </FadeIn>
              </div>
            </div>
          </section>

          <AboutSectionDivider />

          <section aria-labelledby="one-partner" className="space-y-8">
            <FadeIn>
              <p className="mb-1 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Full service
              </p>
              <SectionHeading
                as="h2"
                id="one-partner"
                title="Everything you need — one partner"
                className="mb-4"
              />
              <p className="text-base leading-[1.8] text-muted-foreground sm:text-lg">
                {aboutOnePartner.quote}
              </p>
            </FadeIn>
            <div className="mt-2 grid gap-6 pt-6 sm:grid-cols-3 sm:gap-8 sm:pt-8">
              <FadeIn>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Manufacturing
                </h3>
                <ul
                  className="mt-3 list-disc space-y-2 pl-5 text-foreground/90"
                  role="list"
                >
                  {aboutOnePartner.columns.manufacturing.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delayMs={60}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Project support
                </h3>
                <ul
                  className="mt-3 list-disc space-y-2 pl-5 text-foreground/90"
                  role="list"
                >
                  {aboutOnePartner.columns.projectSupport.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delayMs={120}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Logistics
                </h3>
                <ul
                  className="mt-3 list-disc space-y-2 pl-5 text-foreground/90"
                  role="list"
                >
                  {aboutOnePartner.columns.logistics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </section>

          <AboutSectionDivider />

          <FadeIn>
            <TrustedByLogos />
          </FadeIn>

          <div className="pt-4 md:pt-6">
            <FadeIn>
              <CTASection
                title="Start a project conversation"
                href="/millwork/contact"
                buttonText="Contact us"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}
