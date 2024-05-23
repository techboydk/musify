import React, { useState } from 'react'
import styled from 'styled-components';
import { useStateProvider } from './utils/StateProvider';

const Login = () => {
  const [inputValue, setInputValue] = useState('');
  const [{},dispatch] = useStateProvider();


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    dispatch({
      type: "SET_USER",
      user: inputValue,
    })
    window.localStorage.setItem("username",inputValue);
  };
  return (
    <Container>
      <div className="login_card">
        <p className="title">Enter a user name.</p>
        <input  type="text" name="username" id="username" placeholder='username...' value={inputValue} onChange={handleChange}/>
        <div className="button" onClick={handleClick}>OK</div>
      </div>
    </Container>
  )
}

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #000;
  .login_card{
    background: #bcffbf1a;
    padding: 3rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    box-shadow: 0.5rem 0.5rem 1rem #11ffb32e, inset 0.1rem 0.1rem 1rem #4111ff;
    .title{
      color: #11ffb3;
      font-size: 1.5rem;
      font-weight: 600;

    }
    input{
    border: none;
    outline: none;
    height: 2rem;
    width: 100%;
    border-radius: .5rem;
    padding: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: #11ffb3;
    background: #0000007a;
    }
    .button{
    color: #11ffb3;
    background: #000;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    font-weight: 600;
    font-size: .85rem;
    user-select: none;
    cursor: pointer;
    cursor: pointer;
    }
  }
`