import { useContext, useState, useEffect, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { gsap } from "gsap";

const Testimonials = () => {
  const { theme } = useContext(ThemeContext);
  const testimonialRef = useRef(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const testimonials = [
    {
      image:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png",
      quote:
        "Working with Akshay from ByteUp AI was a great experience. His Python programming skills were top-notch, and he delivered work very quickly. Akshay showed professionalism, technical expertise, and a strong commitment to quality. ByteUp AI’s focus on innovation and detail is impressive. I highly recommend them for any project needing skill and reliability.",
      author: "Amit Verma",
      position: "",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png",
      quote:
        "I recently worked with Akshay from Byteup AI, and I couldn’t be more satisfied. He took over a project from another team and did an outstanding job. His communication was excellent, keeping me informed throughout. The project was completed on time, and Akshay’s attention to detail ensured everything met my satisfaction. I highly recommend Akshay and Byteup AI for their reliability and skill.",
      author: "Genevieve Jackson",
      position: "",
    },
    // {
    //   image:
    //     "https://as2.ftcdn.net/jpg/06/37/92/85/220_F_637928505_V2mHRDvy0oGUVFN138S7F2J65gRHVhoo.jpg",
    //   quote:
    //     "Their team provided excellent support and top-notch expertise. Our project was a success thanks to their hard work.",
    //   author: "Michael Johnson",
    //   position: "CTO, Company Z",
    // },
    // {
    //   image:
    //     "https://media.istockphoto.com/id/1490764451/photo/headshot-portrait-of-confident-handsome-mature-middle-age-businessman-at-office.webp?b=1&s=612x612&w=0&k=20&c=Oxn1hxRZ43vNbYcRlsKQs0Wa8zT344VOIJfGbd_qMtY=",
    //   quote:
    //     "Working with them was a pleasure. They exceeded our expectations and delivered outstanding results.",
    //   author: "Emily Davis",
    //   position: "Product Manager, Company A",
    // },
  ];

  const nextTestimonial = () => {
    gsap.to(testimonialRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.3,
      onComplete: () => {
        setCurrentTestimonialIndex(
          (prevIndex) => (prevIndex + 1) % testimonials.length
        );
        gsap.fromTo(
          testimonialRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.3 }
        );
      },
    });
  };

  const prevTestimonial = () => {
    gsap.to(testimonialRef.current, {
      opacity: 0,
      x: 20,
      duration: 0.3,
      onComplete: () => {
        setCurrentTestimonialIndex(
          (prevIndex) =>
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
        gsap.fromTo(
          testimonialRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.3 }
        );
      },
    });
  };

  const animateCount = () => {
    if (!hasAnimated) {
      let count = 1;
      const targetCount = 20;
      const interval = setInterval(() => {
        if (count <= targetCount) {
          countRef.current.innerText = `${count}+`;
          count++;
        } else {
          clearInterval(interval);
        }
      }, 60);

      setHasAnimated(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-[113vh] md:min-h-[90vh] py-14 md:py-0 mt-40 bg-cover bg-center relative bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col lg:flex-row justify-between items-center px-4 sm:px-10 lg:px-20 py-10 z-10">
        <div className="w-full lg:w-[40%] h-auto lg:h-[80%] text-white flex flex-col justify-center mb-10 lg:mb-0">
          <h1
            ref={countRef}
            className="text-6xl sm:text-8xl lg:text-[9rem] mt-[-20px] font-extrabold"
          >
            1+
          </h1>
          <h2 className="text-[13px] uppercase font-Syne leading-4 font-normal ml-1 tracking-[.20em] text-white/70">
            Happy Clients
          </h2>
          <h1 className="mt-3 text-xl sm:text-2xl lg:text-[1.7rem] font-Syne font-bold">
            All About Our Success
          </h1>
          <p className="mt-3 text-sm lg:text-[15px] tracking-[0.6px] text-white/70 font-normal">
            We take pride in our clients' trust, which drives us to deliver
            innovative solutions and exceptional results. Each project reflects
            our dedication and leaves a lasting mark on our journey of
            excellence.
          </p>
        </div>
        <div
          ref={testimonialRef}
          className={`${
            theme === "light" ? "bg-white" : "bg-black"
          } w-full lg:w-[50%] py-10 px-6 sm:px-10 lg:px-20 h-auto lg:h-[80%] flex flex-col justify-center items-start shadow-lg relative`}
        >
          <img
            src={testimonials[currentTestimonialIndex].image}
            alt={testimonials[currentTestimonialIndex].author}
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover mb-6"
          />
          <p
            className={`text-base sm:text-lg lg:text-[18px] ${
              theme === "light" ? "text-gray-600" : "text-zinc-400"
            } italic leading-relaxed mb-6`}
          >
            "{testimonials[currentTestimonialIndex].quote}"
          </p>
          <p className="mt-6 text-start font-semibold">
            <p className="text-gradient-css">
              {testimonials[currentTestimonialIndex].author}
            </p>
            <p
              className={`${
                theme === "light"
                  ? "text-black/40"
                  : "text-white/30 font-medium"
              }`}
            >
              {testimonials[currentTestimonialIndex].position}
            </p>
          </p>
          <div className="absolute bottom-6 right-6 flex space-x-3">
            <button
              onClick={prevTestimonial}
              className={`${
                theme === "light"
                  ? "bg-black/10 text-black/60"
                  : "bg-white/15 text-white/60"
              } text-[14px] p-2 rounded-full shadow-md hover:bg-gradient-to-br from-purple to-sky hover:text-white transition duration-300`}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className={`${
                theme === "light"
                  ? "bg-black/10 text-black/60"
                  : "bg-white/15 text-white/60"
              } text-[14px] p-2 rounded-full shadow-md hover:bg-gradient-to-br from-purple to-sky hover:text-white transition duration-300`}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
