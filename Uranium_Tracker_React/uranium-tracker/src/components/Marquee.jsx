import Marquee from "react-fast-marquee";

const StockMarquee = () => {
  return (
    <div className="my-0 py-14 sm:py-20 pb-20 sm:pb-28 lato w-full h-[35px] overflow-hidden">
      <Marquee
        pauseOnHover={true} // This will stop the marquee when hovered
        speed={80} // Adjust the speed as needed
        gradient={true} // Disable gradient to avoid white space on the edges
        gradientColor={"#161616"}
        gradientWidth={300}
      >
        <span className="font-semibold">URA </span>$25.73
        <span className="text-green-600 font-semibold"> ▲0.35%</span>
        <span className="ml-12 font-semibold">CCJ </span>$41.41
        <span className="text-green-600 font-semibold"> ▲0.07%</span>
        <span className="ml-12 font-semibold">DNN </span>$1.57
        <span className="text-green-600 font-semibold"> ▲0.64%</span>
        <span className="ml-12 font-semibold">UUUU </span>$4.86
        <span className="text-green-600 font-semibold"> ▲2.97%</span>
        <span className="ml-12 font-semibold">UEC </span>$5.04
        <span className="text-green-600 font-semibold"> ▲0.40%</span>
        <span className="ml-12 font-semibold">NXE </span>$5.99
        <span className="text-red-600 font-semibold"> ▼0.17%</span>
        <span className="ml-12 font-semibold">UROY </span>$2.10
        <span className="text-red-600 font-semibold"> ▼1.87%</span>
        <span className="ml-12 font-semibold">U-UN.TO </span>$23.57
        <span className="text-green-600 font-semibold"> ▲1.20%</span>
        {/* Add more stock items as needed */}
      </Marquee>
    </div>
  );
};

export default StockMarquee;
