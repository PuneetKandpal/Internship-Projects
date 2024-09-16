import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context for Home page
export const GlossaryContext = createContext();

// Create a provider component for Home
export const GlossaryProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = "https://web-production-c2d9c.up.railway.app";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/glossary`);
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
    <GlossaryContext.Provider value={{ data, loading, error }}>
      {children}
    </GlossaryContext.Provider>
  );
};
