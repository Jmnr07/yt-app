import axios from 'axios'

const KEY = 'AIzaSyAzz5fB6iJssEFiIaVllvdZdpl16sPLrIE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
  }
});