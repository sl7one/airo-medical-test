import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/main.css";
import { App } from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter basename="airo-medical-test">
    <App />
  </BrowserRouter>

  /* </React.StrictMode> */
);
