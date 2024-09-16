import Navbar from "../components/Navbar";
import NewsHero from "../components/NewsHero";
import NewsTrending from "../components/NewsTrending";
import NewsFissionFresh from "../components/NewsFissionFresh";
import NewsChainReaction from "../components/NewsChainReaction";
import Footer from "../components/Footer";
import { NewsContext } from "../context/NewsContext";
import Loader from "../components/Loader";
import { useContext } from "react";

const News = () => {
  const { data, loading, error } = useContext(NewsContext); // Correct context usage

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <NewsHero newsData={data} />
      <NewsTrending newsData={data} />
      <NewsFissionFresh newsData={data} />
      <NewsChainReaction newsData={data} />
      <Footer />
    </div>
  );
};

export default News;
