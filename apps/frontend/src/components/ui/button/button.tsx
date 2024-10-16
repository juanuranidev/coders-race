import * as React from "react";
import { ChevronRight, Mail, Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "lib/utils/shared/shared.utils";

// Define the base button styles using cva
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-violet-500 rounded-lg text-white-500 py-2 px-5 hover:bg-violet-600",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-purple-500 rounded-lg text-white-500 py-2 px-5 bg-transparent hover:bg-gray-400",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

// Button component with loading state logic
const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, isLoading = false, disabled, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        disabled={isLoading || disabled}
        className={cn(buttonVariants({ variant, className }))}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {children || "Loading..."}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);
ButtonPrimary.displayName = "Button";

// Button variants based on the base Button component

// Secondary Button
export const ButtonSecondary = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonPrimary ref={ref} variant="secondary" {...props} />
);
ButtonSecondary.displayName = "ButtonSecondary";

// Outline Button
export const ButtonOutline = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonPrimary ref={ref} variant="outline" {...props} />
);
ButtonOutline.displayName = "ButtonOutline";

// Ghost Button
export const ButtonGhost = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonPrimary ref={ref} variant="ghost" {...props} />
);
ButtonGhost.displayName = "ButtonGhost";

// Link Button
export const ButtonLink = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonPrimary ref={ref} variant="link" {...props} />
);
ButtonLink.displayName = "ButtonLink";

// Button with icon
export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <ButtonPrimary ref={ref} variant="outline" {...props}>
      <ChevronRight className="h-4 w-4" />
    </ButtonPrimary>
  )
);
ButtonIcon.displayName = "ButtonIcon";

// Button with Mail icon
export const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <ButtonPrimary ref={ref} {...props}>
      <Mail className="mr-2 h-4 w-4" />
      {props.children}
    </ButtonPrimary>
  )
);
ButtonWithIcon.displayName = "ButtonWithIcon";

// Exporting Button and variants
export { ButtonPrimary, buttonVariants };
