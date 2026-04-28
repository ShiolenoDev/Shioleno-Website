import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import {
  defaultOgImageAlt,
  defaultOgImagePath,
  getSiteOrigin,
  ldJsonScriptContent
} from "@/lib/seo"
import { cn } from "@/lib/utils"
import "./globals.css"

const origin = getSiteOrigin()

export const metadata: Metadata = {
  metadataBase: new URL(origin + "/"),
  title: {
    default: "Shioleno Industries | Custom Casework, Millwork & Fixtures",
    template: "%s | Shioleno Industries"
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  icons: {
    icon: { url: "/images/favicon.png", type: "image/png" },
    shortcut: { url: "/images/favicon.png", type: "image/png" }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: defaultOgImagePath,
        alt: defaultOgImageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: [defaultOgImagePath]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" }
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-auto md:scroll-smooth", fontSans.variable)}
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased [font-feature-settings:'kern'_1,'liga'_1]"
        )}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJsonScriptContent() }}
        />
      </body>
    </html>
  )
}
