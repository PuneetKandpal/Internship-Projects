import Navbar from "../components/Navbar";
import NewsHero from "../components/NewsHero";
import NewsTrending from "../components/NewsTrending";
import NewsFissionFresh from "../components/NewsFissionFresh";
import NewsChainReaction from "../components/NewsChainReaction";
import Footer from "../components/Footer";
const News = () => {
  return (
    <div>
      <Navbar />
      <NewsHero />
      <NewsTrending />
      <NewsFissionFresh />
      <NewsChainReaction />
      <Footer />
    </div>
  );
};

export default News;
