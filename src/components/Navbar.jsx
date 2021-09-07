import React, { useState } from "react";
import logo from "../assets/zocket.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            data-bs-toggle="collapse"
            data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${show ? "show" : ""}`}
            id="navmenu">
            <ul className="navbar-nav ms-auto align-items-start">
              <li className="nav-item me-4">
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item me-4">
                <a href="#whyus" className="nav-link">
                  Why Us
                </a>
              </li>
              <li className="nav-item me-4">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item me-4">
                <a href="#pricing" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item me-4">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#earlyacess"
                  className="nav-link btn btn-primary rounded text-light py-1 px-3">
                  Get Early Access
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
