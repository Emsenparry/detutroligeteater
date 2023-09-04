import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#D39D5B" : "#30454C",
            })}
            className={styles.activeLink}
          >
            FORSIDE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            style={({ isActive }) => ({
              color: isActive ? "#D39D5B" : "#30454C",
            })}
            className={styles.activeLink}
          >
            FORESTILLINGER & EVENTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actors"
            style={({ isActive }) => ({
              color: isActive ? "#D39D5B" : "#30454C",
            })}
            className={styles.activeLink}
          >
            SKUESPILLERE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            style={({ isActive }) => ({
              color: isActive ? "#D39D5B" : "#30454C",
            })}
            className={styles.activeLink}
          >
            LOGIN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
