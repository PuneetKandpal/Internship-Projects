import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { fetchNuclearData } from "../store/slices/apiSlice";
import Loader from "../components/Loader"; // Import your loader component
import { useEffect, useState } from "react";
import NuclearReactorDatabase from "../components/NuclearReactorDatabase";
import NuclearTotalOperableReactor from "../components/NuclearTotalOperableReactor";
import NuclearRecentConnections from "../components/NuclearRecentConnections";
import NuclearTopLoadFactor from "../components/NuclearTopLoadFactor";
import NuclearTopGeneration from "../components/NuclearTopGeneration";
import NuclearTopLifetimeGeneration from "../components/NuclearTopLifetimeGeneration";
import NuclearRecentConstructionStarts from "../components/NuclearRecentConstructionStarts";

const Nuclear = () => {
  const dispatch = useDispatch();
  const nuclearData = useSelector((state) => state.api.nuclear);
  console.log(nuclearData);
  const status = useSelector((state) => state.api.status);
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading state

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNuclearData());
    }
  }, [status, dispatch]); // Removed isLoading from dependency array

  useEffect(() => {
    if (status === "succeeded") {
      setIsLoading(false); // Set loading to false when data is fetched
    }
  }, [status]); // Separate useEffect to handle loading state

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <NuclearReactorDatabase />
          <NuclearTotalOperableReactor />
          <NuclearRecentConnections />
          <NuclearTopLoadFactor/>
          <NuclearTopGeneration/>
          <NuclearTopLifetimeGeneration/>
          <NuclearRecentConstructionStarts/>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Nuclear;
