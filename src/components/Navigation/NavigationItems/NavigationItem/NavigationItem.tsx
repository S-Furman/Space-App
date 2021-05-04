import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.css";

interface NavItemProps {
  link: string;
  children: React.ReactNode;
}

function NavigationItem({ link, children }: NavItemProps) {
  return (
    <li className={styles.li}>
      <NavLink to={link} className={styles.navLink}>
        {children}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
