import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type CTASectionProps = {
  className?: string
  title?: string
  buttonText?: string
  href?: string
}

export function CTASection ({
  className,
  title = 'Ready to get started?',
  buttonText = 'Contact us',
  href = '/contact'
}: CTASectionProps) {
  return (
    <div
      className={cn(
        'border border-border/60 bg-card px-6 py-10 text-center shadow-sm sm:px-12 sm:py-12',
        className
      )}
    >
      {title ? (
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
          {title}
        </p>
      ) : null}
      <div className="mt-7 flex flex-wrap items-center justify-center">
        <Button asChild size="lg" className="min-w-[220px]">
          <Link href={href}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  )
}
