import Image from "next/image";
import Link from "next/link";
import { Images } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { FadeIn } from "@/components/site/FadeIn";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { GALLERY_FILTER_QUERY_KEY, type WhatWeDoCategory } from "@/lib/site-data";
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
          <div className="mb-8 flex flex-col gap-4 sm:gap-5 md:flex-row md:items-start md:justify-between md:gap-6 lg:gap-8">
            <SectionHeading
              as="h2"
              title={category.headline}
              className="mb-0 min-w-0 flex-1"
              id={`${category.id}-heading`}
            />
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full min-w-0 shrink-0 sm:min-w-[220px] sm:w-auto"
            >
              <Link
                href={`/millwork/gallery?${GALLERY_FILTER_QUERY_KEY}=${category.id}`}
                className="inline-flex items-center justify-center gap-2"
              >
                <Images className="h-4 w-4 opacity-90" aria-hidden />
                Go to gallery
              </Link>
            </Button>
          </div>
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
        <FadeIn className="mt-8">
          <CTASection
            title="Discuss this scope with our team"
            buttonText="Contact us"
            href="/millwork/contact"
          />
        </FadeIn>
      </div>
    </section>
  );
}
