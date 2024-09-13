import { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      // Replace with your actual API endpoint
      const response = await axios.post("/api/subscribe", { email });
      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error("Subscription error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-[#111111] text-white py-14 px-6 lg:px-[1.2rem]">
      <div className="lg:w-[90%] mx-auto w-full">
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          {/* Newsletter Subscription Section */}
          <h2 className="text-[17px] frank sm:text-[23px] font-semibold">
            Sign Up For Our Newsletter
          </h2>
          <p className="text-sm publicsans mt-3 font-normal text-white/50">
            Receive uranium market updates and 70% off our premium reports.
          </p>
          {/* Email Subscription Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center mt-6 w-full max-w-[600px]"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-sm mb-4 sm:mb-0 sm:mr-2 w-full bg-white/5 text-white focus:outline-none placeholder:text-[14px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-lime1 rounded-sm text-black text-[15px] font-bold px-6 py-2 hover:bg-lime2 transition-all duration-200"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {message && <p className="mt-2 text-sm">{message}</p>}
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-5 mt-6">
            <a
              href="#"
              className="text-zinc-400 transition ease-in-out duration-300 hover:text-zinc-100"
            >
              <i className="ri-facebook-fill text-xl"></i>
            </a>
            <a
              href="#"
              className="text-zinc-400 transition ease-in-out duration-300 hover:text-zinc-100"
            >
              <i className="ri-twitter-fill text-xl"></i>
            </a>
            <a
              href="#"
              className="text-zinc-400 transition ease-in-out duration-300 hover:text-zinc-100"
            >
              <i className="ri-instagram-line text-xl"></i>
            </a>
            <a
              href="#"
              className="text-zinc-400 transition ease-in-out duration-300 hover:text-zinc-100"
            >
              <i className="ri-linkedin-box-fill text-xl"></i>
            </a>
          </div>
          {/* Horizontal Line */}
          <hr className="w-full border-t border-zinc-600 mt-10" />
          {/* Footer Links and Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 text-sm">
            <div className="sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <a href="/" className="hover:underline text-gray-400">
                Home
              </a>
              <a href="/news" className="hover:underline text-gray-400">
                News
              </a>
              <a href="/investments" className="hover:underline text-gray-400">
                Uranium Investments
              </a>
              <a href="/essentials" className="hover:underline text-gray-400">
                Uranium Essentials
              </a>
              <a href="/forum" className="hover:underline text-gray-400">
                Forum
              </a>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-0">
              UraniumTracker. All rights reserved 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
