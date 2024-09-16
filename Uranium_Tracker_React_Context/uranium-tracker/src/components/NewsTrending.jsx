import Loader from "./Loader";

const NewsTrending = ({ newsData }) => {
  // Function to standardize date format
  const formatDate = (dateString) => {
    let date;
    if (dateString.includes("T")) {
      // Handle ISO format: "2024-09-12T00:00:00"
      date = new Date(dateString);
    } else if (dateString.includes(",")) {
      // Handle format: "Friday, 6 September 2024"
      date = new Date(dateString);
    } else {
      // Handle format: "12-09-2024"
      const [day, month, year] = dateString.split("-");
      date = new Date(`${year}-${month}-${day}`);
    }

    // Format the date to "Sep 6, 2024"
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (!newsData) {
    return <Loader />;
  }

  return (
    <div className="py-16 px-6 md:px-20 md:py-28 mt-5">
      <h2 className="flex items-center ml-[-2px] text-[1rem] md:text-[1.4rem] frank mb-6 lg:mb-9 font-semibold text-white capitalize">
        <i className="ri-menu-4-fill text-lime2 text-bold text-xl mr-2"></i>
        Trending News
      </h2>

      <div className="flex justify-between flex-wrap">
        {newsData.latest_news.map((newsItem) => (
          <div
            key={newsItem.id}
            className="trending-block w-full sm:w-[48%] lg:w-[31%] mb-6"
          >
            <div className="w-full h-[210px] overflow-hidden">
              <a href={newsItem.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-full h-full object-cover hover:scale-105 hover:opacity-95 transition-all duration-300"
                  src={newsItem.image_url}
                  alt={newsItem.title}
                />
              </a>
            </div>

            <div className="py-2">
              <a href={newsItem.link} target="_blank" rel="noopener noreferrer">
                <h1 className="text-[16px] md:text-xl leading-[25px] capitalize text-white/90 font-semibold frank hover:text-white">
                  {newsItem.title}
                </h1>
              </a>
              <p className="text-[11px] md:text-[12px] lato font-medium text-white/40 mt-2">
                <span>{formatDate(newsItem.published_date)}</span>
                &nbsp; | &nbsp;<span>{newsItem.publisher}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTrending;
