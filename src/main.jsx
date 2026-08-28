import React from "react";
import ReactDom from "react-dom/client";
import "./Styles/index.css";
import "./Styles/textStyles.css";
import "./Styles/navbar.css";
import "./Styles/imageCycler.css";
import "./Styles/pages.css";
import "./Styles/contact.css";
import "./Styles/notFound.css";
import "./Styles/cart.css";
import App from "./components/App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
