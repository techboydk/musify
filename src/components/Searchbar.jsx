import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getSearchDataFromApi } from "../utils/api";
import { useStateProvider } from "../utils/StateProvider";

const Searchbar = ({ Ref, Icon, back, search }) => {
  const [{isMobile}, dispatch] = useStateProvider();
  const [inputValue, setInputValue] = useState();
  const navigate = useNavigate();
  const inputRef = useRef();
  const location = useLocation();

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
          track?.duration !== 0 && isMobile ? track?.duration/1000 <= 600 && allTrack.push(track) : allTrack.push(track);
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
