import styled from "@emotion/styled";
import { ButtonProps } from "./Button";
import ButtonBase from "./ButtonBase";
import isPropValid from "@emotion/is-prop-valid";

export const SButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "color",
})<ButtonProps>((props) => ({
  color: props.color
    ? props.theme.colors[props.color]
    : props.theme.colors.default,
}));
