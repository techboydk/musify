import React from "react";
import Home from "./pages/Home";
import SearchPage from "./components/SearchPage";
import Loader from "./shared/Loader";
import { useStateProvider } from "./utils/StateProvider";
import Sidebar from "./components/Sidebar";
import PlayingPlaylist from "./components/PlayingPlaylist";


const Layout = () => {
  const [{ loading, isPlayerFullScreen, isPlaylistSelected }, dispatch] = useStateProvider();
  return (
    <React.Fragment>
      <Sidebar/>
      <Home/>
    </React.Fragment>
  );
};

export default Layout;
