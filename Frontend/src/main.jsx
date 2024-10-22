import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LoginContext from "./context/LoginContext";

createRoot(document.getElementById("root")).render(
  <LoginContext.Provider>
    <StrictMode>
      <App />
    </StrictMode>
  </LoginContext.Provider>
);
