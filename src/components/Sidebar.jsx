import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";

const Sidebar = () => {
  const [{ mobileMenu, isMobile }, dispatch] = useStateProvider();

  const hideSidebar = () => {
    dispatch({
      type: "SET_MOBILE_MENU",
      mobileMenu: false,
    });
  };

  return (
    <Container
      className={isMobile ? "sidebar_container mobile" : "sidebar_container"}
    >
      <div
        className={mobileMenu ? "blur active" : "blur"}
        onClick={hideSidebar}
      ></div>
      <div
        className={
          isMobile
            ? mobileMenu
              ? "sidebar active mobile"
              : "sidebar mobile"
            : "sidebar"
        }
      >
        <div className="top">
          <div className="logo">
            <div className="logo_con">
              <h2>Musify</h2>
              <span>v1.0.0</span>
            </div>
          </div>
        </div>
        <div className="bottom">made by dipesh yadav</div>
      </div>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  display: flex;

  height: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  &.mobile {
    margin: 1rem;
    z-index: 9999;
    position: fixed;
    &.active {
    }
  }

  .blur {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000094;
    &.active {
      display: flex;
    }
  }
  .sidebar {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    max-width: 250px;
    padding: 1rem;
    overflow: hidden;
    &.mobile {
      position: fixed;
      left: 0;
      top: 0;
      width: 60%;
      max-width: 275px;
      height: 100vh;
      background-color: #111;
      transform: translateX(-100%);
      transition: 0.3s transform ease-in;
      &.active {
        transform: translateX(0);
      }
    }

    .top {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: center;
      border-right: 5px #00d0ff;
      border-right-style: outset;
      border-radius: 50%;
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;

        .logo_con {
          transform: rotate(-90deg);
        }
        h2 {
          font-size: 5rem;
          color: transparent;
          -webkit-text-stroke: 1px #00ffc4;
          letter-spacing: 0.75rem;
        }
        span {
          display: flex;
          justify-content: flex-end;
          font-size: 0.95rem;
          margin-top: 0.25rem;
          color: #bbb;
        }
      }
      .links {
        display: flex;
        flex-direction: column;
        margin: 2rem 2rem;
        gap: 1rem;
        .link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem;
          color: #ccc;
          text-transform: capitalize;
          cursor: pointer;
          &.active {
            color: #00ffc4;
          }
          &:hover {
            background: #3737379e;
            border-radius: 0.35rem;
          }
        }
      }
    }
    .bottom {
      margin-bottom: 1rem;
      text-transform: capitalize;
      font-size: 0.85rem;
      color: #bbb;
    }
  }
`;
