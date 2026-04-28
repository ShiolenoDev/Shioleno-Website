import { Header } from '@/components/site/Header'
import { SplitLandingExperience } from '@/components/site/SplitLandingExperience'
import { splitLandingMetadata } from '@/lib/seo'

const description =
  'Shioleno Industries — millwork & metal fabrication in Arlington, TX. Choose wood casework and millwork or metal fabrication to get started.'

export const metadata = splitLandingMetadata(description)

export default function SplitLandingPage () {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <SplitLandingExperience />
    </div>
  )
}
