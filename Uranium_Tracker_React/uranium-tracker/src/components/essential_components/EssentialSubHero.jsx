import AnimatedAtom from "./AnimatedAtom";

const EssentialSubHero = ({ heading, subheading }) => {
  return (
    <div className="hero px-6 md:px-20 py-10 md:pt-20 flex flex-col md:flex-row justify-between items-center mt-10">
      <div className="w-full md:w-[57%]">
        <h1 className="frank text-2xl md:text-5xl font-bold text-lime2">
          {heading}
        </h1>
        <p className="mt-5 font-normal text-white/60 text-[16px] md:text-[17px]">
          {subheading}
        </p>
      </div>

      <AnimatedAtom />
    </div>
  );
};

export default EssentialSubHero;
