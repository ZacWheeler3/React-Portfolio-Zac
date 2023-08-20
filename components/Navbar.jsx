import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <div className="left-item">
          <li className="nav-item">Portfolio</li>
        </div>
        <li className="nav-item">
          <Link to="/">
            <h2 className="active">Home</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about">
            <h2>About</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects">
            <h2>Projects</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/resume">
            <h2>Resume</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
