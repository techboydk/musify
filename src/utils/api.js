import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
  params: {
    geo: 'IN',
    lang: 'en'
  },
  headers: {
    'x-rapidapi-key': '10172a145dmshb83dac7d267dc78p10d21bjsn9dbfe6a5073d',
    'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

// const options = {
//   method: "GET",
//   url: "https://simple-youtube-search.p.rapidapi.com/search",
//   params: { safesearch: "false", hl: "hi", gl: "IN" },
//   headers: {
//     'x-rapidapi-key': '4491352f50mshafcfd29c680f63cp127ab1jsn0e5aaf2ccdfd',
//     'x-rapidapi-host': 'simple-youtube-search.p.rapidapi.com'
//   }
// };

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

export const getPlaylistDataFromApi = async (query) => {
  const url = query.split(" ").join("%20");
  const { data } = await axios.request(
    `${BASE_URL}/search?query=${url}&type=playlist`,
    options
  );
  return data?.data;
};

export const getPlaylistItemsFromId = async (id) => {
  const { data } = await axios.request(
    `${BASE_URL}/playlist?id=${id}`,
    options
  );
  return data?.data;
};

export const getSearchDataFromApi = async (query) => {
  const url = query.split(" ").join("%20");
  const { data } = await axios.request(
    `${BASE_URL}/search?query=${url}`,
    options
  );
  return data?.data;
};

export const createHomeData = async (playlistsKeyWords) => {
  console.log(true);
  const HomeData = [];
  for (const item of playlistsKeyWords) {
    const playlists = await getPlaylistDataFromApi(item.title);
    console.log(playlists);
    const data = { [item.title]: playlists };
    HomeData.push(data);
  }
  return HomeData;
};


