import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useStateProvider } from '../utils/StateProvider';

const BottomNav = () => {
  const [{isplaying}, dispatch] = useStateProvider();

  return (
    <Container>
    </Container>
  );
};

export default BottomNav;

const Container = styled.div`
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #000;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
  
  .nav_links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
    .link {
      display: flex;
      align-items: center;
      border-radius: 5rem;
      padding: 0.75rem 0;
      gap: 0.5rem;
      color: #fff;
      text-transform: capitalize;
      strong {
        width: 0;
        overflow: hidden;
      }
      &.active {
        transition: 0.3s padding ease-in-out;
        padding: 0.75rem;
        background-color: #7dffe140;
        color: #00ffc4;
        strong {
          width: 100%;
        }
      }
    }
  }
`;
