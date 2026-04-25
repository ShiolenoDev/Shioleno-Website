import Link from 'next/link'
import { contactInfo, navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type FooterProps = {
  className?: string
}

export function Footer ({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        'mt-auto border-t border-border/40 bg-card text-sm',
        className
      )}
    >
      <div className="container grid max-w-6xl gap-14 py-20 md:grid-cols-2 md:gap-16 lg:grid-cols-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            {contactInfo.company}
          </p>
          <p className="mt-4 leading-[1.7] text-foreground/90">
            {contactInfo.addressLine1}
            <br />
            {contactInfo.cityStateZip}
          </p>
          <p className="mt-4">
            <a
              className="text-foreground/90 transition-colors duration-500 hover:text-primary"
              href={`tel:${contactInfo.phone.replace(/-/g, '')}`}
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
          <p className="mt-1">
            <a
              className="text-muted-foreground transition-colors duration-500 hover:text-primary"
              href={contactInfo.website}
              rel="noreferrer"
            >
              {contactInfo.websiteDisplay}
            </a>
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Navigate
          </p>
          <ul className="mt-4 flex list-none flex-col gap-3" role="list">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  className="text-sm text-foreground/85 transition-colors duration-500 hover:text-primary"
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Legal
          </p>
          <ul className="mt-4 flex list-none flex-col gap-3" role="list">
            <li>
              <Link
                className="text-sm text-foreground/85 transition-colors duration-500 hover:text-primary"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-foreground/85 transition-colors duration-500 hover:text-primary"
                href="/terms-of-use"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/30 py-8 text-center text-xs text-muted-foreground">
        Copyright © 2026 Shioleno Industries Inc. All Rights Reserved
      </div>
    </footer>
  )
}
