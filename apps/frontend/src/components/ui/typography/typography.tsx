import * as React from "react";

// H1 Component
export const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h1
    ref={ref}
    className={`text-white-500 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
    {...props}
  >
    {children}
  </h1>
));
H1.displayName = "H1";

// H2 Component
export const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h2
    ref={ref}
    className={`text-white-500 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
    {...props}
  >
    {children}
  </h2>
));
H2.displayName = "H2";

// H3 Component
export const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-white-500 scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
));
H3.displayName = "H3";

// H4 Component
export const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h4
    ref={ref}
    className={`text-white-500 scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h4>
));
H4.displayName = "H4";

// P Component
export const P = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p ref={ref} className={`leading-7 text-white-500 ${className}`} {...props}>
    {children}
  </p>
));
P.displayName = "P";

// Lead Component
export const Lead = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-white-500 text-xl text-muted-foreground ${className}`}
    {...props}
  >
    {children}
  </p>
));
Lead.displayName = "Lead";

// Large Component
export const Large = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`text-white-500 text-lg font-semibold ${className}`}
    {...props}
  >
    {children}
  </div>
));
Large.displayName = "Large";

// Small Component
export const Small = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => (
  <small
    ref={ref}
    className={`text-white-500 text-sm font-medium leading-none ${className}`}
    {...props}
  >
    {children}
  </small>
));
Small.displayName = "Small";

// Muted Component
export const Muted = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-white-500 text-sm text-muted-foreground ${className}`}
    {...props}
  >
    {children}
  </p>
));
Muted.displayName = "Muted";
