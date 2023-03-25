import React, { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "./utils/StateProvider";
import Layout from "./Layout";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Player from "./shared/Player";

const App = () => {
  const [{ user, online, isMobile, isPlayerFullScreen }, dispatch] =
    useStateProvider();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        dispatch({
          type: "CHECK_MOBILE",
          isMobile: true,
        });
      } else {
        dispatch({
          type: "CHECK_MOBILE",
          isMobile: false,
        });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, dispatch]);

  useEffect(() => {
    const _user = window.localStorage.getItem("username");

    if (_user) {
      dispatch({
        type: "SET_USER",
        user: _user,
      });
    }
  }, [user, dispatch]);

  return (
    <Container className="app">
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              online ? (
                <Layout />
              ) : (
                <div className="off_line">
                  <span>&#128549;</span> you are offline
                </div>
              )
            ) : (
              <Login />
            )
          }
        />
        <Route path="/searchpage" element={<SearchPage />} />
      </Routes>
      <div className={isPlayerFullScreen ? "fullscreen player" : "player"}>
        <Player />
      </div>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  margin: auto;
  max-height: 100vh;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  background-color: #111;
  color: #fff;
  &::-webkit-scrollbar {
    display: none;
  }
  .off_line {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-transform: capitalize;
    gap: 1rem;
    font-weight: bold;

    span {
      font-size: 2rem;
    }
  }
`;
