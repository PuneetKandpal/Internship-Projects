import Navbar from "../components/Navbar";
import InvestmentsSidenav from "../components/InvestmentsSidenav";
import InvestmentsTopPerformers from "../components/InvestmentsTopPerformers";
import InvestmentsAtomicPortfolio from "../components/InvestmentsAtomicPortfolio";
import InvestmentUraniumTable from "../components/InvestmentsUraniumTable";
import Footer from "../components/Footer";

const Investments = () => {
  return (
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
  );
};

export default Investments;
