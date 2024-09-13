import React from "react";

const members = [
  {
    name: "Ethan Blake",
    username: "@ethanblake",
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_640.jpg",
    alt: "Member 1",
  },
  {
    name: "Michelle Jones",
    username: "@michellejones",
    imgSrc:
      "https://cdn.pixabay.com/photo/2022/10/24/17/22/girl-7543957_640.jpg",
    alt: "Member 2",
  },
  {
    name: "Liam Johnson",
    username: "@liamjohnson",
    imgSrc:
      "https://cdn.pixabay.com/photo/2024/08/13/08/52/ai-generated-8965482_640.jpg",
    alt: "Member 3",
  },
  {
    name: "Ethan Smith",
    username: "@ethansmith",
    imgSrc:
      "https://cdn.pixabay.com/photo/2024/06/22/22/56/man-8847069_640.jpg",
    alt: "Member 4",
  },
];

const tags = [
  { name: "Uranium", href: "#" },
  { name: "NuclearEnergy", href: "#" },
  { name: "Radioactivity", href: "#" },
  { name: "Fission", href: "#" },
  { name: "NuclearPhysics", href: "#" },
  { name: "Isotopes", href: "#" },
  { name: "Uranium235", href: "#" },
];

const CategoryMemberTagSection = () => {
  return (
    <div>
      {/* Member Section */}
      <div className="bg-zinc-800/30 py-6 px-8 rounded-md shadow-sm md:mt-5">
        <h2 className="text-lg font-semibold text-white mb-8 frank">Members</h2>
        <ul className="space-y-6">
          {members.map((member, index) => (
            <li key={index} className="flex items-center space-x-4 mt-4">
              <img
                src={member.imgSrc}
                alt={member.alt}
                className="w-11 h-11 rounded-full order-white object-cover"
              />
              <div>
                <p className="text-sm font-medium frank tracking-wide text-white/90">
                  {member.name}
                </p>
                <p className="text-[13px] text-white/40">{member.username}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags Container */}
      <div
        className="flex gap-2 ml-[2px] flex-wrap mt-4"
        style={{ marginBottom: "6rem" }}
      >
        {tags.map((tag, index) => (
          <a
            key={index}
            href={tag.href}
            className="bg-zinc-800/50 text-[13.3px] tracking-[0.3px] lato text-white/50 hover:text-black1 hover:bg-lime2 transition-all duration-200 px-3 rounded-sm py-1 font-normal"
          >
            {tag.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryMemberTagSection;
