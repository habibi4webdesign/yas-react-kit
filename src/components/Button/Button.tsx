import React from "react";
import { SButton } from "./Button.styles";
import { ButtonBaseProps } from "./ButtonBase";

export interface ButtonProps extends ButtonBaseProps {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "default";
}

const Button = (props: ButtonProps) => {
  return (
    <SButton {...props}/>
  );
};

export default Button;
