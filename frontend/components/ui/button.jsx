import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 ",
    "whitespace-nowrap rounded-md text-sm ",
    "font-medium transition-all ",
    "cursor-pointer ",
    "disabled:pointer-events-none ",
    "disabled:opacity-50 ",
    "[&_svg:not([class*='size-'])]:size-4 ",
    "shrink-0 [&_svg]:shrink-0 ",
    "outline-none ",
    "focus-visible:border-ring ",
    "focus-visible:ring-ring/50 ",
    "focus-visible:ring-[3px] ",
    "aria-invalid:ring-danger/20 ",
    "aria-invalid:border-danger "
  ),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        danger:
          "bg-danger text-danger-foreground shadow-xs hover:bg-danger/80 focus-visible:ring-danger/20",
        success:
          "bg-success text-success-foreground shadow-xs hover:bg-success/80 focus-visible:ring-success/20",
        info: "bg-info text-info-foreground shadow-xs hover:bg-info/80 focus-visible:ring-info/20",
        warning:
          "bg-warning text-warning-foreground shadow-xs hover:bg-warning/80 focus-visible:ring-warning/20",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground ",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
