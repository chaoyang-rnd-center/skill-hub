import * as React from "react"

import { cn } from "@/lib/utils"

/* Calcite Design System Input - Clean borders, focus ring */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-8 w-full rounded border border-[hsl(210,16%,80%)] bg-white px-3 py-1.5",
        "text-sm text-[hsl(0,0%,14%)] placeholder:text-[hsl(210,8%,55%)]",
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:border-[hsl(210,100%,38%)] focus-visible:ring-1 focus-visible:ring-[hsl(210,100%,38%)]",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[hsl(210,14%,96%)]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
