import { useEffect, useState } from "react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "../store/slices/apiSlice";
import Loader from "./Loader"; // Import your loader component

const UraniumTableGainers = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.api.home);
  const status = useSelector((state) => state.api.status);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchHomeData());
    }

    if (status === "succeeded") {
      setIsLoading(false);
    }

    // GSAP animation
    gsap.from("#uranium-table-section", {
      scrollTrigger: {
        trigger: "#uranium-table-section",
        start: "top 80%",
        end: "bottom 20%",
      },
      opacity: 0,
      x: -50,
      duration: 1.5,
      ease: "power2.out",
    });
  }, [status, dispatch, isLoading]);

  // Helper function to determine the color based on the value
  const getColorClass = (value) => {
    return value < 0 ? "text-red-500" : "text-green-500";
  };

  // Show the loader while loading is true
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full lg:w-[60%] mb-10 lg:mb-0" id="uranium-table-section">
      <h2 className="flex items-center text-[1rem] md:text-[1.4rem] frank mb-6 lg:mb-12 font-medium text-white capitalize">
        <i className="ri-menu-4-fill text-lime1 text-bold text-xl mr-2"></i>
        Uranium top gainers today
      </h2>

      <div id="uranium-compo" className="overflow-x-auto">
        <div className="component-uranium" id="uranium-stocks">
          <table className="w-full uranium-stocks-table min-w-[600px]">
            <thead className="bg-bg text-white/30 border-b border-white/10">
              <tr>
                <th className="px-2 py-2 md:px-4 md:py-[16px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Country
                </th>
                <th className="px-2 py-2 md:px-5 md:py-[16px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Symbol
                </th>
                <th className="px-2 py-2 md:px-5 md:py-[16px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Name
                </th>
                <th className="px-2 py-2 md:px-4 md:py-[16px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Current Price
                </th>
                <th className="px-2 py-2 md:px-4 md:py-[16px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Last Price
                </th>
                <th className="px-2 py-2 md:px-4 md:py-[16px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Return (1M)
                </th>
                <th className="px-2 py-2 md:px-4 md:py-[16px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Return (1Y)
                </th>
                <th className="px-2 py-2 md:px-4 md:py-[16px] text-left text-[10px] md:text-[11px] font-medium uppercase tracking-wider">
                  Volume
                </th>
              </tr>
            </thead>
            <tbody className="bg-bg text-gray-300">
              {homeData.top_gainers.map(([symbol, data], index) => (
                <tr
                  key={index}
                  className="hover:bg-zinc-800/30 py-2 border-b border-white/10 text-[13px] text-start"
                >
                  <td className="px-4 py-[16px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 32 32"
                    >
                      <rect
                        x="1"
                        y="4"
                        width="30"
                        height="24"
                        rx="4"
                        ry="4"
                        fill="#071b65"
                      ></rect>
                      <path
                        d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
                        fill="#b92932"
                      ></path>
                      <path
                        d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
                        fill="#b92932"
                      ></path>
                      <path
                        d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
                        fill="#fff"
                      ></path>
                      <rect
                        x="13"
                        y="4"
                        width="6"
                        height="24"
                        fill="#fff"
                      ></rect>
                      <rect
                        x="1"
                        y="13"
                        width="30"
                        height="6"
                        fill="#fff"
                      ></rect>
                      <rect
                        x="14"
                        y="4"
                        width="4"
                        height="24"
                        fill="#b92932"
                      ></rect>
                      <rect
                        x="14"
                        y="1"
                        width="4"
                        height="30"
                        transform="translate(32) rotate(90)"
                        fill="#b92932"
                      ></rect>
                      <path
                        d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
                        fill="#b92932"
                      ></path>
                      <path
                        d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
                        fill="#b92932"
                      ></path>
                      <path
                        d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                        opacity=".15"
                      ></path>
                      <path
                        d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                        fill="#fff"
                        opacity=".2"
                      ></path>
                    </svg>
                  </td>
                  <td className="px-5 py-[16px] font-semibold">{symbol}</td>
                  <td className="px-5 py-[16px]  text-[14px]">{data.name}</td>
                  <td className="px-4 py-[16px]">
                    ${data.current_price.toFixed(2)}
                  </td>
                  <td className="px-4 py-[16px]">
                    ${data.last_price.toFixed(2)}
                  </td>
                  <td
                    className={`px-4 py-[16px] ${getColorClass(
                      data.change_1m
                    )}`}
                  >
                    {data.change_1m.toFixed(2)}%
                  </td>
                  <td
                    className={`px-4 py-[16px] ${getColorClass(
                      data.change_1y
                    )}`}
                  >
                    {data.change_1y.toFixed(2)}%
                  </td>
                  <td className="px-4 py-[16px]">{data.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UraniumTableGainers;
