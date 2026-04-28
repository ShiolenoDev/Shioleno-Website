import { Suspense } from "react";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { PageHero } from "@/components/site/PageHero";
import { galleryItems } from "@/lib/site-data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Gallery",
  description:
    "Project gallery: hospitality, retail, healthcare, and trade environments — custom casework, millwork, and commercial fixtures from Shioleno Industries.",
  path: "/millwork/gallery",
});

export default function GalleryPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        title="Gallery"
        description="Representative work across hospitality, retail, healthcare, and trade — custom casework, millwork, and commercial fixtures."
      />
      <section className="bg-tile-section-wash">
        <div className="container max-w-6xl py-20 md:py-28">
          <Suspense
            fallback={
              <div
                className="h-12 max-w-md animate-pulse rounded-md bg-muted/40"
                aria-hidden
              />
            }
          >
            <GalleryGrid items={galleryItems} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
