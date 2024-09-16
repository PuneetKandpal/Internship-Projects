// auth.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://web-production-c2d9c.up.railway.app", // Django backend URL
});

// Attach token to each request if it exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
