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
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import CheckIcon from '@mui/icons-material/Check';

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
  liked: FavoriteIcon,
  shuffle: ShuffleIcon,
  repeat: RepeatIcon,
  repeatOne: RepeatOneIcon,
  download: DownloadIcon,
  downloaded: CheckIcon,
  musicNote: MusicNoteIcon,
  playing: GraphicEqIcon,
};

export const playlistsKeyWords = [
  {
    title: "top bhakti playlists",
    keyword: "top+bhakti+songs+playlist",
  },
  {
    title: "top hindi playlists",
    keyword: "trending+hindi+playlist",
  },
  {
    title: "top english playlists",
    keyword: "trending+english+playlist",
  },
  {
    title: "top bhojpuri playlists",
    keyword: "trending+bhojapuri+playlist",
  },
  {
    title: "top punjabi playlists",
    keyword: "trending+punjabi+playlist",
  },
];


export const formatTitle = (q) => {
  // Define the specific words to be removed (case-insensitive)
  var wordsToRemove = ['video', 'songs', 'song', 'top', 'trending', 'vide'];

  // Create a regular expression pattern to match the words
  var wordPattern = new RegExp('\\b(' + wordsToRemove.join('|') + ')\\b', 'gi');

  // Replace the matched words with an empty string
  var modifiedText = q.replace(wordPattern, '');

  // Define a regular expression pattern to match special characters
  var specialCharPattern = /[^a-zA-Z0-9\s\u0900-\u097F]/g;

  // Remove the special characters from the modified text
  modifiedText = modifiedText.replace(specialCharPattern, '');
  modifiedText = modifiedText.replace(/\s+/g, ' ').trim();
  modifiedText = modifiedText.replace(/\b\w\b/g, '');
  return modifiedText.trim().split(/\s+/).slice(0, 4).join(' ');
}