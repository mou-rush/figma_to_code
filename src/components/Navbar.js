import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="NavbarItems">
      <div className="navbar-logo">
        <img src={logo} />
        <h6 className="awesome-social">Awesome Social</h6>
      </div>
      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
