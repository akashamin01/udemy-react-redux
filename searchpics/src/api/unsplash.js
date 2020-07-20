import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers : {
    Authorization: 'Client-ID EnCt9Q2LKKS7hQzwEfb4kb0xNdHgykphQDwmhqA-mIg'
  }
});
