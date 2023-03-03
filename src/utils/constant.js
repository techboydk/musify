import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";

export const icons = [
    {name:"Home", icon: <HomeIcon/>, type: "home"},
    {name:"Download", icon: <DownloadDoneIcon/>, type: "download"},
    {name:"library", icon: <LibraryMusicIcon/>, type: "library"},
    {name:"playlist", icon: <PlaylistPlayIcon/>, type: "playlist"},
    {name:"settings", icon: <SettingsIcon/>, type: "setting"},
    {name:"about", icon: <InfoIcon/>, type: "about"}
];