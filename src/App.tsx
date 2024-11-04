import { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { Grid2, useTheme } from "@mui/material";
import { ButtonType } from "./components/PButton/PButton.model";
import { ThemeColors } from "./types/themeColors";
import PButton from "./components/PButton/PButton";
import MyButton from "./components/MyButton/MyButoon";
import TodoList from "./components/TodoList/TodoList";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, setTheme } = useThemeContext();
  const themeMui = useTheme();

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

  const changeTheme = () => {
    setTheme("tertiary");
    console.log("theme changed:", { theme, themeMui });
  };

  return (
    <Grid2 className="App" container direction="column" rowSpacing={2}>
      <BrowserRouter>
        <button onClick={changeTheme}>theme</button>
        <TodoList />
        <PButton
          className="custom-button"
          color={theme}
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
          color={theme}
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
  );
}

export default App;
