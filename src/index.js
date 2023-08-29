// 1-6 BRINGS ALL THE NECESSARY PIECES TOGETHER
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

// INJECTS THE FINAL PRODUCT INTO INDEX.HTML IN THE PUBLIC FOLDER
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);