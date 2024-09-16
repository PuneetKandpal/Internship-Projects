import UraniumTableLosers from "./TableUraniumLosers";

const HomeLosarsTableSec = ({homeData}) => {
  return (
    <div className="pb-32 pt-0 bg-[#161616] px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row justify-between items-start overflow-x-hidden">
      <UraniumTableLosers homeData={homeData}/>
    </div>
  );
};

export default HomeLosarsTableSec;
