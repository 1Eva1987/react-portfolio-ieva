import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import WrapperProjects from "./components/WrapperProjects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <About />
      <WrapperProjects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
