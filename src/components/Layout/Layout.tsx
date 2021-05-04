import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";

interface ILayout {
  children: React.ReactNode;
}

const Layout = (props: ILayout) => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      {props.children}
    </React.Fragment>
  );
};
export default Layout;
