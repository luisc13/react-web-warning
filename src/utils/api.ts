import axios from 'axios';

const baseUrl = 'localhost:4000';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
