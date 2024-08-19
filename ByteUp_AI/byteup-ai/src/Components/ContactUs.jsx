import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ContactUs = () => {
  const { theme } = useContext(ThemeContext);
  const imageUrl =
    "https://images.unsplash.com/photo-1667238002143-b5e117168e98?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXBhbnklMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    websiteUrl: "",
    projectDescription: "",
    interests: [],
    budget: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validate required fields
    if (!formData.interests.length)
      newErrors.interests = "Please select at least one interest";
    if (!formData.budget) newErrors.budget = "Please select a budget";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit form data to the database
      console.log("Form data submitted:", formData);
      // Replace with your submission logic
      // Example: axios.post('/api/submit', formData);
    }
  };

  return (
    <div
      className={`w-full px-[5.5rem] overflow-x-hidden mt-14 pb-20 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="w-full">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          {/* Left Side Image */}
          <div className="h-fit w-full lg:w-[42%]">
            <img
              src={imageUrl}
              alt="Contact Us"
              className="w-full object-cover"
            />
          </div>

          {/* Right Side Form */}
          <div className="w-full lg:w-[50%]">
            <div>
              <h2
                className={`animate-heading text-[13px] uppercase mb-1 font-Syne leading-4 font-normal ml-1 tracking-[.20em] ${
                  theme === "light"
                    ? "text-gradient-css opacity-90"
                    : "text-white/30"
                }`}
              >
                Get in touch
              </h2>
              <h2 className="text-4xl font-semibold mb-10 font-Syne">
                Let's Be Social
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Form Layout */}
                <div className="flex flex-col gap-6 mt-5">
                  {/* First Row: Full Name and Email */}
                  <div className="flex text-[16px] flex-col lg:flex-row justify-between font-Archivo">
                    <input
                      required
                      type="text"
                      placeholder="Full name *"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }))
                      }
                      className="py-2 bg-transparent border-b border-gray-300 outline-none w-full lg:w-[46%]"
                    />

                    <input
                      required
                      type="email"
                      placeholder="Email address *"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="py-2 bg-transparent border-b border-gray-300 outline-none w-full lg:w-[46%]"
                    />
                  </div>

                  {/* Second Row: Company Name and Phone Number */}
                  <div className="flex flex-col lg:flex-row justify-between font-Archivo">
                    <input
                      type="text"
                      placeholder="Company name"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          companyName: e.target.value,
                        }))
                      }
                      className="py-2 bg-transparent border-b border-gray-300 outline-none w-full lg:w-[46%]"
                    />
                    <input
                      type="text"
                      placeholder="Phone number"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phoneNumber: e.target.value,
                        }))
                      }
                      className="py-2 bg-transparent border-b border-gray-300 outline-none w-full lg:w-[46%]"
                    />
                  </div>

                  {/* Third Row: Website URL and Tell Us About Your Project */}
                  <div className="flex flex-col lg:flex-row justify-between font-Archivo">
                    <input
                      type="text"
                      placeholder="Website URL"
                      value={formData.websiteUrl}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          websiteUrl: e.target.value,
                        }))
                      }
                      className="py-2 bg-transparent border-b border-gray-300 outline-none w-full"
                    />
                  </div>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your project"
                    value={formData.projectDescription}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        projectDescription: e.target.value,
                      }))
                    }
                    className="py-2 bg-transparent border-b border-gray-300 outline-none w-full"
                  ></textarea>

                  {/* Selection Options */}
                  <div className="flex flex-col gap-4 font-Archivo mt-4">
                    {/* I am interested in section */}
                    <div className="flex flex-col mb-4">
                      <label className="block text-gray-500 text-black/40 font-normal mb-2 font-Archivo">
                        I am interested in...
                      </label>
                      <div className="flex flex-wrap gap-2 font-Archivo mt-1">
                        {[
                          "Generative AI",
                          "Web Scraping",
                          "Automation",
                          "Python API Development",
                          "SaaS Development",
                          "Other",
                        ].map((interest) => (
                          <button
                            key={interest}
                            type="button"
                            value={interest}
                            onClick={() => {
                              setFormData((prev) => {
                                const interests = prev.interests.includes(
                                  interest
                                )
                                  ? prev.interests.filter(
                                      (item) => item !== interest
                                    )
                                  : [...prev.interests, interest];
                                return { ...prev, interests };
                              });
                            }}
                            className={`border ${
                              theme === "light"
                                ? "border-gray-300 text-zinc-500"
                                : "border-white/30 text-white/35 font-normal"
                            } text-[14px] px-4 py-1 cursor-pointer transition-all duration-300 ease-in-out ${
                              formData.interests.includes(interest)
                                ? "bg-gradient-to-r from-[#a270c9] to-[#637eb2] text-white"
                                : "hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white"
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                      {errors.interests && (
                        <p className="text-red-500 text-[12px] mt-1">
                          {errors.interests}
                        </p>
                      )}
                    </div>

                    {/* Budget section */}
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-black/40 font-normal mb-2 font-Archivo">
                        Select budget (USD)
                      </label>
                      <div className="flex flex-wrap gap-2 font-Archivo">
                        {[
                          "5k-10k",
                          "10k-20k",
                          "20k-30k",
                          "30k-50k",
                          "50k-100k",
                          ">100k",
                        ].map((budgetOption) => (
                          <button
                            key={budgetOption}
                            type="button"
                            value={budgetOption}
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                budget: budgetOption,
                              }))
                            }
                            className={`border ${
                              theme === "light"
                                ? "border-gray-300 text-zinc-500"
                                : "border-white/30 text-white/35 font-normal"
                            } text-[14px] px-4 py-1 cursor-pointer transition-all duration-300 ease-in-out ${
                              formData.budget === budgetOption
                                ? "bg-gradient-to-r from-[#a270c9] to-[#637eb2] text-white"
                                : "hover:bg-gradient-to-r hover:from-[#a270c9] hover:to-[#637eb2] hover:text-white"
                            }`}
                          >
                            {budgetOption}
                          </button>
                        ))}
                      </div>
                      {errors.budget && (
                        <p className="text-red-500 text-[12px] mt-1">
                          {errors.budget}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-6 bg-gradient-to-r from-purple to-sky text-white px-6 py-3 uppercase tracking-[0.05rem] transition-all duration-300 ease-in-out hover:opacity-80"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
