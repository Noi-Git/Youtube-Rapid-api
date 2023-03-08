// utility function to fetch api
// import axios from 'axios'
const axios = require('axios')

// look for the url you want on the left of Rapid api
const BASE_URL = 'https://youtube-v31.p.rapidapi.com/'

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`&{BASE_URL}/${url}`, options)
  return data
}

/* === without destructured data out of the response
export const fetchFromAPI = async (url) => {
  const response = await axios.get(`&{BASE_URL}/${url}`, options)
  return data
}
*/
