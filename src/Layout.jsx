import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import SearchResult from "./components/SearchResult";
import Player from "./components/Player";
import Home from "./pages/Home";
import TopCharts from "./pages/TopCharts";
import Youtube from "./pages/Youtube";
import Library from "./pages/Library";
import BottomNav from "./shared/BottomNav";

const Layout = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/searchResul/:searchQuery" element={<SearchResult />} />
        <Route path="/song/:id" element={<Player />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/topcharts" element={<TopCharts />} />
        <Route path="/library" element={<Library />} />
        <Route path="/searchResult" element={<SearchResult />} />
      </Routes>
      <BottomNav />
    </Container>
  );
};

export default Layout;

const Container = styled.div``;
