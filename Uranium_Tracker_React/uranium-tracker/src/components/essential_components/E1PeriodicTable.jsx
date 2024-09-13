
const E1PeriodicTable = () => {
  return (
    <div className="px-6 md:px-20 py-10 md:pb-20 mt-[-5rem] hidden md:block">
      <section className="periodic-table-container flex flex-col items-center">
        {/* Uranium Info */}
        <div id="uranium-all-info" className="flex flex-col items-center mb-8">
          <div className="text-xs text-center uranium-info">
            <h2 className="text-xl font-bold">92</h2>
            <h2 className="text-black font-extrabold text-3xl">U</h2>
            <p className="text-xl font-base">Uranium</p>
            <p className="text-xl font-base">238.03</p>
          </div>
          <div className="text-lg">
            <p className="mt-2 text-white/80">
              Weight of 238.03 = One of the heaviest occurring elements
            </p>
          </div>
        </div>

        {/* Centering the whole periodic table */}
        <div className="flex justify-center w-full">
          <div id="periodic-table-wrapper" className="grid gap-0.5">
            {/* Periodic Table Grid */}
            <div id="periodic-table" className="grid grid-cols-18 gap-0.5">
              {/* Uranium Highlight */}
              <div id="uranium-highlight" className="element"></div>
            </div>

            {/* Lanthanide and Actinide Rows */}
            <div className="grid grid-cols-18 gap-0.5 max-w-7xl mt-5">
              <div className="col-span-3"></div>
              <div
                id="lanthanide-row"
                className="col-span-15 grid grid-cols-15 gap-0.5"
              ></div>
            </div>
            <div className="grid grid-cols-18 gap-0.5 max-w-7xl mt-0.5">
              <div className="col-span-3"></div>
              <div
                id="actinide-row"
                className="col-span-15 grid grid-cols-15 gap-0.5"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default E1PeriodicTable;
