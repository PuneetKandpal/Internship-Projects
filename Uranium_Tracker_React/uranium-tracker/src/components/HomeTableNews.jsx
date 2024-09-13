import LatestUraniumCompNews from "./LatestUraniumCompNews";
import UraniumTable from "./TableUraniumBiggestGainers";

const HomeTableNews = () => {
  return (
    <div className="py-32 bg-[#161616] px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row justify-between items-start overflow-x-hidden">
      <UraniumTable />
      <LatestUraniumCompNews />
    </div>
  );
};

export default HomeTableNews;
