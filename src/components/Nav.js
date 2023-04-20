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
        <NavLink to="/skills">Projects</NavLink>
        <NavLink to="/contact">Projects</NavLink>
      </div>
    </div>
  );
}

export default Nav;
