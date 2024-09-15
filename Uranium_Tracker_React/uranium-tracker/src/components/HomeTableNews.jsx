import LatestUraniumCompNews from "./LatestUraniumCompNews";
import UraniumTableGainers from "./TableUraniumBiggestGainers";

const HomeTableNews = ({homeData}) => {
  return (
    <div className="py-32 bg-[#161616] px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row justify-between items-start overflow-x-hidden">
      <UraniumTableGainers homeData={homeData}/>

      <LatestUraniumCompNews homeData={homeData}/>
    </div>

  );
};

export default HomeTableNews;
