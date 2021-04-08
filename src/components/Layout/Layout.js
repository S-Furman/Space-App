import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      {props.children}
    </React.Fragment>
  );
};
export default Layout;
