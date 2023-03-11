import React, { useContext } from "react";
import Home from "./pages/Home";
import SearchPage from "./components/SearchPage";
import Loader from "./shared/Loader";
import { useStateProvider } from "./utils/StateProvider";
import Sidebar from "./components/Sidebar";
import PlayingPlaylist from "./components/PlayingPlaylist";
import Player from "./shared/Player";

const Layout = () => {
  const [{ loading, isPlayerFullScreen, isPlaylistSelected }, dispatch] = useStateProvider();
  return (
    <React.Fragment>
      <Sidebar/>
      <Home/>
      {isPlaylistSelected && <PlayingPlaylist/>}
      <div className={isPlayerFullScreen ? "fullscreen player":"player"}><Player/></div>
    </React.Fragment>
  );
};

export default Layout;
