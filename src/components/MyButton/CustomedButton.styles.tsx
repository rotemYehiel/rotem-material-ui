import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";
import { ThemeColors } from "../../types/themeColors";

const CustomedButton = styled(Button)<ButtonProps>(({ theme, color }) => ({
  border: "none",
  whiteSpace: "nowrap",
  transition: "all 0.3s ease-in-out",
  fontSize: "0.85vw",
  display: "flex",
  alignItems: "center",
  gap: " 0.5vw",
  padding: "0vw 1.1vw",
  borderRadius: "4px",
  minHeight: "1.8vw",
  textTransform: "uppercase",

  "@media (max-width: 1440px)": {
    padding: "0 10px",
    gap: "7px",
    minHeight: "25px",
    fontSize: "12px",
  },

  "@media (min-width: 1921px)": {
    padding: "0 21px",
    gap: "10px",
    minHeight: "34px",
    fontSize: "16px",
  },

  "&:disabled": {
    cursor: "auto",
  },

  ...(color === ThemeColors.Transparent && {
    backgroundColor: theme.palette.transparent?.main,
    fontWeight: 700,

    "&:hover": {
      color: theme.palette.transparent?.primaryActiveHover,
    },

    "&::placeholder": {
      color: theme.palette.transparent?.primaryActiveHover,
    },

    "&:disabled": {
      backgroundColor: theme.palette.transparent?.main,
      color: theme.palette.transparent?.disableCommon,

      "&:hover": {
        backgroundColor: theme.palette.transparent?.main,
        color: theme.palette.transparent?.disableCommon,
      },
    },
  }),

  ...(color === ThemeColors.Tertiary && {
    backgroundColor: theme.palette.tertiary?.main,
    border: `2px solid ${theme.palette.tertiary?.seconed}`,
    fontWeight: 700,

    "&:hover": {
      border: `2px solid ${theme.palette.tertiary?.primaryActiveHover}`,
      color: theme.palette.tertiary?.primaryActiveHover,
    },

    "&:disabled": {
      backgroundColor: theme.palette.tertiary?.seconed,
      border: `2px solid ${theme.palette.tertiary?.disableCommon}`,

      "&:hover": {
        backgroundColor: theme.palette.tertiary?.main,
        border: `2px solid ${theme.palette.tertiary?.disableCommon}`,
        color: theme.palette.tertiary?.disableCommon,
      },
    },
  }),

  ...(color === ThemeColors.Danger && {
    backgroundColor: theme.palette.danger?.dangerButton,
    color: theme.palette.danger?.contrastText,
    fontWeight: 700,

    "&:disabled": {
      opacity: 0.4,
    },

    "&:hover": {
      backgroundColor: theme.palette.danger?.dangerButtonHover,
    },
  }),

  ...(color === ThemeColors.Primary && {
    backgroundColor: theme.palette.primaryButton?.main,
    color: theme.palette.primaryButton?.seconed,

    "&:hover": {
      backgroundColor: theme.palette.primaryButton?.primaryActiveHover,
    },

    "&:disabled": {
      backgroundColor: theme.palette.primaryButton?.disableCommonTwo,

      "&:hover": {
        backgroundColor: theme.palette.primaryButton?.disableCommonTwo,
      },
    },
  }),

  ...(color === ThemeColors.Secondary && {
    backgroundColor: theme.palette.secondaryButton?.main,
    border: `2px solid ${theme.palette.secondaryButton?.seconed}`,
    fontWeight: 700,

    "&:hover": {
      border: `2px solid ${theme.palette.secondaryButton?.primaryActiveHover}`,
      color: theme.palette.secondaryButton?.primaryActiveHover,
    },

    "&:disabled": {
      backgroundColor: theme.palette.secondaryButton?.main,

      "&:hover": {
        backgroundColor: theme.palette.secondaryButton?.main,
        border: `2px solid ${theme.palette.secondaryButton?.disableCommon}`,
        color: theme.palette.secondaryButton?.disableCommon,
      },
    },
  }),
}));

export default CustomedButton;
