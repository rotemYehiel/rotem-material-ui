import React from "react";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">app</div>
    </ThemeProvider>
  );
}

export default App;
