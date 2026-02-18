import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import Projects from "./Projects";
import FooterSection from "./FooterSection";
import About from "./About";
import CaseStudy from "./CaseStudy";
import { BrowserRouter, Routes, Route } from "react-router";
import ScrollHandler from "./ScrollHandler";
// import components

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollHandler />
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Projects />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/casestudy" element={<CaseStudy />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </div>
  );
}
