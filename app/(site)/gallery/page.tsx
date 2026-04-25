// import { GalleryGrid } from '@/components/site/GalleryGrid'
import { PageHero } from "@/components/site/PageHero";
// import { galleryItems } from '@/lib/site-data'
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Gallery",
  description:
    "Project gallery: hospitality, retail, healthcare, and trade environments — custom casework, millwork, and commercial fixtures from Shioleno Industries.",
  path: "/gallery",
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
          <p className="text-center font-display text-2xl font-medium tracking-[-0.02em] text-muted-foreground sm:text-3xl">
            In Progress
          </p>
          {/*
          <GalleryGrid items={galleryItems} />
          */}
        </div>
      </section>
    </main>
  );
}
