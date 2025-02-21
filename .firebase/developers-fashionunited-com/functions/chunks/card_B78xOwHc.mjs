import { c as createComponent, r as renderTemplate, l as renderHead, h as renderSlot } from './astro/server_CFc1r9Xk.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
/* empty css                         */
/* empty css                             */
import { jsxDEV } from 'react/jsx-dev-runtime';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body> <!-- <Navbar /> --> ${renderSlot($$result, $$slots["default"])} <!-- <Footer /> -->  </body> </html>`;
}, "/Users/joost/git/developer.fashionunited.com/src/layouts/Layout.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxDEV(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/Users/joost/git/developer.fashionunited.com/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
      },
      undefined
    );
  }
);
Button.displayName = "Button";

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/joost/git/developer.fashionunited.com/src/components/ui/card.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  undefined
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/joost/git/developer.fashionunited.com/src/components/ui/card.tsx",
    lineNumber: 24,
    columnNumber: 3
  },
  undefined
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/joost/git/developer.fashionunited.com/src/components/ui/card.tsx",
    lineNumber: 36,
    columnNumber: 3
  },
  undefined
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/joost/git/developer.fashionunited.com/src/components/ui/card.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  undefined
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, false, {
  fileName: "/Users/joost/git/developer.fashionunited.com/src/components/ui/card.tsx",
  lineNumber: 63,
  columnNumber: 3
}, undefined));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/joost/git/developer.fashionunited.com/src/components/ui/card.tsx",
    lineNumber: 71,
    columnNumber: 3
  },
  undefined
));
CardFooter.displayName = "CardFooter";

export { $$Layout as $, Button as B, Card as C, CardHeader as a, CardTitle as b, CardDescription as c, CardContent as d, CardFooter as e, cn as f };
