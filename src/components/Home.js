import React from "react";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import ProjectsList from "./ProjectsList";
function Home() {
  return (
    <div>
      <About />
      <ProjectsList />
      <Skills />
      <Contact />
    </div>
  );
}
export default Home;
