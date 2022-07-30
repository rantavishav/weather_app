import axios from 'axios';

const axiosMain = axios.create({
  baseURL: process.env.REACT_APP_END_POINT_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '5fe4d31007mshf9e1c2a2040993ap17d0c9jsn81183d094744',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
});
export default axiosMain;
