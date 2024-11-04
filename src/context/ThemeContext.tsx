import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  primaryTheme,
  secondaryTheme,
  dangerTheme,
  tertiaryTheme,
  transparentTheme,
} from "../theme/themes";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeColors } from "../types/themeColors";

interface ThemeContextType {
  theme: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be used within a ThemeProvider");
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeColors>("primary");

  const currentTheme =
    theme === "primary"
      ? primaryTheme
      : theme === "secondary"
      ? secondaryTheme
      : theme === "danger"
      ? dangerTheme
      : theme === "tertiary"
      ? tertiaryTheme
      : theme === "transparent"
      ? transparentTheme
      : primaryTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MuiThemeProvider theme={currentTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
