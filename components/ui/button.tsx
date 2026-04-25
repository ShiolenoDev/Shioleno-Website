import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius)] text-sm font-medium transition-[color,background-color,border-color,box-shadow,opacity] duration-500 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        /* Primary: near-black, white text */
        default:
          "border border-foreground/90 bg-foreground uppercase tracking-[0.1em] text-white shadow-sm hover:bg-foreground/90",
        /* Secondary: outlined bronze */
        outline:
          "border border-primary/70 bg-transparent uppercase tracking-[0.12em] text-foreground hover:border-primary hover:bg-primary/[0.06]",
        destructive:
          "border border-destructive/40 bg-white uppercase tracking-[0.1em] text-foreground/90 shadow-sm hover:border-destructive hover:bg-destructive/5",
        secondary:
          "border border-border/90 bg-card uppercase tracking-[0.1em] text-foreground/95 shadow-sm hover:border-foreground/15 hover:shadow",
        ghost:
          "border border-transparent normal-case tracking-normal text-foreground/80 hover:text-primary",
        link: "border-0 !text-primary normal-case tracking-normal underline-offset-[5px] hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-[var(--radius)] px-4 text-xs",
        lg: "h-12 min-w-[200px] px-8 text-sm",
        icon: "h-10 w-10 normal-case p-0 tracking-normal",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
