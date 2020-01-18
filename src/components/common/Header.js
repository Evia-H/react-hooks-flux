import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const ActiveStyle = { color: "orange" };
  return (
    <nav>
      <NavLink activeStyle={ActiveStyle} exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={ActiveStyle} to="/courses">
        Courses
      </NavLink>
      {" | "}
      <NavLink activeStyle={ActiveStyle} to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Header;
