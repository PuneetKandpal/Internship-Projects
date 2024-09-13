import React from "react";

const ForumRightTags = () => {
  // This array can be fetched from an API in the future
  const tags = [
    "Uranium",
    "NuclearEnergy",
    "Radioactivity",
    "Fission",
    "NuclearPhysics",
    "Isotopes",
    "Uranium235",
  ];

  return (
    <div className="flex gap-2 ml-[2px] flex-wrap mt-5 md:mt-4">
      {tags.map((tag, index) => (
        <a
          key={index}
          href="#"
          className="bg-zinc-800/50 text-[13.3px] tracking-[0.3px] lato text-white/50 hover:text-black1 hover:bg-lime2 transition-all duration-200 px-3 rounded-sm py-1 font-normal"
        >
          {tag}
        </a>
      ))}
    </div>
  );
};

export default ForumRightTags;
