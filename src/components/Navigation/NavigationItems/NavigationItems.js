import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
const NavigationItems = () => (
  <ul>
    <NavigationItem link="/">Home</NavigationItem>
    <NavigationItem link="/weather">Weather</NavigationItem>
  </ul>
);

export default NavigationItems;
