import axios from 'axios';

export default axios.create({
  baseURL: 'https://keeptheboxgreen-api.azurewebsites.net/',
  headers: {
    'Content-type': 'application/json',
  },
});
