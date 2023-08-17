import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const currentPage = useLocation().pathname;

  const myStyle = {
    color: "#66fcf1",
    padding: "1px",
    fontSize: "25px",
    textDecoration: "none" 
      };

  return (
    <nav >
      <ul className="nav-item">
      
        <li className="nav-item">
          <Link to="/" className={currentPage === "/" ? "active-link" : ""}>
            <h2 style={myStyle}>Home</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className={currentPage === "/about" ? "active-link" : ""}>
          <h2 style={myStyle}>About</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className={currentPage === "/projects" ? "active-link" : ""}>
          <h2 style={myStyle}>Projects</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/resume" className={currentPage === "/resume" ? "active-link" : ""}>
          <h2 style={myStyle}>Resume</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
