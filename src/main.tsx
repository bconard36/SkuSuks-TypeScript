import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/textStyles.css";
import "./styles/navbar.css";
import "./styles/imageCycler.css";
import "./styles/pages.css";
import "./styles/contact.css";
import "./styles/notFound.css";
import "./styles/cart.css";
import App from "./components/App";

// Exclamation point below is the non-null assertion operator
// It's me telling the compiler 'trust me, I know this can't be null here
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
