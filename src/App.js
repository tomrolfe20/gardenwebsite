import React from "react";
import GardenPlans from "./components/GardenPlans";
import Gardens from "./components/Gardens";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import GlobalStyle from "./globalStyles";
import Info from "./components/Info";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <Gardens />
      <Info />
      <GardenPlans />
    </>
  );
}

export default App;
