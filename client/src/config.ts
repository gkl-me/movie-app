import axios from 'axios'

 export async function getMovies(){

     const BACKEND_URL = "tmdb_url"
     
     const params = {
         include_adult: false,
    include_video: false,
    language: 'en-US',
    page: 1,
    sort_by: 'popularity.desc',
};
const headers = {
    accept: 'application/json',
    Authorization: 'auth_token_tmbd'
  };
  
  const res =await axios.get(BACKEND_URL,{headers,params})
  return res.data.results
}

export const image_url = "image_url"

export const movie_url = "api_url"