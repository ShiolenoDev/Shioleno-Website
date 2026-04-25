import Image from "next/image";
import { CTASection } from "@/components/site/CTASection";
import { FadeIn } from "@/components/site/FadeIn";
import { SectionHeading } from "@/components/site/SectionHeading";
import type { WhatWeDoCategory } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type IndustrySectionProps = {
  category: WhatWeDoCategory;
  variantIndex: number;
  className?: string;
};

export function IndustrySection({
  category,
  variantIndex,
  className,
}: IndustrySectionProps) {
  return (
    <section
      id={category.id}
      className={cn(
        "scroll-mt-28 py-24 last:pb-28 md:py-32",
        variantIndex % 2 === 0 ? "bg-background" : "bg-card",
        className,
      )}
      aria-labelledby={`${category.id}-heading`}
    >
      <div className="container max-w-6xl">
        <FadeIn>
          <SectionHeading
            as="h2"
            title={category.headline}
            className="mb-8"
            id={`${category.id}-heading`}
          />
        </FadeIn>
        <FadeIn className="mt-2">
          <p className="max-w-3xl text-base leading-[1.75] text-muted-foreground sm:text-lg">
            {category.description}
          </p>
        </FadeIn>
        <FadeIn className="mt-10">
          <ul className="max-w-3xl list-disc space-y-3 pl-5 text-foreground/90">
            {category.bullets.map((b) => (
              <li key={b} className="leading-[1.7]">
                {b}
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn className="mt-12">
          <ul
            className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-3 sm:gap-4"
            role="list"
          >
            {category.sectionImages.map((img) => (
              <li key={img.src}>
                <div className="overflow-hidden rounded-xl border border-border/15 bg-muted/10 shadow-sm">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 639px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn className="mt-14">
          <CTASection
            title="Discuss this scope with our team"
            buttonText="Contact us"
            href="/contact"
          />
        </FadeIn>
      </div>
    </section>
  );
}
