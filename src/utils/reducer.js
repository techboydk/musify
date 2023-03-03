export const initialState = {
  user: null,
  online: true,
  loading: false,
  isplaying: false,
  mobileMenu: false,
  isMobile: window.innerWidth<768 ? true:false,
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

    default:
      return state;
  }
};

export default reducer;
