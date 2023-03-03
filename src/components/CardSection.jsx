import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const CardSection = ({ title, data }) => {

  return (
    <Container>
      <h4 className="title">{data ? title : "No title"}</h4>
      <div
        className="scrollable-div"
      >
        {data?.map((video, index) => {
          return (
            video.type === "video" && <Card itemData={video} key={index} />
          );
        })}
      </div>
    </Container>
  );
};

export default CardSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
  user-select: none;
  &:last-child {
    margin-bottom: 15rem;
  }
  h4.title {
    text-transform: capitalize;
    margin-left: 1rem;
  }
  .scrollable-div {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding: 1rem;
    -webkit-overflow-scrolling: touch;
    user-select: none;
    &::-webkit-scrollbar {
      height: 0.25rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 1rem;
    }
    &::-webkit-scrollbar-track {
      background-color: #303030ba;
    }
  }
`;
