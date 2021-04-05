import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main>{props.children}</main>
    </React.Fragment>
  );
};
export default Layout;
