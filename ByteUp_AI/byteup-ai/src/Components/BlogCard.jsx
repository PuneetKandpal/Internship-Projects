import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const BlogCard = ({ blogs, currentPage, blogsPerPage }) => {
  const { theme } = useContext(ThemeContext);

  // Calculate the blogs to display on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="w-full px-[5.5rem] mt-24">
      {currentBlogs.map((blog) => {
        return (
          <div key={blog.id} className="w-full py-10 mb-10">
            <div className="w-full h-[350px]">
              <img
                className="w-full h-full object-cover"
                src={blog.image}
                alt={blog.title}
              />
            </div>

            <p
              className={`mt-5 text-sm font-normal ${
                theme === "light" ? "text-black/40" : "text-white/50"
              }`}
            >
              <span>{blog.date}</span> <span>/ By {blog.writer}</span>
            </p>

            <h1 className="text-[2.1rem] font-semibold font-Syne mt-2 leading-[2.5rem]">
              {blog.title}
            </h1>
            <p
              className={`mt-2 text-sm ${
                theme === "light" ? "text-black/60" : "text-white/40"
              }`}
            >
              {blog.description}
            </p>

            <div className="mt-4 flex space-x-2">
              {blog.tags.map((t, i) => (
                <p
                  key={i}
                  className={`border rounded-full py-1 px-4 text-sm font-normal transition-all duration-200 ${
                    theme === "light"
                      ? "border-black/60 text-black/60 hover:text-white/80 hover:border-transparent"
                      : "border-white/80 text-white/80 hover:text-black/80 hover:border-transparent"
                  } hover:bg-gradient-to-br from-purple to-sky`}
                >
                  {t}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
