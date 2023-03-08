// utility function to fetch api
import axios from 'axios'

const axios = require('axios')

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/captions',
  params: { part: 'snippet', videoId: 'M7FIvfx5J10' },
  headers: {
    'X-RapidAPI-Key': 'dd0c93f82cmshc808e65ae33495cp1663c1jsn19048b5bf88d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}
