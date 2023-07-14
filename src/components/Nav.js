import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const handleNavLinkClick = () => {
    setIsNavActive(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="navBar">
      <div className="logo">
        <NavLink to="/" className="lg-ieva" onClick={handleLogoClick}>
          Ieva
        </NavLink>
      </div>
      <div className={`navLinks ${isNavActive ? "active" : ""}`}>
        <NavLink to="/" onClick={(handleNavLinkClick, handleLogoClick)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={handleNavLinkClick}>
          About Me
        </NavLink>
        <NavLink to="/projects" onClick={handleNavLinkClick}>
          Projects
        </NavLink>
        <NavLink to="/skills" onClick={handleNavLinkClick}>
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          className="contLink"
          onClick={handleNavLinkClick}
        >
          Contact Me
        </NavLink>
      </div>
      <div className="toggle" onClick={toggleNav}>
        <GiHamburgerMenu className="toggle" />
      </div>
    </div>
  );
}

export default Nav;
