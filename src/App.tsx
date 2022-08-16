import { ButtonBase, Button } from "components";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./configs/theme";
import "./styles/global.css";

const App = () => {
  return (
    <>
      <Button color="primary">Hello World</Button>
      <ButtonBase classes={{ root: "outside" }}>test</ButtonBase>
      <ButtonBase>test 2</ButtonBase>
    </>
  );
};

//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

export {};
