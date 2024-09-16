import { useEffect } from "react";
import { gsap } from "gsap";

const E1UraniumProp = () => {
  useEffect(() => {
    // GSAP animations for the section
    gsap.from(".heading-uranium", {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".cards-uranium ", {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="px-6 md:px-20 py-10 md:py-20 mt-10 overflow-hidden sec-1">
      {/* Heading */}
      <h2 className="ml-0 flex items-center text-[1rem] md:text-[1.4rem] frank mb-4 md:mb-9 font-semibold text-white capitalize heading-uranium">
        <i className="ri-menu-4-fill text-lime2 font-bold text-xl mr-3"></i>
        Uranium Properties
      </h2>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-8 pb-10 mb-10 cards-uranium">
        {/* Physical Properties Card */}
        <div className="bg-zinc-800/30 rounded-md p-8 transform transition duration-500 hover:scale-105 flex-1 card card-physical">
          <div className="text-lime2 mb-4">
            <i className="ri-weight-line text-4xl"></i>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-3 frank">
            Physical Properties
          </h2>
          <p className="text-white/60 leading-relaxed text-[16px] font-light">
            Uranium is a silvery-grey metal that has a density of 19.1 g/cm³,
            which is about 1.7 times denser than lead. Its malleability allows
            it to be shaped with ease, though in natural settings, it tends to
            oxidize quickly. Due to its high density, uranium has applications
            in both civilian and military sectors, particularly in
            armor-piercing shells.
          </p>
        </div>

        {/* Chemical Properties Card */}
        <div className="bg-zinc-800/30 rounded-md p-9 transform transition duration-500 hover:scale-105 flex-1 card card-chemical">
          <div className="text-lime2 mb-4">
            <i className="ri-flask-line text-4xl"></i>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-3 frank">
            Chemical Properties
          </h2>
          <p className="text-white/60 leading-relaxed text-[16px] font-light">
            Uranium is chemically reactive and forms oxides when exposed to
            oxygen. Uranium dioxide (UO2) is the most stable oxide and is a key
            component in nuclear fuel. Another oxide, triuranium octoxide
            (U3O8), is used for transportation and storage because of its
            stability.
          </p>
        </div>

        {/* Isotopes Card */}
        <div className="bg-zinc-800/30 rounded-md p-9 transform transition duration-500 hover:scale-105 flex-1 card card-isotopes">
          <div className="text-lime2 mb-4">
            <i className="ri-reactjs-line text-4xl"></i>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-3 frank">
            Isotopes
          </h2>
          <p className="text-white/60 leading-relaxed text-[16px] font-light">
            Uranium-238 (U-238) and Uranium-235 (U-235) are the most abundant.
            U-238 accounts for about 99.3% of natural uranium, while U-235 makes
            up approximately 0.7%. U-235 is the isotope that is fissile, meaning
            it can sustain a nuclear chain reaction. This makes it critical for
            nuclear power generation and weapons.
          </p>
        </div>
      </div>
    </div>
  );
};

export default E1UraniumProp;
