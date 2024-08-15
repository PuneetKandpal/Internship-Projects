const App = () => {
  return (
    <div className="font-Syne text-4xl">
      <div className="bg-black text-white py-14 px-20">
        Dark Theme
        <div className="flex justify-between">
          <div className="w-[30%] h-40 mt-10 rounded-sm bg-gradient-to-r from-purple to-sky">
            <h1 className="text-white p-5 text-2xl font-Heebo">
              {" "}
              This is dummy text
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white text-black py-14 px-20">
        Light Theme
        <div className="flex justify-between">
          <div className="w-[30%] h-40 mt-10 rounded-sm bg-gradient-to-r from-purple to-sky">
            <h1 className="text-white p-5 text-2xl font-Heebo">
              {" "}
              This is dummy text
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
