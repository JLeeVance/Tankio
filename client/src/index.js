import React, {useState, createContext } from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(

<App />

);
