import { Button } from "components";
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div><Button label="Log"></Button></div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
