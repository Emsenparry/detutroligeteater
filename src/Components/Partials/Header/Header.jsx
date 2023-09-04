import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../../../Assets/SVG/DUT Logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <img src={Logo} alt="logo" />
      <Navigation className={styles.navMain} />
    </header>
  );
};

export default Header;