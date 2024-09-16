// import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const StockMarquee = ({ homeData }) => {
  return (
    <div className="my-0 py-14 sm:py-20 pb-20 sm:pb-28 lato w-full h-[35px] overflow-hidden">
      <Marquee
        pauseOnHover={true} // This will stop the marquee when hovered
        speed={90} // Adjust the speed as needed
        gradient={true} // Enable gradient
        gradientColor={"#161616"}
        gradientWidth={300}
      >
        {homeData?.stocks?.map((stock, index) => {
          const { ticker, current_price, change_1m } = stock;
          const changeColor =
            change_1m >= 0 ? "text-green-600" : "text-red-600"; // Determine color based on change

          return (
            <span key={index} className="ml-12 font-semibold">
              {ticker} ${current_price.toFixed(2)}
              <span className={`${changeColor} font-semibold`}>
                {" "}
                {change_1m >= 0
                  ? `▲${(change_1m * 1).toFixed(2)}%`
                  : `▼${Math.abs(change_1m * 1).toFixed(2)}%`}
              </span>
            </span>
          );
        })}
      </Marquee>
    </div>
  );
};

export default StockMarquee;
