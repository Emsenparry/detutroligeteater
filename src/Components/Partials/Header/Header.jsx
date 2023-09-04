import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../../../Assets/SVG/DUT Logo.svg";
import styles from "./Header.module.scss";
import SearchBar from "../Search/Search";

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <img src={Logo} alt="logo" />
      <div className={styles.col2}>
        <SearchBar />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;