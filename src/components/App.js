import { useState } from "react";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import Project from "./Project";
import FooterSection from "./FooterSection";
// import components

export default function App() {
  return (
    <div className="App">
      {/* <span>logo</span> */}
      <Navigation />
      <HeroSection />
      <Project />
      <FooterSection />
    </div>
  );
}
