import { Button } from "components";
import React from "react";
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div><Button label="Log"></Button></div>
  )
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);