import Navbar from "../components/Navbar";
import NewsHero from "../components/NewsHero";
import NewsTrending from "../components/NewsTrending";
import NewsFissionFresh from "../components/NewsFissionFresh";
import NewsChainReaction from "../components/NewsChainReaction";
const News = () => {
  return (
    <div>
      <Navbar />
      <NewsHero />
      <NewsTrending />
      <NewsFissionFresh />
      <NewsChainReaction />
    </div>
  );
};

export default News;
