import Link from 'next/link'
import { PageHero } from '@/components/site/PageHero'
import { millworkEmails } from '@/lib/site-data'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Terms of Use',
  description:
    'Terms of use for the Shioleno Industries website: acceptable use, disclaimers, intellectual property, and contact information.',
  path: '/terms-of-use',
  includeKeywords: false
})

const bodyClass =
  'text-base leading-[1.75] text-muted-foreground sm:text-lg'
const h2Class =
  'font-display text-xl font-medium tracking-[-0.02em] text-foreground sm:text-2xl'
const listClass =
  'list-disc space-y-2 pl-5 text-foreground/90'

export default function TermsOfUsePage () {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        asTitle="h1"
        title="Terms of Use"
        description="Effective date: May 1, 2026"
      />
      <section className="bg-background">
        <div className="container max-w-3xl py-16 md:py-24">
          <Link
            href="/"
            className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-500 hover:text-primary"
          >
            ← Home
          </Link>
          <div className="mt-10 space-y-10 md:space-y-12">
            <section className="space-y-4">
              <h2 className={h2Class}>1. Introduction</h2>
              <p className={bodyClass}>
                These Terms of Use (&ldquo;Terms&rdquo;) govern your use of the website operated by
                Shioleno Industries, Inc. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
              </p>
              <p className={bodyClass}>
                By accessing or using this website, you agree to these Terms. If you do not agree,
                please do not use the site.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>2. Use of Website</h2>
              <p className={bodyClass}>
                This website is provided for general informational purposes about our services.
              </p>
              <p className={bodyClass}>You agree to use the website in a lawful manner and not to:</p>
              <ul className={listClass} role="list">
                <li>Attempt to gain unauthorized access to any part of the site</li>
                <li>Interfere with the functionality or security of the site</li>
                <li>Use the site for any fraudulent or harmful activity</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>3. Information Accuracy</h2>
              <p className={bodyClass}>
                We make reasonable efforts to ensure the information on this website is accurate and
                up to date. However, we do not guarantee the completeness, accuracy, or reliability of
                any information.
              </p>
              <p className={bodyClass}>Information on this site may change at any time without notice.</p>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>4. No Guarantees or Warranties</h2>
              <p className={bodyClass}>
                All content on this website is provided &ldquo;as is&rdquo; without warranties of any
                kind, either express or implied.
              </p>
              <p className={bodyClass}>We do not guarantee:</p>
              <ul className={listClass} role="list">
                <li>That the website will always be available or error-free</li>
                <li>That any information provided will meet your specific needs</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>5. Limitation of Liability</h2>
              <p className={bodyClass}>
                To the fullest extent permitted by law, Shioleno Industries, Inc. shall not be liable
                for any damages arising from your use of, or inability to use, this website.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>6. Third-Party Links</h2>
              <p className={bodyClass}>
                This website may include links to third-party websites. We are not responsible for
                the content or practices of those sites.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>7. Contact and Inquiries</h2>
              <p className={bodyClass}>
                Submitting a form or contacting us through this website does not create a formal
                business agreement. Any services will be subject to separate agreements.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>8. Intellectual Property</h2>
              <p className={bodyClass}>
                All content on this website, including text, images, and branding, is the property of
                Shioleno Industries, Inc. unless otherwise stated.
              </p>
              <p className={bodyClass}>
                You may not copy, reproduce, or distribute content without permission.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>9. Changes to These Terms</h2>
              <p className={bodyClass}>
                We may update these Terms from time to time. Any changes will be posted on this page
                with an updated effective date.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>10. Contact Information</h2>
              <p className={bodyClass}>Shioleno Industries, Inc.</p>
              <p className={bodyClass}>
                1715 Peyco Dr North
                <br />
                Arlington, TX 76001
              </p>
              <p className={bodyClass}>
                <a
                  className="text-primary underline-offset-2 transition-colors hover:underline"
                  href="tel:8175579365"
                >
                  817-557-9365
                </a>
              </p>
              <p className={bodyClass}>
                <a
                  className="text-primary underline-offset-2 transition-colors hover:underline"
                  href={`mailto:${millworkEmails.info}`}
                >
                  {millworkEmails.info}
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
