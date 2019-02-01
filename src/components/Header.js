import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <nav>
    <ul className="navUl">
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>
    </ul>
  </nav>
);

export default Header;
