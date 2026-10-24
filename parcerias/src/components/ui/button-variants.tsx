import { Button } from "./button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface SolarButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export const SolarButton = forwardRef<HTMLButtonElement, SolarButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "bg-gradient-solar text-primary-foreground hover:scale-105 transition-all duration-300 shadow-[var(--shadow-solar)] relative overflow-hidden font-semibold text-lg px-8 py-4 rounded-full",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:animate-shine",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

SolarButton.displayName = "SolarButton";

export const EcoButton = forwardRef<HTMLButtonElement, SolarButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "bg-gradient-eco text-secondary-foreground hover:scale-105 transition-all duration-300 shadow-[var(--shadow-eco)] font-semibold px-6 py-3",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

EcoButton.displayName = "EcoButton";
