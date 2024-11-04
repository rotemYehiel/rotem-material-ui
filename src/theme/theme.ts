import { createTheme } from "@mui/material/styles";
import { ThemeColors } from "../types/themeColors";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    myButton?: {
      main: string;
      secondary?: string;
      primaryActiveHover?: string;
      disableCommonTwo?: string;
      dangerButton?: string;
      dangerButtonHover?: string;
      disableCommon?: string;
    };
  }

  interface Palette {
    myButton?: {
      primaryActiveHover?: string;
      disableCommonTwo?: string;
      dangerButton?: string;
      dangerButtonHover?: string;
      disableCommon?: string;
      secondary?: string;
      main: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
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
