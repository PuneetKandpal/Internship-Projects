import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
// import blogs from "../assets/blog.js";

const BlogCard = () => {
  const { theme } = useContext(ThemeContext);

  const blogs = [
    {
      id: 1,
      date: "September 12, 2024",
      writer: "Emily Davis",
      title:
        "AI Revolution: How Artificial Intelligence is Shaping the Future of Healthcare",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quisquam soluta obcaecati, corrupti nemo, incidunt nam facilis illo minima natus dolor fugit necessitatibus tempore quod modi. Ea consectetur excepturi minus!",
      tags: ["AI", "Healthcare"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      date: "September 5, 2024",
      writer: "Emily Chen",
      title:
        "Exploring the Future of AI: How Machine Learning is Changing the Tech Landscape",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quisquam soluta obcaecati, corrupti nemo, incidunt nam facilis illo minima natus dolor fugit necessitatibus tempore quod modi. Ea consectetur excepturi minus!",
      tags: ["AI", "Machine Learning"],
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGl0JTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      date: "October 15, 2024",
      writer: "Michael Smith",
      title:
        "Quantum Computing: Breaking Down the Myths and Realities of this Emerging Technology",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quisquam soluta obcaecati, corrupti nemo, incidunt nam facilis illo minima natus dolor fugit necessitatibus tempore quod modi. Ea consectetur excepturi minus!",
      tags: ["Quantum Computing", "Technology"],
      image:
        "https://st3.depositphotos.com/9880800/17524/i/450/depositphotos_175242348-stock-photo-happy-colleagues-having-fun-modern.jpg",
    },
    {
      id: 4,
      date: "November 2, 2024",
      writer: "Sophia Martinez",
      title:
        "Sustainable Tech: How the Industry is Evolving to Meet Environmental Challenges",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quisquam soluta obcaecati, corrupti nemo, incidunt nam facilis illo minima natus dolor fugit necessitatibus tempore quod modi. Ea consectetur excepturi minus!",
      tags: ["Sustainability", "Green Tech"],
      image:
        "https://images.unsplash.com/photo-1531973576160-7125cd663d86?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGl0JTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      date: "December 20, 2024",
      writer: "Liam Johnson",
      title:
        "Blockchain Beyond Cryptocurrency: Applications and Innovations in 2024",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quisquam soluta obcaecati, corrupti nemo, incidunt nam facilis illo minima natus dolor fugit necessitatibus tempore quod modi. Ea consectetur excepturi minus!",
      tags: ["Blockchain", "Innovation"],
      image:
        "https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXQlMjBjb21wYW55fGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="w-full px-[5.5rem] mt-24">
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className="w-full py-10 mb-10">
            <div className="w-full h-[350px]">
              <img
                className="w-full h-full object-cover"
                src={blog.image}
                alt=""
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
