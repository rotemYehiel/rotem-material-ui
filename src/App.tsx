import React, { useRef } from "react";
import { theme } from "./theme/theme";
import { Grid2, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { ThemeColors } from "./types/themeColors";
import PButton from "./components/PButton/PButton";
import { ButtonType } from "./components/PButton/PButton.model";

function App() {
  const pButtonRef = useRef<HTMLButtonElement>(null);

  const handleClickPButton = () => {
    if (pButtonRef.current) {
      console.log("you click this button:", pButtonRef.current);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid2 className="App" container direction="column" rowSpacing={2}>
        <BrowserRouter>
          <PButton
            className="custom-button"
            color={ThemeColors.Primary}
            disabled={false}
            type={ButtonType.Submit}
            to="/home"
            buttonRef={pButtonRef}
            onClick={handleClickPButton}
          >
            PButton
          </PButton>
        </BrowserRouter>
      </Grid2>
    </ThemeProvider>
  );
}

export default App;
