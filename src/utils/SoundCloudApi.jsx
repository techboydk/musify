import axios from "axios";
import { formatTitle } from "./constant";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4491352f50mshafcfd29c680f63cp127ab1jsn0e5aaf2ccdfd",
    "X-RapidAPI-Host": "soundcloud-downloader4.p.rapidapi.com",
  },
};

const BASE_URL = "https://soundcloud-downloader4.p.rapidapi.com/soundcloud";

export const getSongUrlFromTitle = async (q) => {
  const str = formatTitle(q);
  const qstr = str.split(" ").join("%20");
  const url = `${BASE_URL}/search?query=${qstr}`;
  const { data } = await axios.get(url, options);
  return data?.result[0]?.url;
};

export const getAudioLinkFromTitle = async(q) =>{
    const url = await getSongUrlFromTitle(q)
    const {data} = await axios.get(`${BASE_URL}/track?url=${encodeURIComponent(url)}`,options);
    return data?.music?.download_url;
}

export const getSearchResults = async(q)=>{
    const str = formatTitle(q);
    const qstr = str.split(" ").join("%20");
    const url = `${BASE_URL}/search?query=${qstr}`;
    const { data } = await axios.get(url, options);
    const songsList = []
    data?.result?.map((item)=>{
        axios.get(`${BASE_URL}/track?url=${encodeURIComponent(item?.url)}`,options).then(({data})=>{
            songsList.push(data?.music);
        })
    })
    return songsList;
}
