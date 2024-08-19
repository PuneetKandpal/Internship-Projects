import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ContactUs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`min-h-screen overflow-y-hidden ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-12 ">
        <div className="bg-gray-100 p-8 rounded-lg max-w-5xl mx-auto">
          <h3 className="text-lg font-medium mb-2 font-Syne">GET IN TOUCH</h3>
          <hr className="mb-4 border-gray-900 w-[8rem]" />
          <h2 className="text-3xl font-bold mb-6 font-Syne">
            LET'S BE SOCIAL.
          </h2>
          <form>
            {/* Form Layout */}
            <div className="flex flex-col gap-8">
              {/* First Row: Full Name and Email */}
              <div className="flex flex-col lg:flex-row justify-between font-Syne">
                <input
                  type="text"
                  placeholder="Full name*"
                  className="p-3 bg-transparent border-b border-gray-300 outline-none w-full lg:w-[45%]"
                />
                <input
                  type="email"
                  placeholder="Email address*"
                  className="p-3 bg-transparent border-b border-gray-300 outline-none w-full lg:w-[45%]"
                />
              </div>

              {/* Second Row: Company Name and Phone Number */}
              <div className="flex flex-col lg:flex-row justify-between font-Syne">
                <input
                  type="text"
                  placeholder="Company name"
                  className="p-3 bg-transparent border-b border-gray-300 outline-none w-full lg:w-[45%]"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="p-3 bg-transparent border-b border-gray-300 outline-none w-full lg:w-[45%]"
                />
              </div>

              {/* Third Row: Website URL and Tell Us About Your Project */}
              <div className="flex flex-col lg:flex-row justify-between font-Syne">
                <input
                  type="text"
                  placeholder="Website URL"
                  className="p-3 bg-transparent border-b border-gray-300 outline-none w-full lg:w-[45%]"
                />
                <textarea
                  placeholder="Tell us about your project"
                  className="p-3 bg-transparent border-b border-gray-300 outline-none w-full lg:w-[45%] h-24"
                ></textarea>
              </div>

              {/* Selection Options */}
              <div className="flex flex-col gap-4 font-Syne">
                {/* I am interested in section */}
                <div className="flex flex-col mb-4">
                  <label className="block font-medium mb-2 font-Syne">
                    I am interested in...
                  </label>
                  <div className="flex flex-wrap gap-2 font-Syne">
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white"
                    >
                      Generative AI
                    </button>
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white"
                    >
                      Web Scraping
                    </button>
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white"
                    >
                      Automation
                    </button>
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white"
                    >
                      Python API Development
                    </button>
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white"
                    >
                      SaaS Development
                    </button>
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white"
                    >
                      Other
                    </button>
                  </div>
                </div>

                {/* Budget section */}
                <div className="flex flex-col">
                  <label className="block font-medium mb-2 font-Syne">
                    Select budget (USD)
                  </label>
                  <div className="flex flex-wrap gap-2 font-Syne">
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white"
                    >
                      5k-10k
                    </button>
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white"
                    >
                      10k-20k
                    </button>
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white"
                    >
                      20k-30k
                    </button>
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white"
                    >
                      30k-50k
                    </button>
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-500 px-4  rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white"
                    >
                      50k-100k
                    </button>
                    <button
                      type="button"
                      className="border border-gray-300 text-gray-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white"
                    >
                      &gt;100k
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Width Submit Button */}
            <div className="mt-8 flex justify-center ">
              <button
                type="submit"
                className="w-full px-6 py-3 border border-[#a270c9] text-black  transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white bg-gray-100"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
