const InvestmentsTopPerformers = ({ stocksData }) => {
  return (
    <div id="performers" className="bg-zinc-800/30 p-8 rounded-md mb-7">
      <h2 className="frank text-[1rem] md:text-[1.25rem] lg:mb-6 font-semibold inter tracking-tight text-white">
        Top Performers
        <span className="text-base text-gray-600"> (Last 30 days)</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {stocksData?.top_performing_stocks?.length > 0 ? (
          stocksData?.top_performing_stocks?.map(([code, stock]) => (
            <div className="bg-black1 p-4 rounded-sm shadow-sm" key={code}>
              <p className="font-normal text-[14.5px] text-white/50 mb-1">
                {code}
              </p>
              <p className="text-white/90 mb-1 text-[16px]">{stock.name}</p>
              <p
                className={`text-lg ${
                  stock.change_1m >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {stock.change_1m.toFixed(2)}%
              </p>
              {/* <p className="text-white/50 text-sm">
                Volume: {stock.volume.toLocaleString()}
              </p> */}
              {/* <p className="text-white/50 text-sm">
                Market Cap: ${stock.market_cap.toLocaleString()}
              </p> */}
              {/* <p className="text-white/50 text-sm">
                P/E Ratio: {stock.pe_ratio}
              </p> */}
            </div>
          ))
        ) : (
          <p className="text-white/50">No top-performing stocks available.</p>
        )}
      </div>
    </div>
  );
};

export default InvestmentsTopPerformers;
