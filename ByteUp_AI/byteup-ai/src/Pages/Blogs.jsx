import Navbar from "../Components/Navbar";
import { useContext, useState, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import FeaturedBlog from "../Components/FeaturedBlog";
import BlogCard from "../Components/BlogCard";
import Footer from "../Components/Footer";

const Blogs = () => {
  const { theme } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  const blogSectionRef = useRef(null); // Create a ref for the blog section

  // Dummy data for the blog posts
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

    {
      id: 6,
      date: "January 5, 2025",
      writer: "Olivia Brown",
      title: "Cybersecurity Trends: What to Expect in 2025 and Beyond",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quisquam soluta obcaecati, corrupti nemo, incidunt nam facilis illo minima natus dolor fugit necessitatibus tempore quod modi. Ea consectetur excepturi minus!",
      tags: ["Cybersecurity", "Tech Trends"],
      image:
        "https://img.pagecloud.com/0K11AosjE1WtzXEezlFJ2R7z5x8=/1000x0/filters:no_upscale()/blogmerge/085c2d25-9ced-4034-8671-91e56970acd0.jpeg",
    },
    {
      id: 7,
      date: "February 14, 2025",
      writer: "James Wilson",
      title:
        "The Role of Data Science in Predictive Analytics and Decision Making",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quisquam soluta obcaecati, corrupti nemo, incidunt nam facilis illo minima natus dolor fugit necessitatibus tempore quod modi. Ea consectetur excepturi minus!",
      tags: ["Data Science", "Analytics"],
      image:
        "https://www.constantcontact.com/blog/wp-content/uploads/2021/04/Social-4.jpg",
    },
    {
      id: 8,
      date: "March 3, 2025",
      writer: "Sophia Green",
      title:
        "Virtual Reality and Augmented Reality: Transforming the Gaming World",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quisquam soluta obcaecati, corrupti nemo, incidunt nam facilis illo minima natus dolor fugit necessitatibus tempore quod modi. Ea consectetur excepturi minus!",
      tags: ["VR", "AR", "Gaming"],
      image:
        "https://cdn-media-1.freecodecamp.org/images/1*QVTcnfXyMXivNu62IJ7JSg.jpeg",
    },
    {
      id: 9,
      date: "April 10, 2025",
      writer: "Liam White",
      title: "5G Technology: What It Means for Connectivity and Innovation",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quisquam soluta obcaecati, corrupti nemo, incidunt nam facilis illo minima natus dolor fugit necessitatibus tempore quod modi. Ea consectetur excepturi minus!",
      tags: ["5G", "Connectivity", "Innovation"],
      image:
        "https://www.jabil.com/dam/jcr:eb3781b3-b12d-4ff1-85b6-450a74023de1/5g-issues-and-challenges.jpg",
    },
    {
      id: 10,
      date: "May 18, 2025",
      writer: "Emily Garcia",
      title:
        "The Rise of Edge Computing: Decentralizing the Cloud for Greater Efficiency",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quisquam soluta obcaecati, corrupti nemo, incidunt nam facilis illo minima natus dolor fugit necessitatibus tempore quod modi. Ea consectetur excepturi minus!",
      tags: ["Edge Computing", "Cloud"],
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXQlMjBjb21wYW55fGVufDB8fDB8fHww",
    },
  ];

  // Scroll to the top of the blog section
  const scrollToTop = () => {
    if (blogSectionRef.current) {
      blogSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    scrollToTop(); // Scroll to the top when the page changes
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Navbar />
      <FeaturedBlog />
      <div ref={blogSectionRef}>
        {" "}
        {/* Attach the ref to the blog section */}
        <BlogCard
          blogs={blogs}
          currentPage={currentPage}
          blogsPerPage={blogsPerPage}
        />
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 text-sm mx-2 text-white bg-gradient-to-br from-purple to-sky disabled:opacity-40"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(blogs.length / blogsPerPage)}
          className="px-3 py-1 text-sm mx-2 text-white bg-gradient-to-br from-purple to-sky disabled:opacity-40"
        >
          Next
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
