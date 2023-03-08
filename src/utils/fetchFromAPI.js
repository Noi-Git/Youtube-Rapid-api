// utility function to fetch api
import axios from 'axios'

const axios = require('axios')

// look for the url you want on the left of Rapid api
const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date',
  },
  headers: {
    'X-RapidAPI-Key': 'dd0c93f82cmshc808e65ae33495cp1663c1jsn19048b5bf88d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}
