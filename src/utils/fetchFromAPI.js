// utility function to fetch api
import axios from 'axios'

const axios = require('axios')

// look for the url you want on the left of Rapid api
const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}
