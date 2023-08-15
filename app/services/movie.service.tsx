import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const Api_Key = "63d0249a6bbeb745c1288eb9eec7bfd9";

export const client = axios.create({
  baseURL: API_URL,
  params: {
    api_key: Api_Key
  }
});

const searchMovies = async (query :string) => {
  try {
    const res = await client.get('/search/movie', {
      params: {query}
    });

    console.log(res.data.results);

    if(res.data && res.data?.results) {
      return res.data?.results;
    } else {
      console.error('Could not get data')
    }

  } catch (error) {
    console.error(error);
    return [];
  }
}

export {searchMovies};
