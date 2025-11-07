// src/api/axios.js
import axios from "axios";

const API_BASE_URL = "https://namangan-back-api.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor – o'zgarmaydi
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor – o'zgarmaydi
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;