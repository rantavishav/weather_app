import axios from 'axios';

const axiosMain = axios.create({
  baseURL: process.env.REACT_APP_END_POINT_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_X_RAPIDAPI_HOST
  }
});
export default axiosMain;
