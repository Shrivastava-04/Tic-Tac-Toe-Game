import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="m-0 p-0 bg-sky-400 min-h-screen min-w-full">
      <App />
    </div>
  </BrowserRouter>
);
