import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.css";
function NavigationItem(props) {
  return (
    <NavLink to={props.link} className={styles.navLi}>
      {props.children}
    </NavLink>
  );
}

export default NavigationItem;
