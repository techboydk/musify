import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Player from "./shared/Player";
import Home from "./pages/Home";
import TopCharts from "./pages/TopCharts";
import Youtube from "./pages/Youtube";
import Library from "./pages/Library";
import SearchPage from "./components/SearchPage";
import Loader from "./shared/Loader";
import { useStateProvider } from "./utils/StateProvider";
import BottomNav from "./shared/BottomNav";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  const [{ loading }, dispatch] = useStateProvider();
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Sidebar/>
      <Home/>
      <Player/>
    </React.Fragment>
  );
};

export default Layout;
