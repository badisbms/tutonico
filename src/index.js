import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import { StrictMode } from "react";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>

);

