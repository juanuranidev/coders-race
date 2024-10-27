import * as React from "react";
import { ChevronRight, Mail, Loader2 } from "lucide-react";
import { cn } from "lib/utils/shared/shared.utils";
import { buttonVariants } from "./button-variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  isLoading?: boolean;
  variant?: keyof typeof buttonVariants.variants;
}

// Button component with loading state logic
const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        disabled={isLoading || disabled}
        className={cn(
          buttonVariants.base,
          buttonVariants.variants[variant],
          className
        )}
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

// Secondary Button
const ButtonSecondary = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonPrimary ref={ref} variant="secondary" {...props} />
);
ButtonSecondary.displayName = "ButtonSecondary";

// Outline Button
const ButtonOutline = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonPrimary ref={ref} variant="outline" {...props} />
);
ButtonOutline.displayName = "ButtonOutline";

// Ghost Button
const ButtonGhost = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonPrimary ref={ref} variant="ghost" {...props} />
);
ButtonGhost.displayName = "ButtonGhost";

// Link Button
const ButtonLink = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonPrimary ref={ref} variant="link" {...props} />
);
ButtonLink.displayName = "ButtonLink";

// Button with icon
const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <ButtonPrimary ref={ref} variant="outline" {...props}>
      <ChevronRight className="h-4 w-4" />
    </ButtonPrimary>
  )
);
ButtonIcon.displayName = "ButtonIcon";

// Button with Mail icon
const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <ButtonPrimary ref={ref} {...props}>
      <Mail className="mr-2 h-4 w-4" />
      {props.children}
    </ButtonPrimary>
  )
);
ButtonWithIcon.displayName = "ButtonWithIcon";

export {
  ButtonPrimary,
  ButtonSecondary,
  ButtonOutline,
  ButtonGhost,
  ButtonLink,
  ButtonIcon,
  ButtonWithIcon,
};
