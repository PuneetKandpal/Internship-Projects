import { useState } from "react";

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

const AccordionLeft = () => {
  return (
    <div className="accordion-container">
      <AccordionItemLeft
        title="Actinide"
        content="Elements with atomic numbers from 89 (actinium) to 103. Typically refers to those beyond uranium (93 and up, known as transuranics). Actinides are radioactive, have long half-lives, and are significant in nuclear fission waste, such as used fuel. They are fissionable in fast reactors. Minor actinides include americium, curium, and neptunium."
      />
      <AccordionItemLeft
        title="Activation Product"
        content="A radioactive isotope formed when an element, such as steel in a reactor core, is bombarded by neutrons."
      />
      <AccordionItemLeft
        title="Activity"
        content="The rate of disintegration per unit time within a radioactive source, measured in becquerels. ALARA (As Low As Reasonably Achievable): A principle of radiation protection that takes into account economic and social factors to minimize radiation exposure."
      />
      <AccordionItemLeft
        title="Alpha Particle"
        content="A positively charged particle emitted from an atom's nucleus during radioactive decay, consisting of 2 protons and 2 neutrons."
      />
      <AccordionItemLeft
        title="Atom"
        content="The smallest particle of an element that retains its chemical properties. Atoms consist of a nucleus of protons and neutrons, surrounded by electrons."
      />
      <AccordionItemLeft
        title="Background Radiation"
        content="Ionizing radiation from natural sources that everyone is exposed to, including cosmic radiation and radon from the Earth's crust."
      />
      <AccordionItemLeft
        title="Barn"
        content="A unit of measure for the cross-sectional area of a nucleus, representing the probability of interaction with particles such as neutrons."
      />
      <AccordionItemLeft
        title="Base Load"
        content="The continuous, minimum level of demand on an electrical supply system over a 24-hour period. Becquerel (Bq): The unit of intrinsic radioactivity, where one Bq equals one disintegration per second. Beta particle: A particle emitted from an atom during radioactive decay, which can be either an electron (negative charge) or a positron."
      />

      <AccordionItemLeft
        title="Biological Shield"
        content="Material, often thick concrete, used to protect humans from radiation by absorbing neutrons and gamma rays."
      />
    </div>
  );
};

export default AccordionLeft;
