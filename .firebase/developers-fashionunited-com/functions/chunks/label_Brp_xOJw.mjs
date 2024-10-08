import { jsxDEV } from 'react/jsx-dev-runtime';
import * as React from 'react';
import { c as cn } from './utils_BpiL_Gcm.mjs';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxDEV(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/Users/joost/git/developer.fashionunited.com/src/components/ui/input.tsx",
        lineNumber: 11,
        columnNumber: 7
      },
      undefined
    );
  }
);
Input.displayName = "Input";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/joost/git/developer.fashionunited.com/src/components/ui/label.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  undefined
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Input as I, Label as L };
