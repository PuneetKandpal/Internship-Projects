import cycleImg from "../../assets/cycle.svg";

const E1NuclearFuelCycle = () => {
  return (
    <div>
      <div className="px-6 md:px-20 py-10 md:py-20 mt-14">
        <h2 className="flex justify-center items-center text-[1rem] md:text-[2.5rem] frank mb-2 lg:mb-3 font-semibold text-white capitalize">
          Nuclear Fuel Cycle
        </h2>
        <div className="w-full h-fit md:h-[80vh] lg:h-[100vh] py-4 mt-2">
          <img className="w-full h-full object-contain" src={cycleImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default E1NuclearFuelCycle;
