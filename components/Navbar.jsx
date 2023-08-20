import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est consectetur
        tempora eaque, ducimus voluptates autem! Placeat numquam odit excepturi
        autem qui aliquam earum magnam laudantium atque. Quo laboriosam illo atque?
      </p>
      <ul className="nav-list"> 
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

