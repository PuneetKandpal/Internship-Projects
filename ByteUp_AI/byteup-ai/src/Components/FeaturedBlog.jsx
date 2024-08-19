import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const FeaturedBlog = () => {
  const { theme } = useContext(ThemeContext);

  const featured = [
    {
      id: 0,
      date: "August 10, 2024",
      writer: "John Peralta",
      title:
        "The Humanoid Robot Will Leverage Tesla's Experience With Automated Machines In Its Factories",
      tags: ["Augmented", "Hardware"],
    },
  ];

  // Access the first object in the array
  const { date, writer, title, tags } = featured[0];

  return (
    <div
      className={`px-[5.5rem]  ${
        theme === "light" ? "bg-white text-white" : "bg-black text-black"
      }`}
    >
      <div
        className={`w-full mt-10 p-8 pl-14 py-12 relative ${
          theme === "light" ? "bg-black" : "bg-white"
        } `}
      >
        <div className="absolute left-0 top-[0%] bg-gradient-to-br from-purple to-sky h-[100%] w-[10px] rounded- "></div>
        <p
          className={`mt-1 text-sm italic font-normal ${
            theme === "light" ? "text-white/40" : "text-black/50"
          }`}
        >
          <span>{date}</span> <span>/ By {writer}</span>
        </p>

        <h1 className="text-4xl font-semibold font-Syne mt-3 leading-[3rem] underline">
          {title}
        </h1>

        <div className="mt-5 flex space-x-2">
          {tags.map((tag, i) => (
            <p
              key={i}
              className={`border rounded-full py-1 px-4 text-sm font-normal transition-all duration-200 ${
                theme === "light"
                  ? "border-white/60 text-white/60 hover:text-black/80 hover:border-transparent"
                  : "border-black/80 text-black/80 hover:text-white/80 hover:border-transparent"
              } hover:bg-gradient-to-br from-purple to-sky`}
            >
              {tag}
            </p>
          ))}
        </div>

        <a
          className="mt-14 block text-[13px] font-Archivo uppercase tracking-[1.2px] text-purple hover:text-sky transition-all duration-200"
          href="#"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default FeaturedBlog;
