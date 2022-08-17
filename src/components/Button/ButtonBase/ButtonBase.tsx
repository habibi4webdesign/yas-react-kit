import clsx from "clsx";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { ButtonBaseClasses } from "./ButtonBaseClasses";

export interface ButtonBaseProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  className?: string;
  classes?: Partial<ButtonBaseClasses>;
}

const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (props, ref) => {
    const { children, classes, className, ...others } = props;
    return (
      <button ref={ref} className={clsx(classes?.root, className)} {...others}>
        {children}
      </button>
    );
  }
);

ButtonBase.displayName = "ButtonBase";

export default ButtonBase;
