import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context for YouTube videos
export const VideoContext = createContext();

// Create a provider component for YouTube videos
export const VideoProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = "https://web-production-c2d9c.up.railway.app";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/youtube-videos`);
        console.log(response.data); // Debugging to check API response
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <VideoContext.Provider value={{ data, loading, error }}>
      {children}
    </VideoContext.Provider>
  );
};
