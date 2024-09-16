import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://web-production-c2d9c.up.railway.app", // Set the base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
