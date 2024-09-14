import { useDispatch, useSelector } from "react-redux";
import { fetchGlossaryData } from "../../store/slices/apiSlice";
import Loader from "../Loader"; // Import your loader component
import { useEffect, useState } from "react";

// Accordion Item Component
const AccordionItemLeft = ({ title, content }) => {
  // State to track whether the accordion is open
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle click event
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-transparent border-b border-white/10 transition-all duration-200 px-1 pb-[25px] py-2 mt-4">
      {/* Accordion Header */}
      <div
        className="accordion cursor-pointer flex justify-between items-center text-white hover:text-lime2 transition-all duration-200"
        onClick={toggleAccordion}
      >
        <h2 className="text-[18px] inter font-medium">{title}</h2>
        {/* SVG icon (rotates based on isOpen state) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-6 transform transition-transform duration-200 text-white/50 hover:text-white/90 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Accordion Content (hidden/shown based on isOpen state) */}
      <div
        className={`content mt-4 text-white/40 text-[16px] font-light ${
          isOpen ? "" : "hidden"
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

// Accordion Component to map over glossary terms
const AccordionLeft = () => {
  const dispatch = useDispatch();
  const glossaryData = useSelector((state) => state.api.glossary);
  const status = useSelector((state) => state.api.status);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchGlossaryData());
    }

    if (status === "succeeded") {
      setIsLoading(false); // Set loading to false when data is fetched
    }
  }, [status, dispatch]);

  // Show loader if data is still being fetched
  if (isLoading) {
    return <Loader />;
  }

  // Get glossary terms from API data
  const glossaryTerms = glossaryData.glossary_terms || [];

  // Calculate half of the array length
  const halfLength = Math.ceil(glossaryTerms.length / 2);

  return (
    <div className="accordion-container">
      {glossaryTerms.slice(0, halfLength).map((termData, index) => (
        <AccordionItemLeft
          key={index}
          title={termData.term}
          content={termData.definition}
        />
      ))}
    </div>
  );
};

export default AccordionLeft;
