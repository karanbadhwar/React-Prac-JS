import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ContextAPI from "./Context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ContextAPI>
    <App />
  </ContextAPI>
);
