import { createTheme, PaletteOptions, Theme } from "@mui/material/styles";
import colors from "../styles/themeColors.module.scss";

export type CustomThemeMode =
  | "primary"
  | "secondary"
  | "danger"
  | "tertiary"
  | "transparent";

interface CustomPaletteOptions extends PaletteOptions {
  primaryActiveHover?: string;
  disableCommonTwo?: string;
  dangerButton?: string;
  dangerButtonHover?: string;
  disableCommon?: string;
}

export const primaryTheme: Theme = createTheme({
  palette: {
    myButton: {
      main: colors.primary,
      secondary: colors.secondary,
      primaryActiveHover: colors["primary-active-hover"],
      disableCommonTwo: colors["disable-common-two"],
    },
  } as CustomPaletteOptions,
});

export const secondaryTheme: Theme = createTheme({
  palette: {
    myButton: {
      main: colors.transparent,
      secondary: colors.primary,
      primaryActiveHover: colors["primary-active-hover"],
      disableCommon: colors["disable-common"],
    },
  } as CustomPaletteOptions,
});

export const dangerTheme: Theme = createTheme({
  palette: {
    myButton: {
      main: colors.secondary,
      dangerButton: colors["danger-button"],
      dangerButtonHover: colors["danger-button-hover"],
    },
  } as CustomPaletteOptions,
});

export const tertiaryTheme: Theme = createTheme({
  palette: {
    myButton: {
      main: colors.secondary,
      secondary: colors.primary,
      primaryActiveHover: colors["primary-active-hover"],
      disableCommon: colors["disable-common"],
    },
  } as CustomPaletteOptions,
});

export const transparentTheme: Theme = createTheme({
  palette: {
    myButton: {
      main: colors.transparent,
      primaryActiveHover: colors["primary-active-hover"],
      disableCommon: colors["disable-common"],
    },
  } as CustomPaletteOptions,
});
