import HomeFeaturedNews from "./HomeFeaturedNews";
import HomeTweets from "./HomeTweets";

const HomeFeaturedNewsTweets = ({homeData}) => {
  return (
    <div className="md:pt-32 md:pb-28 md:px-20 px-6 py-16 bg-[#161616] overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <HomeFeaturedNews homeData={homeData}/>
        <HomeTweets homeData={homeData}/>
      </div>
    </div>
  );
};

export default HomeFeaturedNewsTweets;
