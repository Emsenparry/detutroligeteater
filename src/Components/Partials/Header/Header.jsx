import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../../../Assets/SVG/DUT Logo.svg";
import styles from "./Header.module.scss";
import SearchBar from "../Search/Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <Link to="/"><img src={Logo} alt="logo" /></Link>
      <div className={styles.col2}>
        <SearchBar />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;