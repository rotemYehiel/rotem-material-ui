import { PaletteOptions, createTheme } from "@mui/material/styles";
import colors from "../styles/themeColors.module.scss";
import {
  DangerPaletteOptions,
  PrimaryButtonPaletteOptions,
  SecondaryButtonPaletteOptions,
  TertiaryPaletteOptions,
  TransparentPaletteOptions,
} from "../interfaces/themeInterfaces";
import { ThemeColors } from "../types/themeColors";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    danger?: DangerPaletteOptions;
    tertiary?: TertiaryPaletteOptions;
    transparent?: TransparentPaletteOptions;
    primaryButton?: PrimaryButtonPaletteOptions;
    secondaryButton?: SecondaryButtonPaletteOptions;
  }
  interface Palette {
    danger?: {
      contrastText: string;
      dangerButton: string;
      dangerButtonHover: string;
    };
    tertiary?: {
      main: string;
      seconed: string;
      primaryActiveHover: string;
      disableCommon: string;
    };
    transparent?: {
      main: string;
      primaryActiveHover: string;
      disableCommon: string;
    };
    primaryButton?: {
      main: string;
      seconed: string;
      primaryActiveHover: string;
      disableCommonTwo: string;
    };
    secondaryButton?: {
      main: string;
      seconed: string;
      primaryActiveHover: string;
      disableCommon: string;
    };
  }
}

export const palette: PaletteOptions = {
  primaryButton: {
    main: colors.primary,
    seconed: colors.secondary,
    primaryActiveHover: colors["primary-active-hover"],
    disableCommonTwo: colors["disable-common-two"],
  },
  secondaryButton: {
    main: colors.transparent,
    seconed: colors.primary,
    primaryActiveHover: colors["primary-active-hover"],
    disableCommon: colors["disable-common"],
  },
  danger: {
    contrastText: colors.secondary,
    dangerButton: colors["danger-button"],
    dangerButtonHover: colors["danger-button-hover"],
  },
  tertiary: {
    main: colors.secondary,
    seconed: colors.primary,
    primaryActiveHover: colors["primary-active-hover"],
    disableCommon: colors["disable-common"],
  },
  transparent: {
    main: colors.transparent,
    primaryActiveHover: colors["primary-active-hover"],
    disableCommon: colors["disable-common"],
  },
};

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    inherit: true;
    primary: true;
    secondary: true;
    danger: true;
    tertiary: true;
    transparent: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonExtraProps {
    color?: ThemeColors;
  }
}

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            cursor: "auto",
            " --variant-textBg": "none",
            "--variant-outlinedBorder": "none",
            "--variant-outlinedBg": "none",
          },
          "&:active": {
            boxShadow: "none",
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
