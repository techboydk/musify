import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import CloseIcon from "@mui/icons-material/Close";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import DownloadIcon from "@mui/icons-material/Download";

export const icons = [
  { name: "Home", icon: <HomeIcon />, type: "home" },
  { name: "Download", icon: <DownloadDoneIcon />, type: "download" },
  { name: "library", icon: <LibraryMusicIcon />, type: "library" },
  { name: "playlist", icon: <PlaylistPlayIcon />, type: "playlist" },
  { name: "settings", icon: <SettingsIcon />, type: "setting" },
  { name: "about", icon: <InfoIcon />, type: "about" },
];

export const playerControlIcons = {
  play: PlayArrowIcon,
  pause: PauseIcon,
  play2: PlayCircleFilledWhiteIcon,
  pause2: PauseCircleFilledIcon,
  next: SkipNextIcon,
  prev: SkipPreviousIcon,
  close: CloseIcon,
  like: FavoriteBorderIcon,
  shuffle: ShuffleIcon,
  repeat: RepeatIcon,
  repeatOne: RepeatOneIcon,
  download: DownloadIcon,
};

export const playlistsKeyWords = [
  {
    title: "trending now",
    keywords: [
      "trending bollywood song",
      "trending tollywood song",
      "trending hollywood song",
      " evergreen hindi song",
    ],
  },
];
