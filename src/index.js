import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import "modern-normalize/modern-normalize.css";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
