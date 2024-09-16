const ForumRightScientists = () => {
  // Scientist data stored in an array of objects
  const scientists = [
    {
      id: 1,
      name: "Henri Becquerel",
      username: "@henribecquerel",
      imgSrc:
        "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Marie Curie",
      username: "@mariecurie",
      imgSrc:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Otto Hahn",
      username: "@ottohahn",
      imgSrc:
        "https://images.pexels.com/photos/14391922/pexels-photo-14391922.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Lise Meitner",
      username: "@lisemeitner",
      imgSrc:
        "https://images.pexels.com/photos/9620321/pexels-photo-9620321.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="bg-zinc-800/30 py-6 px-8 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-white mb-8 frank">
        Nuclear Scientists
      </h2>
      <ul className="space-y-6">
        {scientists.map((scientist) => (
          <li key={scientist.id} className="flex items-center space-x-4">
            <img
              src={scientist.imgSrc}
              alt={scientist.name}
              className="w-11 h-11 rounded-full order-white object-cover"
            />
            <div>
              <p className="text-sm font-medium frank tracking-wide text-white/90">
                {scientist.name}
              </p>
              <p className="text-[13px] text-white/40">{scientist.username}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForumRightScientists;
