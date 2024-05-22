import React from "react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";



const Layout = () => {
  return (
    <React.Fragment>
      <Sidebar/>
      <Home/>
    </React.Fragment>
  );
};

export default Layout;
