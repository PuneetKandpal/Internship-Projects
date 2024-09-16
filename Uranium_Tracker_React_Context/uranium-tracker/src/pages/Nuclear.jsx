import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import NuclearReactorDatabase from "../components/NuclearReactorDatabase";
import NuclearTotalOperableReactor from "../components/NuclearTotalOperableReactor";
import NuclearRecentConnections from "../components/NuclearRecentConnections";
import NuclearTopLoadFactor from "../components/NuclearTopLoadFactor";
import NuclearTopGeneration from "../components/NuclearTopGeneration";
import NuclearTopLifetimeGeneration from "../components/NuclearTopLifetimeGeneration";
import NuclearRecentConstructionStarts from "../components/NuclearRecentConstructionStarts";
import { NuclearContext } from "../context/NuclearContext";
import { useContext } from "react";

const Nuclear = () => {
  const { data, loading, error } = useContext(NuclearContext); // Changed homeData to data

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <NuclearReactorDatabase nuclearData={data} />
      <NuclearTotalOperableReactor nuclearData={data} />
      <NuclearRecentConnections nuclearData={data} />
      <NuclearTopLoadFactor nuclearData={data} />
      <NuclearTopGeneration nuclearData={data} />
      <NuclearTopLifetimeGeneration nuclearData={data} />
      <NuclearRecentConstructionStarts nuclearData={data} />
      <Footer />
    </div>
  );
};

export default Nuclear;
