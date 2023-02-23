import axios from "axios";

const options = {
  method: "GET",
  url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
  params: { },
  headers: {
    "X-RapidAPI-Key": "3a402a7821msh41ac00e78be3ef9p11ad26jsne18698da37c4",
    "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
  },
};

const BASE_URL = "https://youtube-search-results.p.rapidapi.com";


  
export const fetchDataFromApi = async(url)=>{
    let data;
    await axios.request(`${BASE_URL}/youtube-search/?q=${url}`, options).then(function (response) {
        const {items} = response.data;
        data = items
    }).catch(function (error) {
        console.error(error);
    });
    return data;
  }
