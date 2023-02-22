import React from 'react'
import styled from 'styled-components';
import Card from './Card';

const CardSection = () => {
  return (
    <Container>
        <h4 className="title">your playlists</h4>
        <div className="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            
        </div>
    </Container>
  )
}

export default CardSection;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-bottom: 2rem;
    &:last-child{
        margin-bottom: 15rem;
    }
    h4.title{
        text-transform: capitalize;
        margin-left: 1rem;
    }
    .cards{
        display: flex;
        overflow: scroll;
        gap: .75rem;
        &::-webkit-scrollbar{
            display: none;
        }
    }
`