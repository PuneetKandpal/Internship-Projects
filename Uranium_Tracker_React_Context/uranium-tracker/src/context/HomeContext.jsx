import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context for Home page
export const HomeContext = createContext();

// Create a provider component for Home
export const HomeProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = "https://web-production-c2d9c.up.railway.app";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/home`);
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
    <HomeContext.Provider value={{ data, loading, error }}>
      {children}
    </HomeContext.Provider>
  );
};
