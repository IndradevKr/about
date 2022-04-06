import React from "react";
import "./Components/style.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop.";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main className="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <ScrollToTop />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;