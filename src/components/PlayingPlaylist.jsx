import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";

const PlayingPlaylist = () => {
  const [{ isMobile, isplaying }, dispatch] = useStateProvider();

  return <Container className={isMobile && "mobile"}>PlayingPlaylist</Container>;
};

export default PlayingPlaylist;

const Container = styled.div`
  display: flex;
  flex: 0.3;
  position: sticky;
  top: 0;
  &.mobile{
    position: fixed;
    top: 0;
    right: 0;
  }
`;
