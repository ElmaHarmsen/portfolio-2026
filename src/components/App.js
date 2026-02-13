import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import Projects from "./Projects";
import FooterSection from "./FooterSection";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router";
// import components

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </div>
  );
}
