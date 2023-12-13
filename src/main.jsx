import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import ContextWrapper from "./ui/components/ContextWrapper.jsx";
import App from "./ui/pages/main/App.jsx";
import theme from "./ui/pages/main/Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>
);
