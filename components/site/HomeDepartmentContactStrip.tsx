import { homeDepartmentContacts } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const linkClass = cn(
  'font-display text-lg font-light tracking-[-0.01em] text-foreground/95',
  'transition-colors duration-500 ease-out hover:text-primary',
  'border-b border-transparent pb-0.5 hover:border-primary/40',
  'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40 focus-visible:ring-offset-2',
  'focus-visible:ring-offset-background'
)

export function HomeDepartmentContactStrip ({ className }: { className?: string }) {
  return (
    <section className={cn('relative', className)} aria-labelledby="home-dept-contact-heading">
      <div
        className={cn(
          'relative border-y border-foreground/6',
          'bg-gradient-to-b from-card via-card to-[hsl(40_16%_98%)]',
          'shadow-[inset_0_1px_0_0_hsl(0_0%_100%_/_0.6)]'
        )}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
          aria-hidden
        />
        <h2 id="home-dept-contact-heading" className="sr-only">
          Contact by department
        </h2>
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
          <p className="text-center font-display text-[0.65rem] font-medium uppercase leading-none tracking-[0.24em] text-primary sm:text-[0.7rem] sm:tracking-[0.28em]">
            Direct lines
          </p>
          <div className="mt-6 sm:mt-7">
            <div className="mx-auto grid max-w-2xl grid-cols-1 divide-y divide-border/40 md:max-w-none md:grid-cols-2 md:gap-0 md:divide-x md:divide-y-0">
              {homeDepartmentContacts.map((dept) => (
                <div
                  key={dept.id}
                  className="flex flex-col items-center py-10 text-center first:pt-0 last:pb-0 md:items-stretch md:px-8 md:py-0 md:pb-0 md:text-left lg:px-12"
                >
                  <div className="w-full max-w-sm md:max-w-none">
                    <p
                      className={cn(
                        'font-display text-2xl font-light leading-[1.2] tracking-[-0.02em] text-foreground',
                        'sm:text-[1.65rem] md:text-[1.75rem]'
                      )}
                    >
                      {dept.title}
                    </p>
                    <div
                      className="mx-auto mt-5 h-px w-10 bg-primary/50 md:mx-0"
                      aria-hidden
                    />
                    <dl className="mt-8 space-y-7 text-left sm:mt-9">
                      <div>
                        <dt className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                          Phone
                        </dt>
                        <dd className="mt-2.5">
                          <a
                            href={`tel:${dept.phoneTel}`}
                            className={linkClass}
                          >
                            {dept.phoneDisplay}
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                          Email
                        </dt>
                        <dd className="mt-2.5 break-words">
                          <a
                            href={`mailto:${dept.email}`}
                            className={linkClass}
                          >
                            {dept.email}
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
