import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ import useLocation

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileNav = () => setMobileOpen(!mobileOpen);

  const location = useLocation(); // ✅ detect current page

  // Helper to scroll smoothly when on homepage
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav id="navbar" className={`navbar ${mobileOpen ? "navbar-mobile" : ""}`}>
      <ul>
        {/* If on homepage, scroll; if on MyBio, go back to / */}
        <li>
          {location.pathname === "/" ? (
            <a className="nav-link scrollto active" href="#hero" onClick={() => handleScroll("hero")}>Home</a>
          ) : (
            <Link className="nav-link scrollto active" to="/">Home</Link>
          )}
        </li>

        <li>
          {location.pathname === "/" ? (
            <a className="nav-link scrollto" href="#about" onClick={() => handleScroll("about")}>About Me</a>
          ) : (
            <Link className="nav-link scrollto" to="/">About Me</Link>
          )}
        </li>

        <li>
          {location.pathname === "/" ? (
            <a className="nav-link scrollto" href="#portfolio" onClick={() => handleScroll("portfolio")}>Portfolio</a>
          ) : (
            <Link className="nav-link scrollto" to="/">Portfolio</Link>
          )}
        </li>

        <li className="dropdown">
          <a href="#">
            <span>More</span> <i className="bi bi-chevron-down"></i>
          </a>
          <ul>
            <li><Link to="/MyBio">My Bio</Link></li>
          </ul>
        </li>

        <li>
          {location.pathname === "/" ? (
            <a className="nav-link scrollto" href="#contact" onClick={() => handleScroll("contact")}>Contact Me</a>
          ) : (
            <Link className="nav-link scrollto" to="/">Contact Me</Link>
          )}
        </li>
      </ul>

      <i
        className={`bi ${mobileOpen ? "bi-x" : "bi-list"} mobile-nav-toggle`}
        onClick={toggleMobileNav}
      ></i>
    </nav>
  );
}

export default Navbar;

