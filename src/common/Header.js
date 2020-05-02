import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const customCss = { fontWeight: 800 };
  return (
    <nav>
      <NavLink activeStyle={customCss} exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={customCss} exact to="/about">
        About
      </NavLink>
      {" | "}
      <NavLink activeStyle={customCss} exact to="/courses">
        Courses
      </NavLink>
    </nav>
  );
}

export default Header;
