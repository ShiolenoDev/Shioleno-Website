import { IndustrySection } from "@/components/site/IndustrySection";
import { IndustryTile } from "@/components/site/IndustryTile";
import { PageHero } from "@/components/site/PageHero";
import { FadeIn } from "@/components/site/FadeIn";
import { whatWeDoCategories } from "@/lib/site-data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "What We Do",
  description:
    "Custom manufacturing for Hospitality, Healthcare, Retail, and Commercial Trade — including special projects — engineered casework, millwork, and fixtures with national delivery and project support.",
  path: "/millwork/what-we-do",
});

export default function WhatWeDoPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        title="What We Do"
        description="Custom manufacturing solutions for Hospitality, Healthcare, Retail, and Commercial Trade environments, including special projects."
      />
      <section className="bg-tile-section-wash">
        <div className="container max-w-6xl py-20 md:py-24">
          <div className="mb-8">
            <FadeIn>
              <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Sectors
              </h2>
            </FadeIn>
            <p className="mt-2 max-w-2xl font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-foreground/95 sm:text-3xl">
              Jump to category
            </p>
          </div>
          <ul
            className="grid list-none gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
            role="list"
          >
            {whatWeDoCategories.map((c, i) => (
              <li key={c.id} className="h-full">
                <IndustryTile
                  href={`/millwork/what-we-do#${c.id}`}
                  title={c.title}
                  index={i}
                  className="h-full w-full"
                  image={c.tileImage}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      {whatWeDoCategories.map((c, i) => (
        <IndustrySection key={c.id} category={c} variantIndex={i} />
      ))}
    </main>
  );
}
