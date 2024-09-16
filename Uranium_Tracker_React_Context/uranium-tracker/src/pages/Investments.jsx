import Navbar from "../components/Navbar";
import InvestmentsSidenav from "../components/InvestmentsSidenav";
import InvestmentsTopPerformers from "../components/InvestmentsTopPerformers";
import InvestmentsAtomicPortfolio from "../components/InvestmentsAtomicPortfolio";
import InvestmentUraniumTable from "../components/InvestmentsUraniumTable";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { InvestmentContext } from "../context/InvestmentContext";
import { useContext } from "react";

const Investments = () => {
  const { data, loading, error } = useContext(InvestmentContext);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-20 mx-auto w-full flex justify-between relative">
        <InvestmentsSidenav />
        <div className="sidenav-animation w-full md:w-[78%] mt-[6.6rem] md:ml-[24%] overflow-y-auto -mb-3">
          <InvestmentsTopPerformers stocksData={data} />
          <InvestmentsAtomicPortfolio stocksData={data} />
          <InvestmentUraniumTable stocksData={data} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Investments;
