import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../images/Logo.png";

function Nav() {
  return (
    <div className="navBar">
      <div className="logo">
        <NavLink to="/" className="lg-ieva">
          <img src={Logo} alt="logo" className="logo-img" />
        </NavLink>
      </div>
      <div className="navLinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact" className="contLink">
          Contact Me
        </NavLink>
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
