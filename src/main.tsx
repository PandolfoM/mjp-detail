import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      withCSSVariables
      theme={{
        colorScheme: "dark",
        fontFamily: "Inter",
        colors: {
          brand: [
            "#f5ebff",
            "#dbc8ec",
            "#c1a4db",
            "#a682cb",
            "#8d5ebb",
            "#7344a1",
            "#5a357e",
            "#40255c",
            "#271639",
            "#100619",
          ],
        },
        primaryColor: "brand",
        primaryShade: 4,
        globalStyles: () => ({
          body: {
            backgroundColor: "#1A1A1A",
          },
        }),
      }}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
