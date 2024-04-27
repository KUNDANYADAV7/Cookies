// Footer.jsx
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  const supportsHover =
    window.CSS && CSS.supports("color", "var(--primary-color)");
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container text-center">
        <div className="social-icons">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: supportsHover ? "#fd1d1d" : "inherit" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/kundan-yadav-64426b279/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: supportsHover ? "#0e76a8" : "inherit" }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/KUNDANYADAV7"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: supportsHover ? "#F4CBB2" : "inherit" }}
          >
            <FaGithub />
          </a>
          <a
            href="https://app.netlify.com/teams/kundanyadav7/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: supportsHover ? "#00C7B7" : "inherit" }}
          >
            <SiNetlify />
          </a>
        </div>
        <p className="text-white mt-3">© 2024 Kundan Yadav</p>
      </div>
    </footer>
  );
};

export default Footer;
