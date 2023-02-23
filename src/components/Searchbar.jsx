import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/contextApi";

const Searchbar = ({ Ref, Icon, back, search }) => {
  const { searchQuery, setSearchQuery } = useContext(Context);
  const [inputValue, setInputValue] = useState()
  const navigate = useNavigate()

  const clickHandler = (e) => {

    e.preventDefault();

    if (document.location.pathname !== "/searchPage") {
      navigate("/searchPage");
    }
  };

  const searchQueryHandler = (event) => {
    if (event?.key === "Enter" && inputValue?.length > 0) {
      setSearchQuery(inputValue)
      console.log(searchQuery)
    }
  };

  return (
    <Container ref={Ref} onClick={clickHandler}>
      {Icon && <Icon onClick={back ? back : search} />}
      <input
        type="text"
        name="search"
        id="search"
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
