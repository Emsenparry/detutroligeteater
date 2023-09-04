import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../../../Assets/SVG/DUT Logo.svg";
import styles from "./Header.module.scss";
import SearchBar from "../Search/Search";

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <img src={Logo} alt="logo" />
      <div>
        <SearchBar />
        <Navigation className={styles.navMain} />
      </div>
      
    </header>
  );
};

export default Header;