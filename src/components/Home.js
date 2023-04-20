import React from "react";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import ProjectCard from "./ProjectCard";
function Home() {
  return (
    <div>
      <About />
      <ProjectCard />
      <Skills />
      <Contact />
    </div>
  );
}
export default Home;
