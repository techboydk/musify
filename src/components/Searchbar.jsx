import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getSearchDataFromApi } from "../utils/api";
import { useStateProvider } from "../utils/StateProvider";


const convertTimeToMinutes = (time) => {
  const parts = time.split(':').map(Number);
  
  let hours = 0, minutes = 0, seconds = 0;
  
  if (parts.length === 2) {
      // Format is MM:SS
      [minutes, seconds] = parts;
  } else if (parts.length === 3) {
      // Format is HH:MM:SS
      [hours, minutes, seconds] = parts;
  } else {
      return 0;
  }
  
  // Calculate total minutes
  const totalMinutes = (hours * 60) + minutes + Math.floor(seconds / 60);
  
  return totalMinutes;
}

const Searchbar = ({ Ref, Icon, back, search }) => {
  const [{},dispatch] = useStateProvider();
  const [inputValue, setInputValue] = useState();
  const navigate = useNavigate();
  const inputRef = useRef();

  const clickHandler = (e) => {
    if (window.location.hash.split("/")[1] !== "searchpage") {
      navigate("/searchpage");
    }

  };
  useEffect(() => {
    if (window.location.hash.split("/")[1] === "searchpage") {
      inputRef.current.focus();
    }

  }, []);

  const searchQueryHandler = (event) => {
    if (event?.key === "Enter" && inputValue?.length > 0) {
      dispatch({
        type: "query",
        query: inputValue,
      });
      dispatch({
        type: "SET_LOADING",
        loading: true,
      });
      getSearchDataFromApi(inputValue).then((data) => {
        const allTrack = []
        data.map((track)=>{
          const duration = convertTimeToMinutes(track.lengthText);
          if(duration<10 && duration >0){
            allTrack.push(track);
          }
          return 0;
        })
        dispatch({
          type: "SET_SEARCH_RESULTS",
          searchResults: allTrack,
        });
        dispatch({
          type: "SET_SELECTED_PLAYLIST_ITEMS",
          selectedPlaylistItems: allTrack,
        });
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
      });
    }
  };

  return (
    <Container ref={Ref} onClick={clickHandler}>
      {Icon && <Icon onClick={back ? back : search} />}
      <input
        type="text"
        name="search"
        id="search"
        ref={inputRef}
        placeholder="Songs, Album, Artists, Podcasts ..."
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyUp={searchQueryHandler}
        value={inputValue}
      />
    </Container>
  );
};

export default Searchbar;

const Container = styled.div`
  position: sticky;
  top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  margin-left: auto;
  border-radius: 0.75rem;
  background-color: #222;
  width: 100%;
  box-shadow: 0 0 1rem #000;
  * {
    color: #00ffc4;
  }
  input {
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    color: #ccc;
    font-size: 0.95rem;
  }
`;
