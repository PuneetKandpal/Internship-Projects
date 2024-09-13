

const InvestmentsTopPerformers = () => {
  return (
    <div id="performers" className="bg-zinc-800/30 p-8 rounded-md mb-7">
      <h2 className="frank text-[1rem] md:text-[1.25rem] lg:mb-6 font-semibold inter tracking-tight text-white">
        Top Performers
        <span className="text-base text-gray-600"> (Last 30 days)</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {[
          { code: "CVVUF", name: "CanAlaska Uranium Ltd.", change: "+11.11%" },
          { code: "YCA.L", name: "Yellow Cake plc", change: "+8.04%" },
          { code: "EBR.AX", name: "EBR Systems, Inc.", change: "+5.56%" },
          { code: "U-UN.TO", name: "Sprott Inc.", change: "+3.27%" },
          { code: "UROY", name: "Uranium Royalty Corp.", change: "+3.11%" },
        ].map((stock) => (
          <div className="bg-black1 p-4 rounded-sm shadow-sm" key={stock.code}>
            <p className="font-normal text-[14.5px] text-white/50 mb-1">
              {stock.code}
            </p>
            <p className="text-white/90 mb-1 text-[16px]">{stock.name}</p>
            <p className="text-lg text-green-500">{stock.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentsTopPerformers;
