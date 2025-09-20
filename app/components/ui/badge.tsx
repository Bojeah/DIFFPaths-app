import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(217_91%_60%)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[hsl(217_91%_60%)] text-white hover:bg-[hsl(217_91%_55%)]",
        secondary:
          "border-transparent bg-[hsl(220_14%_96%)] text-[hsl(220_9%_46%)] hover:bg-[hsl(220_14%_92%)]",
        destructive:
          "border-transparent bg-[hsl(0_84%_60%)] text-white hover:bg-[hsl(0_84%_55%)]",
        outline: "text-[hsl(222_47%_11%)] border border-[hsl(220_14%_91%)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
