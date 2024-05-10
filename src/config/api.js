
import axios from 'axios';


const DEPLOYED_BACKEND_URL = 'https://freman-ecommerce-backend.onrender.com/';

// Set the API base URL to the deployed backend URL
export const API_BASE_URL = DEPLOYED_BACKEND_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

// Set the Authorization header if a token is present
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Set Content-Type header for POST requests
api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
