import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {q: 'desp', hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': "3a402a7821msh41ac00e78be3ef9p11ad26jsne18698da37c4",
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

const BASR_URL = "https://youtube138.p.rapidapi.com";

  
export const fetchDataFromApi = async (url) =>{
    const {data} = await axios.get(`${BASR_URL}/${url}`, options);
    return data;
}