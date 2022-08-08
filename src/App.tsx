import { Button } from "components";
import React from "react";
// import ReactDOM from "react-dom";

const App = () => {
  return (
    <div><Button label="Log"></Button></div>
  )
}
//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export{}