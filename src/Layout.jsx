import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Player from "./components/Player";
import Home from "./pages/Home";
import TopCharts from "./pages/TopCharts";
import Youtube from "./pages/Youtube";
import Library from "./pages/Library";
import SearchPage from "./components/SearchPage";
import Loader from "./shared/Loader";
import { Context } from "./context/contextApi";
import BottomNav from "./shared/BottomNav";


const Layout = () => {
  const {loading} = useContext(Context)
  return (
    <React.Fragment>
      {loading && <Loader/>}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/song/:id" element={<Player />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/topcharts" element={<TopCharts />} />
        <Route path="/library" element={<Library />} />
        <Route path="/searchPage" element={<SearchPage />} />
      </Routes>
      <BottomNav />
    </React.Fragment>
  );
};

export default Layout;

