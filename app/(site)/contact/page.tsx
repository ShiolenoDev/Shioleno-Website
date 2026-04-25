import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { contactInfo } from "@/lib/site-data";
import { FadeIn } from "@/components/site/FadeIn";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact Shioleno Industries in Arlington, TX. Request a quote for casework, millwork, and fixtures — reliable timelines, controlled costs, nationwide support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        asTitle="h1"
        title="Let's make your next project easier"
        description="Reliable timelines. Controlled costs. Proven execution."
      />
      <div className="bg-tile-section-wash-inverse">
        <div className="container max-w-6xl py-20 md:py-28">
          <div className="grid gap-16 lg:grid-cols-[1fr,1.15fr] lg:items-start">
            <FadeIn>
              <div className="border border-border/60 bg-card p-8 shadow-sm md:p-10">
                <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  Contact
                </h2>
                <p className="mt-4 font-medium text-foreground/95">
                  {contactInfo.company}
                </p>
                <p className="mt-3 text-sm leading-[1.75] text-muted-foreground sm:text-base">
                  {contactInfo.addressLine1}
                  <br />
                  {contactInfo.cityStateZip}
                </p>
                <p className="mt-5">
                  <a
                    className="text-foreground/95 transition-colors duration-500 hover:text-primary"
                    href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
                  >
                    {contactInfo.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a
                    className="text-foreground/90 transition-colors duration-500 hover:text-primary"
                    href={`mailto:${contactInfo.email}`}
                  >
                    {contactInfo.email}
                  </a>
                </p>
                <p className="mt-1 text-sm">
                  <a
                    className="text-muted-foreground transition-colors duration-500 hover:text-primary"
                    href={contactInfo.website}
                    rel="noreferrer"
                  >
                    {contactInfo.websiteDisplay}
                  </a>
                </p>
              </div>
            </FadeIn>
            <div>
              <h2 className="sr-only">Send a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
