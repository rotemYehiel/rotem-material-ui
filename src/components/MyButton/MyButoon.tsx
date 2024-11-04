import React from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonType } from "../PButton/PButton.model";
import { ThemeColors } from "../../types/themeColors";
import CustomedButton from "./CustomedButton.styles";

type Props = {
  className?: string;
  color: ThemeColors;
  disabled?: boolean;
  type: ButtonType;
  to?: string;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  dataTestid?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CustomedLink = styled(Link)<ButtonProps>(() => ({
  textDecoration: "none",
  color: "inherit",
  "&:link, &:visited, &:hover, &:active": {
    color: "inherit",
  },
}));

const MyButton = (props: React.PropsWithChildren<Props>): JSX.Element => {
  return props.to && !props.disabled ? (
    <CustomedLink className="link" to={props.to}>
      <CustomedButton
        variant="contained"
        color={props.color}
        disabled={props.disabled}
        className={props.className}
        data-testid={props.dataTestid}
        onClick={props.onClick}
        ref={props.buttonRef}
        type={props.type}
      >
        {props.children}
      </CustomedButton>
    </CustomedLink>
  ) : (
    <CustomedButton
      variant="contained"
      color={props.color}
      disabled={props.disabled}
      className={props.className}
      data-testid={props.dataTestid}
      onClick={props.onClick}
      ref={props.buttonRef}
      type={props.type}
    >
      {props.children}
    </CustomedButton>
  );
};

export default MyButton;
