import axios from "axios";
import cheerio from "cheerio";

const options = {
  method: "GET",
  url: "https://simple-youtube-search.p.rapidapi.com/search",
  params: { safesearch: "false", hl: "hi", gl: "IN" },
  headers: {
    "X-RapidAPI-Key": "10172a145dmshb83dac7d267dc78p10d21bjsn9dbfe6a5073d",
    "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
  },
};

const BASE_URL = "https://simple-youtube-search.p.rapidapi.com";

export const getPlaylistDataFromApi = async (query) => {
  const url = query.split(" ").join("+");
  const { data } = await axios.request(
    `${BASE_URL}/search?query=${url}&type=playlist`,
    options
  );
  return data?.results;
};

export const getPlaylistItemsFromId = async (id) => {
  const { data } = await axios.request(
    `${BASE_URL}/playlist?list=${id}`,
    options
  );
  return data?.result?.videos;
};

export const getSearchDataFromApi = async (query) => {
  const url = query.split(" ").join("+");
  const { data } = await axios.request(
    `${BASE_URL}/search?query=${url}&type=video&videoDuration=short`,
    options
  );
  return data?.results;
};

export const createHomeData = async (playlistsKeyWords) => {
  console.log(true);
  const HomeData = [];
  for (const item of playlistsKeyWords) {
    const playlists = await getPlaylistDataFromApi(item.keyword);
    const data = { [item.title]: playlists };
    HomeData.push(data);
  }
  return HomeData;
};


export const downloadSongLink = async(id) => {

  const url = `https://api.vevioz.com/api/button/mp3/${id}`;
  try {
    const response = await axios.get(url);
    const html = response.data;

    // Load the HTML content into Cheerio
    const $ = cheerio.load(html);

    // Find all the <a> tags and get their href values
    const hrefs = [];
    $('a').each((index, element) => {
      const href = $(element).attr('href');
      hrefs.push(href);
    });

    return hrefs;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}
