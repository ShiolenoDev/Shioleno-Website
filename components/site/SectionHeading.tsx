import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  title: string
  eyebrow?: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading ({
  title,
  eyebrow,
  className,
  as: H = 'h2',
  align = 'left',
  id
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <H
        id={id}
        className="font-display text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl"
      >
        {title}
      </H>
    </div>
  )
}
