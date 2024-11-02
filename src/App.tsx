import { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { Grid2, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { ButtonType } from "./components/PButton/PButton.model";
import { ThemeColors } from "./types/themeColors";
import PButton from "./components/PButton/PButton";
import MyButton from "./components/MyButton/MyButoon";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const pButtonRef = useRef<HTMLButtonElement>(null);
  const myButtonRef = useRef<HTMLButtonElement>(null);

  const handleClickPButton = () => {
    if (pButtonRef.current) {
      console.log("you click this button:", pButtonRef.current);
    }
  };

  const handleClickMYButton = () => {
    if (myButtonRef.current) {
      console.log("you click this button:", myButtonRef.current);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid2 className="App" container direction="column" rowSpacing={2}>
        <BrowserRouter>
          <TodoList />
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
          <MyButton
            className="custom-button"
            color={ThemeColors.Primary}
            disabled={false}
            type={ButtonType.Submit}
            to="/home"
            buttonRef={myButtonRef}
            onClick={handleClickMYButton}
          >
            MyButton
          </MyButton>
        </BrowserRouter>
      </Grid2>
    </ThemeProvider>
  );
}

export default App;
