import Navbar from "../components/Navbar";
import InvestmentsSidenav from "../components/InvestmentsSidenav";
import InvestmentsTopPerformers from "../components/InvestmentsTopPerformers";
import InvestmentsAtomicPortfolio from "../components/InvestmentsAtomicPortfolio";
import InvestmentUraniumTable from "../components/InvestmentsUraniumTable";
import Footer from "../components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { fetchStocksData } from "../store/slices/apiSlice";
import Loader from "../components/Loader"; // Import your loader component
import { useEffect, useState } from "react";

const Investments = () => {
  const dispatch = useDispatch();
  const stockData = useSelector((state) => state.api.stocks);
  const status = useSelector((state) => state.api.status);
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading state

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStocksData());
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
          <div className="px-6 md:px-20 mx-auto w-full flex justify-between relative">
            <InvestmentsSidenav />
            <div className="sidenav-animation w-full md:w-[78%] mt-[6.6rem] md:ml-[24%] overflow-y-auto -mb-3">
              <InvestmentsTopPerformers />
              <InvestmentsAtomicPortfolio />
              <InvestmentUraniumTable />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Investments;

// import Navbar from "../components/Navbar";
// import InvestmentsSidenav from "../components/InvestmentsSidenav";
// import InvestmentsTopPerformers from "../components/InvestmentsTopPerformers";
// import InvestmentsAtomicPortfolio from "../components/InvestmentsAtomicPortfolio";
// import InvestmentUraniumTable from "../components/InvestmentsUraniumTable";
// import Footer from "../components/Footer";

// import { useDispatch, useSelector } from "react-redux";
// import { fetchStocksData } from "../store/slices/apiSlice";
// import Loader from "../components/Loader"; // Import the Loader component
// import { useEffect } from "react";

// const Investments = () => {
//   const dispatch = useDispatch();
//   const stockData = useSelector((state) => state.api.stocks); // Get stock data from Redux store
//   const status = useSelector((state) => state.api.status); // Get loading status from Redux store

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchStocksData()); // Fetch data when status is idle
//     }
//   }, [status, dispatch]);

//   // Show loader while the data is loading
//   if (status === "loading") {
//     return <Loader />;
//   }

//   // Show error message if the data fetching fails
//   if (status === "failed") {
//     return <div>Error fetching data.</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="px-6 md:px-20 mx-auto w-full flex justify-between relative">
//         <InvestmentsSidenav />
//         <div className="sidenav-animation w-full md:w-[78%] mt-[6.6rem] md:ml-[24%] overflow-y-auto -mb-3">
//           <InvestmentsTopPerformers />
//           <InvestmentsAtomicPortfolio />
//           <InvestmentUraniumTable />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Investments;
