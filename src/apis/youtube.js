import axios from 'axios';

const KEY = 'AIzaSyC89n90XrdwR4y249ElGbdENPMfalnYxnM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
