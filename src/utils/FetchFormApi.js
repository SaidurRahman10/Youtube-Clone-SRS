
import axios from "axios";

const Ultra_URL =  'https://youtube-v31.p.rapidapi.com'

const options = {
 
  
    params: {
      params: {
        maxResult: '50'
      }
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  // /baseUrl/getC

  export const fetchFromAPI = async (url) => {
  const {data} =  await axios.get(`${Ultra_URL}/${url}`,options)

  return data;
  }