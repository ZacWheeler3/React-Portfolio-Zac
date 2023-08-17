import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./header";
function Navbar() {
  const currentPage = useLocation().pathname;
//find out how to add "portfolio" to the left side of nav bar 
   return (
    <nav>
      <ul className="nav-item">
        <li className="nav-item">
          <Link to="/" className={currentPage === "/" ? "active-link" : ""}>
            <h2 className="active">Home</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className={currentPage === "/about" ? "active-link" : ""}
          >
            <h2>About</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/projects"
            className={currentPage === "/projects" ? "active-link" : ""}
          >
            <h2>Projects</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/resume"
            className={currentPage === "/resume" ? "active-link" : ""}
          >
            <h2>Resume</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
