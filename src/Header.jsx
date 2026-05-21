import React, { useEffect } from "react";
import Navbar from "./Navbar"; // separate component
import "./style.css";

function Header() {
  useEffect(() => {
    const header = document.querySelector("#header");

    const headerScrolled = () => {
      if (window.scrollY > 100) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    };

    window.addEventListener("scroll", headerScrolled);

    return () => {
      window.removeEventListener("scroll", headerScrolled);
    };
  }, []);

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="/">TINO<span>.</span></a>
        </h1>

        {/* Navbar is its own component */}
        <Navbar />

        <a href="#about" className="get-started-btn scrollto">Get Started</a>
      </div>
    </header>
  );
}

export default Header;

