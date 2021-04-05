import React from "react";
import styles from "./NavigationItem.module.css";
function NavigationItem(props) {
  return <li className={styles.navLi}>{props.children}</li>;
}

export default NavigationItem;
