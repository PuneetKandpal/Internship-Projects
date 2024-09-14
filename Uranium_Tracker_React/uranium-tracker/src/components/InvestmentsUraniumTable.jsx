import { useDispatch, useSelector } from "react-redux";
import { fetchStocksData } from "../store/slices/apiSlice";
import Loader from "./Loader"; // Import your loader component
import { useEffect, useState } from "react";
const UraniumTable = () => {
  const dispatch = useDispatch();
  const stocksData = useSelector((state) => state.api.stocks);
  // console.log(stocksData);
  const status = useSelector((state) => state.api.status);
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading state

  const tableData = [
    {
      symbol: "URA",
      name: "Global X Uranium ETF",
      currentPrice: "$25.47",
      lastPrice: "$25.73",
      return1M: "-7.28%",
      returnDaily: "16.28%",
      volumeDaily: "298,670",
    },
  ];

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStocksData());
    }

    if (status === "succeeded") {
      setIsLoading(false); // Set loading to false when data is fetched
    }
  }, [status, dispatch, isLoading]);

  // Helper function to determine the color based on the value
  const getColorClass = (value) => {
    const numberValue = parseFloat(value.replace("%", ""));
    return numberValue < 0 ? "text-red-500" : "text-green-500";
  };

  // Show the loader while loading is true
  if (isLoading) {
    return <Loader />;
  }

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
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-zinc-800/30 border-b border-white/10 text-[13px] text-start"
                >
                  <td className="px-4 py-[25px]">{row.country}</td>
                  <td className="px-4 py-[25px] font-semibold">{row.symbol}</td>
                  <td className="px-4 py-[25px]">{row.name}</td>
                  <td className="px-4 py-[25px]">{row.currentPrice}</td>
                  <td className="px-4 py-[25px]">{row.lastPrice}</td>
                  <td
                    className={`px-4 py-[25px] ${getColorClass(row.return1M)}`}
                  >
                    {row.return1M}
                  </td>
                  <td
                    className={`px-4 py-[25px] ${getColorClass(
                      row.returnDaily
                    )}`}
                  >
                    {row.returnDaily}
                  </td>
                  <td className="px-4 py-[25px]">{row.volumeDaily}</td>
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
