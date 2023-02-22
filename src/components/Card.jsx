import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <Container>
      <img
        src="https://png.pngtree.com/template/20220218/ourmid/pngtree-music-poster-of-bar-singing-competition-image_765703.jpg"
        alt=""
      />
      <h4 className="title">Playlists name</h4>
      <p className="subtitle">10 songs</p>
    </Container>
  );
};

export default Card;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:first-child{
    margin-left: 1rem;
  }
  &:last-child{
    margin-right: 1rem;
  }
  img{
    height: 9rem;
    width: 9rem;
    border-radius: .75rem;
    object-fit: cover;
  }
  h4.title{
    margin: .5rem 0 .25rem;
    font-size: .86rem;
    font-weight: 800;
    text-align: center;

  }
  .subtitle{
    font-size: 0.85rem;
    color: #bbb;
    font-weight: 600;
  }
`;
