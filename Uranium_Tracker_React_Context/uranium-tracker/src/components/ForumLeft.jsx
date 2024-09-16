const ForumLeft = () => {
  const categories = [
    {
      title: "Recent News",
      description:
        "A place to talk about anything related to uranium and more. Open to all general topics.",
      posts: 120,
      lastPostUser: "Ethan Blake",
      lastPostTime: "2 hours ago",
      categoryImage:
        "https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg",
      userAvatar:
        "https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_640.jpg",
    },
    {
      title: "New Uranium Projects",
      description:
        "A place to talk about anything related to uranium and more. Open to all general topics.",
      posts: 90,
      lastPostUser: "Ava Sullivan",
      lastPostTime: "8 hours ago",
      categoryImage:
        "https://cdn.pixabay.com/photo/2021/11/15/13/51/nuclear-power-plant-6798207_640.jpg",
      userAvatar:
        "https://cdn.pixabay.com/photo/2018/12/29/16/06/girl-3901714_640.jpg",
    },
    {
      title: "Geopolitical News",
      description:
        "A place to talk about anything related to uranium and more. Open to all general topics.",
      posts: 40,
      lastPostUser: "Liam Carter",
      lastPostTime: "10 hours ago",
      categoryImage:
        "https://media.gettyimages.com/id/2156553205/photo/an-illustration-is-depicting-china-us-relations-in-shanghai-china-on-june-11-2024.jpg?s=612x612&w=0&k=20&c=_WD_xvPc20lxHbXXnl5r_iD-gO7JkaJ-fKNjm6cs-yE=",
      userAvatar:
        "https://cdn.pixabay.com/photo/2023/06/29/01/09/portrait-8095464_640.jpg",
    },
    {
      title: "Uranium Price",
      description:
        "A place to talk about anything related to uranium and more. Open to all general topics.",
      posts: 98,
      lastPostUser: "Mason Brooks",
      lastPostTime: "14 hours ago",
      categoryImage:
        "https://cdn.pixabay.com/photo/2015/05/15/02/05/money-767778_640.jpg",
      userAvatar:
        "https://cdn.pixabay.com/photo/2024/06/13/05/31/men-8826710_640.jpg",
    },
    {
      title: "Nuclear Energy and Uranium Demand",
      description:
        "A place to talk about anything related to uranium and more. Open to all general topics.",
      posts: 98,
      lastPostUser: "Liam Carter",
      lastPostTime: "14 hours ago",
      categoryImage:
        "https://cdn.pixabay.com/photo/2017/10/29/14/30/power-plant-2899861_640.jpg",
      userAvatar:
        "https://cdn.pixabay.com/photo/2024/06/13/05/31/men-8826710_640.jpg",
    },
    {
      title: "Uranium exploration companies",
      description:
        "A place to talk about anything related to uranium and more. Open to all general topics.",
      posts: 98,
      lastPostUser: "Noah Reed",
      lastPostTime: "2 hours ago",
      categoryImage:
        "https://cdn.pixabay.com/photo/2021/03/29/12/16/stairs-6133971_640.jpg",
      userAvatar:
        "https://cdn.pixabay.com/photo/2024/06/13/05/31/men-8826710_640.jpg",
    },
    {
      title: "Uranium industry events",
      description:
        "A place to talk about anything related to uranium and more. Open to all general topics.",
      posts: 98,
      lastPostUser: "Noah Reed",
      lastPostTime: "2 hours ago",
      categoryImage:
        "https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg",
      userAvatar:
        "https://cdn.pixabay.com/photo/2024/06/13/05/31/men-8826710_640.jpg",
    },
    {
      title: "Kazakhstan",
      description:
        "A place to talk about anything related to uranium and more. Open to all general topics.",
      posts: 98,
      lastPostUser: "Noah Reed",
      lastPostTime: "2 hours ago",
      categoryImage:
        "https://plus.unsplash.com/premium_photo-1697730150003-26a1d469adb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2F6YWtoc3RhbnxlbnwwfHwwfHx8MA%3D%3D",
      userAvatar:
        "https://cdn.pixabay.com/photo/2024/06/13/05/31/men-8826710_640.jpg",
    },
    {
      title: "Other",
      description:
        "A place to talk about anything related to uranium and more. Open to all general topics.",
      posts: 98,
      lastPostUser: "Noah Reed",
      lastPostTime: "2 hours ago",
      categoryImage:
        "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_640.jpg",
      userAvatar:
        "https://cdn.pixabay.com/photo/2024/06/13/05/31/men-8826710_640.jpg",
    },
  ];

  return (
    <div className="col-span-2 mt-6 mb-5 lg:mb-28">
      <div className="overflow-hidden shadow-sm rounded-md bg-zinc-800/30 overflow-x-auto sm:overflow-auto">
        <table className="min-w-full divide-y divide-zinc-700 table container">
          <thead className="bg-lime2 text-black1">
            <tr>
              <th
                scope="col"
                className="px-6 py-5 frank text-left text-xs font-bold text-black1 uppercase tracking-wider"
              >
                Forum
              </th>
              <th
                scope="col"
                className="px-6 py-5 frank text-left text-xs font-bold text-black1 uppercase tracking-wider"
              >
                Posts
              </th>
              <th
                scope="col"
                className="px-6 py-5 frank text-left text-xs font-bold text-black1 uppercase tracking-wider"
              >
                Last Post
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr
                key={index}
                className="border-b border-white/10 hover:bg-[#111111]/20 transition-all duration-200"
              >
                <td className="px-6 py-6 whitespace-normal text-sm font-medium text-white/90 flex items-center md:space-x-6">
                  <img
                    src={category.categoryImage}
                    alt={category.title}
                    className="w-[4rem] h-[4rem] rounded-full lg:block hidden"
                  />
                  <div className="max-w-xs">
                    <div className="font-medium md:font-semibold text-lg mb-1 frank hover:text-lime2 transition-all duration-200">
                      <a href="category.html">{category.title}</a>
                    </div>
                    <div className="text-white/40 text-[12.5px] md:text-sm leading-[16px] md:leading-[19px]">
                      {category.description}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-6 whitespace-nowrap text-sm text-white/40">
                  {category.posts}
                </td>
                <td className="px-6 py-6 text-sm text-white/40">
                  <div className="flex items-center space-x-4">
                    <img
                      src={category.userAvatar}
                      alt="User Avatar"
                      className="w-11 h-11 rounded-full object-cover lg:block hidden"
                    />
                    <div className="text-white/40">
                      <div className="font-medium frank tracking-wide text-white/90 mb-1 md:mb-0">
                        {category.lastPostUser}
                      </div>
                      <div className="text-xs">{category.lastPostTime}</div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForumLeft;
