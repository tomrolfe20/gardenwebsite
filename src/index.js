import React from "react";
import ReactDOM from "react-dom/client";
import Gardens from "./components/Gardens";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import GlobalStyle from "./globalStyles";
import Info from "./components/Info";
import GardenPlans from "./components/GardenPlans";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <NavBar />
    <Hero />
    <Gardens />
    <Info />
    <GardenPlans />
  </React.StrictMode>
);
