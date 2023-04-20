import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div>
        <h1>IEVA</h1>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
      </div>
    </div>
  );
}

export default Nav;
