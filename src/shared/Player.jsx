import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";

const Player = () => {
  const [{ isMobile }, dispatch] = useStateProvider();

  return (
    <Container className={isMobile && "mobile"}>
      <div className="player">this player section</div>
    </Container>
  );
};

export default Player;

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
