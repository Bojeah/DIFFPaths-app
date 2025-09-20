import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(0_0%_9%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[hsl(0_0%_9%)] text-[hsl(0_0%_98%)] hover:bg-[hsl(0_0%_9%)/90]",
        destructive:
          "bg-[hsl(0_84%_60%)] text-[hsl(0_0%_98%)] hover:bg-[hsl(0_84%_60%)/90]",
        outline:
          "border border-[hsl(0_0%_91%)] bg-[hsl(0_0%_100%)] hover:bg-[hsl(0_0%_96%)] hover:text-[hsl(0_0%_9%)]",
        secondary:
          "bg-[hsl(0_0%_96%)] text-[hsl(0_0%_9%)] hover:bg-[hsl(0_0%_96%)/80]",
        ghost: "hover:bg-[hsl(0_0%_96%)] hover:text-[hsl(0_0%_9%)]",
        link: "text-[hsl(0_0%_9%)] underline-offset-4 hover:underline",
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
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
