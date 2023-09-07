import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { useAuth } from "../../Providers/AuthProvider";

const Navigation = () => {

  const { loginData } = useAuth();

  
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
        {loginData ? (
            <NavLink to="/login">MIN SIDE</NavLink>
          ) : (
            <NavLink to="/login">LOGIN</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
