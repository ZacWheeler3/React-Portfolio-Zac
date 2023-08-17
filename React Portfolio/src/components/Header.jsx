import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const currentPage = useLocation().pathname;
  return (
    <header className="header">
      <a href="#" className="logo">Portfolio</a>
      <i className="bx bx-menu" id="menu-icon"></i>
    </header>
  );
};

export default Header;