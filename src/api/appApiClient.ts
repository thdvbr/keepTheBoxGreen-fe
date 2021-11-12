// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from 'axios';

export default axios.create({
  baseURL: 'https://keeptheboxgreen-prod.azurewebsites.net/',
  headers: {
    'Content-type': 'application/json',
  },
});
