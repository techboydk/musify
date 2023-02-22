import React from 'react'
import styled from 'styled-components';
import Searchbar from './Searchbar';
import CancelIcon from '@mui/icons-material/Cancel';
import Tag from './Tag';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

const SearchResult = () => {
  return (
    <Container>
      <div className="search_container"><Searchbar Icon={ArrowBackIosNewIcon} onClick={useNavigate(window.history.back)}/></div>
      <div className="search_history">
        <Tag title='songs' Icon ={CancelIcon}/>
        <Tag title='songs' Icon ={CancelIcon}/>
        <Tag title='songs' Icon ={CancelIcon}/>
        <Tag title='songs' Icon ={CancelIcon}/>
        <Tag title='songs' Icon ={CancelIcon}/>

      </div>
      <div className="suggetion">
        <h3 className="title">Trending Search</h3>
        <div className="tags">
          <Tag title="ram aayenge"/>
        </div>
      </div>
      
    </Container>
  )
}

export default SearchResult;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .search_container{
    margin: 1rem;
  }
  .search_history{
    display: flex;
    flex-wrap: wrap;
    margin: 1rem;
    gap: 0.75rem;
  }
  .suggetion{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;
    h3{
      color: #00ffc4;
    }
  }
`