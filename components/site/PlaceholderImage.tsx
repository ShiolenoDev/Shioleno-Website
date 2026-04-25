import { cn } from '@/lib/utils'

type PlaceholderImageProps = {
  label: string
  className?: string
  imageAlt?: string
}

/**
 * Intentional placeholder — swap for next/image when imageSrc is in data
 */
export function PlaceholderImage ({ label, className, imageAlt }: PlaceholderImageProps) {
  const alt = imageAlt || `Image: ${label}`

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'group relative min-h-[180px] overflow-hidden bg-card',
        'border border-border/60 shadow-sm transition-[border-color,box-shadow] duration-500 ease-out',
        'hover:border-border hover:shadow',
        className
      )}
    >
      <div
        className="absolute inset-0 bg-[repeating-linear-gradient(-8deg,transparent,transparent_14px,rgba(0,0,0,0.04)_14px,transparent_15px)]"
        aria-hidden
      />
      <div className="absolute inset-0 flex items-end p-4 md:p-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
          {label}
        </p>
      </div>
    </div>
  )
}
