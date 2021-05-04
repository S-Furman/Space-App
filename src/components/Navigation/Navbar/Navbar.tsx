import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../../assets/logo.png";
import styles from "./Navbar.module.css";
const Navbar = () => (
  <header className={styles.header}>
    <img src={Logo} alt="logo" className={styles.logo} />
    <nav className={styles.nav}>
      <NavigationItems></NavigationItems>
    </nav>
  </header>
);

export default Navbar;
