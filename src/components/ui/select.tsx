"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

/* Calcite Design System Select - Clean dropdown */
function Select({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        data-slot="select"
        className={cn(
          "flex h-8 w-full appearance-none rounded border border-[hsl(210,16%,80%)] bg-white",
          "px-3 py-1.5 pr-8 text-sm text-[hsl(0,0%,14%)]",
          "focus-visible:outline-none focus-visible:border-[hsl(210,100%,38%)] focus-visible:ring-1 focus-visible:ring-[hsl(210,100%,38%)]",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[hsl(210,14%,96%)]",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(210,8%,45%)] pointer-events-none" />
    </div>
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<"option">) {
  return (
    <option
      data-slot="select-item"
      className={cn("py-1", className)}
      {...props}
    >
      {children}
    </option>
  )
}

export { Select, SelectItem }
