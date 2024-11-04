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
    backgroundColor: theme.palette.myButton?.main,
    fontWeight: 700,

    "&:hover": {
      color: theme.palette.myButton?.primaryActiveHover,
    },

    "&::placeholder": {
      color: theme.palette.myButton?.primaryActiveHover,
    },

    "&:disabled": {
      backgroundColor: theme.palette.myButton?.main,
      color: theme.palette.myButton?.disableCommon,

      "&:hover": {
        backgroundColor: theme.palette.myButton?.main,
        color: theme.palette.myButton?.disableCommon,
      },
    },
  }),

  ...(color === ThemeColors.Tertiary && {
    backgroundColor: theme.palette.myButton?.main,
    border: `2px solid ${theme.palette.myButton?.secondary}`,
    fontWeight: 700,

    "&:hover": {
      border: `2px solid ${theme.palette.myButton?.primaryActiveHover}`,
      color: theme.palette.myButton?.primaryActiveHover,
    },

    "&:disabled": {
      backgroundColor: theme.palette.myButton?.secondary,
      border: `2px solid ${theme.palette.myButton?.disableCommon}`,

      "&:hover": {
        backgroundColor: theme.palette.myButton?.main,
        border: `2px solid ${theme.palette.myButton?.disableCommon}`,
        color: theme.palette.myButton?.disableCommon,
      },
    },
  }),

  ...(color === ThemeColors.Danger && {
    backgroundColor: theme.palette.myButton?.dangerButton,
    color: theme.palette.myButton?.main,
    fontWeight: 700,

    "&:disabled": {
      opacity: 0.4,
    },

    "&:hover": {
      backgroundColor: theme.palette.myButton?.dangerButtonHover,
    },
  }),

  ...(color === ThemeColors.Primary && {
    backgroundColor: theme.palette.myButton?.main,
    color: theme.palette.myButton?.secondary,

    "&:hover": {
      backgroundColor: theme.palette.myButton?.primaryActiveHover,
    },

    "&:disabled": {
      backgroundColor: theme.palette.myButton?.disableCommonTwo,

      "&:hover": {
        backgroundColor: theme.palette.myButton?.disableCommonTwo,
      },
    },
  }),

  ...(color === ThemeColors.Secondary && {
    backgroundColor: theme.palette.myButton?.main,
    border: `2px solid ${theme.palette.myButton?.secondary}`,
    fontWeight: 700,

    "&:hover": {
      border: `2px solid ${theme.palette.myButton?.primaryActiveHover}`,
      color: theme.palette.myButton?.primaryActiveHover,
    },

    "&:disabled": {
      backgroundColor: theme.palette.myButton?.main,

      "&:hover": {
        backgroundColor: theme.palette.myButton?.main,
        border: `2px solid ${theme.palette.myButton?.disableCommon}`,
        color: theme.palette.myButton?.disableCommon,
      },
    },
  }),
}));

export default CustomedButton;
