import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* Calcite Design System Badge - Subtle, informative */
const badgeVariants = cva(
  "inline-flex items-center rounded px-2 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        /* Default - Neutral */
        default: 
          "bg-[hsl(210,20%,96%)] text-[hsl(210,8%,35%)] border border-[hsl(210,16%,85%)]",
        /* Blue - Information */
        secondary: 
          "bg-[hsl(210,100%,96%)] text-[hsl(210,100%,38%)] border border-[hsl(210,100%,90%)]",
        /* Green - Success */
        success: 
          "bg-[hsl(145,60%,96%)] text-[hsl(145,60%,35%)] border border-[hsl(145,60%,85%)]",
        /* Red - Destructive */
        destructive: 
          "bg-[hsl(0,72%,96%)] text-[hsl(0,72%,45%)] border border-[hsl(0,72%,90%)]",
        /* Outline */
        outline: 
          "text-[hsl(210,8%,35%)] border border-[hsl(210,16%,80%)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span 
      data-slot="badge" 
      className={cn(badgeVariants({ variant }), className)} 
      {...props} 
    />
  )
}

export { Badge, badgeVariants }
