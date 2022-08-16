import React from "react";
import clsx from "clsx";
import { ButtonBaseClasses } from "./ButtonBaseClasses";

export interface ButtonBaseProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  classes?: Partial<ButtonBaseClasses>;
}

const ButtonBase = (props: ButtonBaseProps) => {
  const { children, classes, className, ...others } = props;
  return (
    <button className={clsx(classes?.root, className)} {...others}>
      {children}
    </button>
  );
};

export default ButtonBase;
