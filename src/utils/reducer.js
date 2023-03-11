export const initialState = {
  user: null,
  online: true,
  loading: true,
  isplaying: false,
  mobileMenu: false,
  isMobile: window.innerWidth < 1024 ? true : false,
  isPlayerFullScreen: false,
  query: "Music",
  searchResults: [],
  selectedPlaylist: null,
  isPlaylistSelected: false,
  selectedPlaylistItems: [],
  selectedTrack: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_ONLINE":
      return {
        ...state,
        online: action.online,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.loading,
      };

    case "SET_PLAYING":
      return {
        ...state,
        isplaying: action.isplaying,
      };

    case "SET_MOBILE_MENU":
      return {
        ...state,
        mobileMenu: action.mobileMenu,
      };

    case "CHECK_MOBILE":
      return {
        ...state,
        isMobile: action.isMobile,
      };

    case "IS_PLAYER_FULLSCREEN":
      return {
        ...state,
        isPlayerFullScreen: action.isPlayerFullScreen,
      };

    case "SET_QUERY":
      return {
        ...state,
        query: action.query,
      };

    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.searchResults,
      };

    case "SET_Playlist":
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };

    case "IS_PLAYLIST_SELECTED":
      return {
        ...state,
        isPlaylistSelected: action.isPlaylistSelected,
      };

    case "SET_SELECTED_PLAYLIST_ITEMS":
      return {
        ...state,
        selectedPlaylistItems: action.selectedPlaylistItems,
      };

    case "SET_SELECTED_TRACK":
      return {
        ...state,
        selectedTrack: action.selectedTrack,
      };

    default:
      return state;
  }
};

export default reducer;
