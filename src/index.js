import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ResultProvider } from "./test/ResultProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResultProvider>
      <App />
    </ResultProvider>
  </React.StrictMode>
);
