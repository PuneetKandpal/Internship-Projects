const E1EarlyUrUses = () => {
  return (
    <div>
      <div className="px-6 md:px-20 py-10 md:py-20 mt-3">
        <div className="flex flex-col md:flex-row gap-8">
          {/* <!-- Image Section (Shifted to Left with Space on the Right) --> */}
          <div className="relative w-full md:w-auto max-w-md md:mr-[11rem] mx-auto md:mx-0">
            {/* <!-- Adjust the mr-[14rem] value as needed --> */}
            <img
              src="https://rinconeducativo.org/wp-content/uploads/2024/01/Strassmann_Fritz_Laboratorio.png"
              alt="Laboratory with Uranium Experiment"
              className="w-full h-auto md:w-[630px] md:h-[450px] shadow-lg md:ml-40 mx-auto"
            />
            {/* <!-- Absolute Positioned Text Div --> */}
            <div className="absolute top-4 left-4 text-white font-bold text-[18px] frank">
              <p className="text-4xl md:text-6xl font-extrabold tracking-wide frank shadow-lg text-gray-300 mb-2">
                EARLY
              </p>
              <p className="text-4xl md:text-6xl font-extrabold tracking-wide frank shadow-lg mb-2 text-lime2">
                URANIUM
              </p>
              <p className="text-4xl md:text-6xl font-extrabold tracking-wide frank shadow-lg text-gray-300 mb-2">
                USES
              </p>
            </div>
          </div>

          {/* <!-- Descriptive Text Section (Narrower Width) --> */}
          <div className="w-full md:w-[85%] text-white">
            <p className="text-white/50 leading-6 text-[17px] lato mb-6">
              In the 19th century, <br />
              Uranium was primarily used as a coloring agent in ceramics and
              glass, giving them a characteristic
              <span className="text-yellow-400"> YELLOW </span> or
              <span className="text-green-400"> GREEN hue</span>.
            </p>
            <p className="text-white/50 leading-6 text-[17px] lato mb-6">
              Its radioactive properties were not understood at this time, and
              it was considered a relatively obscure element with limited
              industrial use.
            </p>
            <p className="text-white/50 leading-6 text-[17px] lato">
              By the late 19th and early 20th centuries, uranium began to be
              used in early radiological studies and some medical treatments,
              despite its hazardous nature being only partially understood. Its
              significance grew exponentially with the discovery of nuclear
              fission in the 1930s, which paved the way for its use in nuclear
              reactors and weapons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default E1EarlyUrUses;
