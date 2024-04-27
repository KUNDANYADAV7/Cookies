import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import vk2 from "../images/vk2.png";
import "./Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-dark py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center">
              <img
                src={vk2}
                className="logo"
                alt="Company Logo"
                style={{ backgroundColor: "lightgray", borderRadius: "50px" }}
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNav}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/home"
                  onClick={() => setIsNavOpen(false)}
                >
                  HomePage
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/page1"
                  onClick={() => setIsNavOpen(false)}
                >
                  Page1
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/page2"
                  onClick={() => setIsNavOpen(false)}
                >
                  Page2
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/page3"
                  onClick={() => setIsNavOpen(false)}
                >
                  Page3
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
