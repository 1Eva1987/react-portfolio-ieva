import React from "react";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import ProjectsList from "./ProjectsList";
import Intro from "./Intro";

function Home() {
  return (
    <div>
      <Intro />
      <About />
      <ProjectsList />
      <Skills />
      <Contact />
    </div>
  );
}
export default Home;
