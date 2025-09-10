import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-point)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-btn)] text-[var(--color-btn-dark)] hover:bg-[var(--color-point)] hover:text-[var(--color-bg-main)]",
        destructive: "bg-[var(--color-error)] text-white hover:bg-red-700",
        outline: "border border-[var(--color-border)] bg-transparent hover:bg-[var(--color-bg-section)] hover:text-[var(--color-point)]",
        secondary: "bg-[var(--color-bg-section)] text-[var(--color-text-main)] hover:bg-[var(--color-bg-card)]",
        ghost: "hover:bg-[var(--color-bg-section)] hover:text-[var(--color-point)]",
        link: "underline-offset-4 hover:underline text-[var(--color-point)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
        className={cn("btn-effect focus-ring", buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
