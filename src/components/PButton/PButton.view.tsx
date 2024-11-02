import React from "react";
import { Link } from "react-router-dom";

import classes from "./PButton.module.scss";

import { ThemeColors } from "../../types/themeColors";
import { ButtonType } from "./PButton.model";

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

const PButtonView = ({
  className = "",
  color,
  disabled = false,
  type,
  to,
  buttonRef,
  dataTestid,
  onClick,
  children,
}: React.PropsWithChildren<Props>): JSX.Element => {
  // console.log({ classes, ThemeColors });

  return to && !disabled ? (
    <Link className={classes["link"]} to={to}>
      <button
        ref={buttonRef}
        className={`${classes["btn"]} ${classes[`btn--${color}`]} ${
          className || ""
        }`.trim()}
        type={type}
        disabled={disabled}
        data-testid={dataTestid}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      ref={buttonRef}
      className={`${classes["btn"]} ${classes[`btn--${color}`]} ${
        className || ""
      }`.trim()}
      type={type}
      disabled={disabled}
      data-testid={dataTestid}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

PButtonView.displayName = "PButtonView";

export default PButtonView;
