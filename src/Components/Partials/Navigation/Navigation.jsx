import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">FORSIDE</NavLink>
        </li>
        <li>
          <NavLink to="/events">FORESTILLINGER & EVENTS</NavLink>
        </li>
        <li>
          <NavLink to="/actors">SKUESPILLERE</NavLink>
        </li>
        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
