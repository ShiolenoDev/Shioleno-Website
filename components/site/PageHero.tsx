import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description?: string;
  className?: string;
  asTitle?: "h1" | "h2";
};

export function PageHero({
  title,
  description,
  className,
  asTitle: Title = "h1",
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "border-b border-border/25 bg-card py-20 shadow-sm md:py-28",
        className,
      )}
    >
      <div className="container max-w-4xl">
        <Title
          className={cn(
            "font-display text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-foreground",
            "sm:text-5xl md:text-6xl",
            "lg:text-[3.5rem] lg:leading-[1.05]",
          )}
        >
          {title}
        </Title>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-[1.65] text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
