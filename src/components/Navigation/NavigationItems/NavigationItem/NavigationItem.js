import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.css";
function NavigationItem(props) {
  return (
    <li className={styles.li}>
      <NavLink to={props.link} className={styles.navLink}>
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
