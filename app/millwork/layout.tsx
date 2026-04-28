import { SiteShell } from '@/components/site/SiteShell'

export default function MillworkLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return <SiteShell>{children}</SiteShell>
}
