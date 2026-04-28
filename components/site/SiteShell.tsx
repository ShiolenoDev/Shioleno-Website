import type { ReactNode } from 'react'
import { BackToTop } from '@/components/site/BackToTop'
import { Footer } from '@/components/site/Footer'
import { Header } from '@/components/site/Header'

type SiteShellProps = {
  children: ReactNode
  footerVariant?: 'millwork' | 'metal'
}

export function SiteShell ({ children, footerVariant = 'millwork' }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer variant={footerVariant} />
      <BackToTop />
    </div>
  )
}
