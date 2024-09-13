import { useState } from "react";

const AccordionItemRight = ({ title, content }) => {
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

const AccordionRight = () => {
  return (
    <div className="accordion-container">
      <AccordionItemRight
        title="Boiling Water Reactor (BWR)"
        content="A type of light water reactor where water is boiled directly in the reactor core to generate steam."
      />
      <AccordionItemRight
        title="Breed"
        content="The formation of fissile material from fertile material, usually through neutron capture followed by radioactive decay."
      />
      <AccordionItemRight
        title="Breeder Reactor"
        content="A reactor that produces more fissile material than it consumes, often using depleted uranium as a blanket around the core."
      />
      <AccordionItemRight
        title="Burn"
        content="The process of undergoing fission or becoming denatured in the reactor core. Burnable absorber, burnable poison: A neutron absorber that is included in the fuel and progressively consumed to compensate for the loss of reactivity as the fuel is burned. Common materials include gadolinium and erbium."
      />
      <AccordionItemRight
        title="Burnup"
        content="A measure of energy produced by nuclear fuel relative to its mass, typically expressed in gigawatt days per tonne (GWd/t)."
      />
      <AccordionItemRight
        title="Calandria"
        content="The cylindrical reactor vessel in a PHWR that contains heavy water moderator and is penetrated by calandria tubes holding the fuel and coolant. ."
      />
      <AccordionItemRight
        title="CANDU"
        content="A type of heavy water reactor (PHWR) developed in Canada, moderated and cooled by heavy water. Centrifuge: A device that spins at high speeds to separate gas components of different masses, such as uranium hexafluoride."
      />
      <AccordionItemRight
        title="Chain Reaction"
        content="A self-sustaining series of fission reactions where neutrons from fission cause additional fissions."
      />
    </div>
  );
};

export default AccordionRight;
