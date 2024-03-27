import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/user";
import { OwnedPlantsProvider } from "./context/ownedplants";
import { OwnedFishProvider } from "./context/ownedfish";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
      background: {
        default: 'rgba(249, 247, 240, .2)'
      }
    }
  })

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Router>
            <UserProvider>
                <OwnedPlantsProvider>
                    <OwnedFishProvider>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <App />
                        </ThemeProvider>
                    </OwnedFishProvider>
                </OwnedPlantsProvider>
            </UserProvider>
        </Router>
    </React.StrictMode>
);
