import type { ReactNode } from 'react'
import { SiteShell } from '@/components/site/SiteShell'

export default function MetalLayout ({
  children
}: {
  children: ReactNode
}) {
  return <SiteShell footerVariant="metal">{children}</SiteShell>
}
