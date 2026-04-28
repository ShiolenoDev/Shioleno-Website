import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/site/FadeIn";
import { WhatWeDoHashLink } from "@/components/site/WhatWeDoHashLink";

type IndustryTileProps = {
  href: string;
  title: string;
  className?: string;
  index?: number;
  image?: { src: string; alt: string };
};

export function IndustryTile({
  href,
  title,
  className,
  index = 0,
  image,
}: IndustryTileProps) {
  const hasImage = Boolean(image);

  return (
    <FadeIn delayMs={index * 80} className="h-full">
      <WhatWeDoHashLink
        href={href}
        className={cn(
          "group relative flex h-full min-h-[200px] flex-col justify-end overflow-hidden border border-border/60 shadow-sm",
          "transition duration-500 ease-out hover:border-border hover:shadow-md",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/50",
          !hasImage && "min-h-[140px] bg-card",
          hasImage && "min-h-[220px] sm:min-h-[240px] lg:min-h-[260px]",
          className,
        )}
      >
        {image ? (
          <>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background from-[18%] via-background/80 to-transparent to-60%"
              aria-hidden
            />
          </>
        ) : null}
        <div className="relative z-[1] flex flex-col p-6">
          <span
            className={cn(
              "text-xs font-medium uppercase tracking-[0.25em] transition duration-500",
              hasImage
                ? "text-foreground/95"
                : "text-muted-foreground group-hover:text-foreground/90",
            )}
          >
            {title}
          </span>
          <span className="mt-3 inline-flex items-center text-sm font-medium text-foreground/95">
            View details
            <span
              className="ml-2 text-primary transition duration-500 group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </span>
          {hasImage ? (
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground/80">
              <span aria-hidden>Gallery</span>
              <ChevronDown
                className="h-4 w-4 text-foreground/85"
                strokeWidth={2.25}
                aria-hidden
              />
            </span>
          ) : null}
        </div>
      </WhatWeDoHashLink>
    </FadeIn>
  );
}
