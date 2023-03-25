import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStateProvider } from '../utils/StateProvider';

const Searchbar = ({ Ref, Icon, back, search }) => {
  const [{user}, dispatch] = useStateProvider();
  const [inputValue, setInputValue] = useState();
  const navigate = useNavigate()


  const clickHandler = (e) => {
    navigate("/searchpage")
  };

  const searchQueryHandler = (event) => {
    if (event?.key === "Enter" && inputValue?.length > 0) {

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
