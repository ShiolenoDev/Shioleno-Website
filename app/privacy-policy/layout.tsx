import { SiteShell } from '@/components/site/SiteShell'

export default function PrivacyPolicyLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return <SiteShell>{children}</SiteShell>
}
