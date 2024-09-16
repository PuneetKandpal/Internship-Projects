const UraniumTable = ({ stocksData }) => {
  // Helper function to determine the color based on the numeric value
  const getColorClass = (value) => {
    return value < 0 ? "text-red-500" : "text-green-500";
  };

  return (
    <div
      className="w-full lg:w-[100%] mb-10 lg:mb-20 bg-zinc-800/30 p-8 mt-5 rounded-md "
      id="stocks"
    >
      <h2 className="flex items-center text-[1rem] md:text-[1.4rem] frank mb-6  font-medium text-white capitalize">
        Uranium Stocks
      </h2>

      <div id="uranium-compo" className="overflow-x-auto">
        <div className="component-uranium" id="uranium-stocks">
          <table className="w-full uranium-stocks-table min-w-[600px] bg-black1">
            <thead className="bg-bg text-white/30 border-b border-white/10">
              <tr>
                <th className="px-2 py-2 md:px-4 md:py-[30px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Country
                </th>
                <th className="px-2 py-2 md:px-4 md:py-[30px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Symbol
                </th>
                <th className="px-2 py-2 md:px-4 md:py-[30px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Name
                </th>
                <th className="px-2 py-2 md:px-4 md:py-[30px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Current Price
                </th>
                <th className="px-2 py-2 md:px-4 md:py-[30px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Last Price
                </th>
                <th className="px-2 py-2 md:px-4 md:py-[30px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Return (1M)
                </th>
                <th className="px-2 py-2 md:px-4 md:py-[30px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Return (1Y)
                </th>
                <th className="px-2 py-2 md:px-4 md:py-[30px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Volume
                </th>
              </tr>
            </thead>
            <tbody className="bg-bg text-gray-300">
              {stocksData?.stocks?.map((stock, index) => (
                <tr
                  key={index}
                  className="hover:bg-zinc-800/30 border-b border-white/10 text-[13px] text-start"
                >
                  <td className="px-4 py-[25px]"></td>
                  <td className="px-4 py-[25px] font-semibold">
                    {stock.ticker_name}
                  </td>
                  <td className="px-4 py-[25px]">{stock.company_name}</td>
                  <td className="px-4 py-[25px]">
                    {stock.current_price.toFixed(2)}
                  </td>
                  <td className="px-4 py-[25px]">
                    {stock.last_price.toFixed(2)}
                  </td>

                  <td
                    className={`px-4 py-[25px] ${getColorClass(
                      stock.change_1m
                    )}`}
                  >
                    {stock.change_1m.toFixed(2)}%
                  </td>
                  <td
                    className={`px-4 py-[25px] ${getColorClass(
                      stock.change_1y
                    )}`}
                  >
                    {stock.change_1y.toFixed(2)}%
                  </td>
                  <td className="px-4 py-[25px]">{stock.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UraniumTable;
