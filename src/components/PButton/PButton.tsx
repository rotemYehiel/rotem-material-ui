import React from "react";

import PButtonView from "./PButton.view";

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

const PButton = ({
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
  return (
    <PButtonView
      buttonRef={buttonRef}
      color={color}
      disabled={disabled}
      className={className}
      type={type}
      to={to}
      dataTestid={dataTestid}
      onClick={onClick}
    >
      {children}
    </PButtonView>
  );
};

PButton.displayName = "PButton";

export default PButton;
