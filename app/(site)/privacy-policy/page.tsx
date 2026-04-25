import Link from 'next/link'
import { PageHero } from '@/components/site/PageHero'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description:
    'Shioleno Industries privacy policy: how we collect, use, and protect information when you use our website or contact our team.',
  path: '/privacy-policy',
  includeKeywords: false
})

const bodyClass =
  'text-base leading-[1.75] text-muted-foreground sm:text-lg'
const h2Class =
  'font-display text-xl font-medium tracking-[-0.02em] text-foreground sm:text-2xl'
const listClass =
  'list-disc space-y-2 pl-5 text-foreground/90'

export default function PrivacyPolicyPage () {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        asTitle="h1"
        title="Privacy Policy"
        description="Effective date: [Insert Date]"
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
                Shioleno Industries, Inc. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
                respects your privacy and is committed to protecting the information you provide when
                using our website.
              </p>
              <p className={bodyClass}>
                This Privacy Policy explains what information we collect and how we use it.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>2. Information We Collect</h2>
              <p className={bodyClass}>
                We may collect the following information when you use our website:
              </p>
              <ul className={listClass} role="list">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name, if provided</li>
                <li>Any information you include in a message or contact form</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>3. How We Use Your Information</h2>
              <p className={bodyClass}>We use the information collected to:</p>
              <ul className={listClass} role="list">
                <li>Respond to inquiries and provide requested information</li>
                <li>Communicate with you regarding your project or request</li>
              </ul>
              <p className={bodyClass}>
                We do not sell, rent, or share your personal information with third parties for
                marketing purposes.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>4. Data Security</h2>
              <p className={bodyClass}>
                We take reasonable measures to protect your information from unauthorized access,
                misuse, or disclosure.
              </p>
              <p className={bodyClass}>
                However, no method of transmission over the internet is 100% secure.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>5. Third-Party Services</h2>
              <p className={bodyClass}>
                We may use trusted third-party services, such as hosting or email providers, to
                operate our website and communicate with users. These services may have access to
                information only as needed to perform their functions.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>6. Your Rights</h2>
              <p className={bodyClass}>You may request to:</p>
              <ul className={listClass} role="list">
                <li>Access the personal information we have about you</li>
                <li>Correct or update your information</li>
                <li>Request that we delete your information</li>
              </ul>
              <p className={bodyClass}>
                To do so, please contact us using the information below.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>7. Contact Information</h2>
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
                  href="mailto:info@shiolenomillwork.com"
                >
                  info@shiolenomillwork.com
                </a>
              </p>
            </section>
            <section className="space-y-4">
              <h2 className={h2Class}>8. Updates to This Policy</h2>
              <p className={bodyClass}>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated effective date.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
