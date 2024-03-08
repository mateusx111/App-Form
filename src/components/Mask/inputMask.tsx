"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import InputMask from "react-input-mask";
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  mask: string;
};

export const InputMasked = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, mask, ...props }, ref) => {
    return (
      <>
        <InputMask
          mask={mask}
          inputRef={ref}
          value={props.value}
          type={type}
          className={cn(className)}
          {...props}
        />
      </>
    );
  },
);
InputMasked.displayName = "Input";
