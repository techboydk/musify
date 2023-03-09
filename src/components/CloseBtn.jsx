import React from "react";
import { playerControlIcons } from "../utils/constant";

const CloseBtn = ({ isActive, setActive }) => {
  const handleActive = () => {
    isActive && setActive(false);
  };
  return <playerControlIcons.close onClick={handleActive} />;
};

export default CloseBtn;
