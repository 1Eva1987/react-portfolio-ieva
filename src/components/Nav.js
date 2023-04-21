import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  return (
    <div className="navBar">
      <div className="logo">
        <h1>IEVA</h1>
      </div>
      <div className="navLinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
      </div>
      <div
        className="toggle"
        onClick={() =>
          document.querySelector(".navLinks").classList.toggle("active")
        }
      >
        <GiHamburgerMenu className="toggle" />
      </div>
    </div>
  );
}

export default Nav;
