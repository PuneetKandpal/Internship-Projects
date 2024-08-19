import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import FeaturedBlog from "../Components/FeaturedBlog";
import BlogCard from "../Components/BlogCard";

const Blogs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={` ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Navbar />
      <FeaturedBlog />
      <BlogCard />
    </div>
  );
};

export default Blogs;
