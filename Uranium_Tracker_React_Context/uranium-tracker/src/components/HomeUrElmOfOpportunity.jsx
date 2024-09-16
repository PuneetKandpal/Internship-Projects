import { PiNuclearPlantFill } from "react-icons/pi";
import { AiFillStop } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import { IoMdNuclear } from "react-icons/io";
import { TbBulbFilled } from "react-icons/tb";

const Card = ({ icon, title, description, width, height }) => {
  return (
    <div className="text-center p-3 px-5 w-full lg:w-1/3 mb-3 lg:mb-2 card-container group">
      {/* Render the icon with proper size and color */}
      <div className="flex justify-center py-2">
        <div
          className="group-hover:scale-110 transition-all duration-300"
          style={{ width: width, height: height, color: "#57fec7" }}
        >
          {icon} {/* The icon is passed as a prop and displayed here */}
        </div>
      </div>
      <h1 className="text-white text-[17px] lg:text-[19px] leading-5 capitalize font-medium frank mt-3">
        {title}
      </h1>
      <p className="mt-3 text-[14.5px] text-white/50 font-light">
        {description}
      </p>
    </div>
  );
};

const UraniumElementOfOpp = () => {
  const cards = [
    {
      title: "Critical Role in Clean Energy",
      description:
        "Uranium fuels nuclear power, which is currently the most scalable, zero-emission energy source that can meet global energy demands. With the world’s focus shifting toward cleaner energy, the role of nuclear power is more important than ever.",
      icon: <PiNuclearPlantFill size={50} color="#57fec7" />, // Using the icon directly with size and color
      width: "60px",
      height: "60px",
    },

    {
      title: "Supply Constraints",
      description:
        "A lack of investment in uranium mining has resulted in an insufficient supply to meet the rapidly growing demand. As global energy needs rise, this imbalance between supply and demand is becoming a pressing issue in the energy sector.",
      icon: <AiFillStop size={45} color="#57fec7" />, // Using the icon directly with size and color
      width: "50px",
      height: "50px",
    },
    {
      title: "Growing Global Demand",
      description:
        "As nations strive for carbon neutrality, nuclear power is attracting renewed interest. Governments globally are recognizing nuclear energy as a key part of their clean energy plans, leading to substantial growth in uranium demand.",
      icon: <FaChartLine size={45} color="#57fec7" />, // Using the icon directly with size and color
      width: "60px",
      height: "60px",
    },

    {
      title: "Resurgence of Nuclear Power",
      description:
        "We are witnessing a global nuclear renaissance, with numerous new reactors being constructed. This trend signals a strong demand for uranium in the future, as more countries turn to nuclear power to ensure energy security and reduce emissions.",
      icon: <IoMdNuclear size={45} color="#57fec7" />, // Using the icon directly with size and color
      width: "60px",
      height: "60px",
    },

    {
      title: "Innovations & New Applications",
      description:
        "Innovations such as small modular reactors (SMRs) are transforming the nuclear industry. These advancements are not only expanding the use of uranium in energy generation but also in areas like medicine, research, and military applications.",
      icon: <TbBulbFilled size={50} color="#57fec7" />, // Using the icon directly with size and color
      width: "60px",
      height: "60px",
    },
  ];

  return (
    <div className="pt-36 pb-28 px-6 lg:px-20 text-center overflow-x-hidden">
      <h2 className="w-full frank leading-[45px] sm:leading-[57px] text-[2rem] sm:text-[2.7rem] text-white font-medium mb-16 uranium-heading">
        Uranium - The Element Of Opportunity
      </h2>

      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon} // Pass the icon component here
            title={card.title}
            description={card.description}
            width={card.width}
            height={card.height}
          />
        ))}
      </div>
    </div>
  );
};

export default UraniumElementOfOpp;
