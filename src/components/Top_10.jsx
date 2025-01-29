import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Gallery</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle">Top_10</a>
          <ul className="dropdown-menu">
            <li><a href="#">Top 10 Animals</a></li>
            <li><a href="#">Top 10 Birds</a></li>
            <li><a href="#">Top 10 Plants</a></li>
            <li><a href="#">Top 10 Cities</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
