import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useStateProvider } from "../utils/StateProvider";

const MenuBtn = () => {
  const [{ mobileMenu }, dispatch] = useStateProvider();

  const activeMobileMenu = () => {
    dispatch({
      type: "SET_MOBILE_MENU",
      mobileMenu: mobileMenu ? false : true,
    });
  };
  return (
    <div onClick={activeMobileMenu} style={{cursor:"pointer"}}>
      <MenuOpenIcon />
    </div>
  );
};

export default MenuBtn;
