import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoData } from "../store/slices/apiSlice";

const YouTubeVideos = () => {
  const dispatch = useDispatch();
  const { video, status, error } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchVideoData());
  }, [dispatch]);

  if (status === "loading") return <p>Loading videos...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  const mainVideo = video?.videos[0];
  const sideVideos = video?.videos.slice(1, 5);
  // const remainingVideos = video?.videos.slice(5);

  // Helper function to generate YouTube embed link
  const getYouTubeEmbedLink = (link) => {
    const videoId = new URL(link).searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="py-12 mt-7 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-20 overflow-x-hidden">
      <div className="mb-8 py-4 lg:py-10 trending-section">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 sm:mb-10 title-section">
          <h2 className="ml-0 flex items-center text-base sm:text-lg md:text-xl lg:text-2xl frank mb-4 sm:mb-0 font-semibold text-white capitalize">
            <i className="ri-menu-4-fill text-lime2 font-bold text-xl mr-3"></i>
            Latest Uranium Videos
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Main Video */}
          {mainVideo && (
            <div className="group block w-full lg:w-2/3 mb-6 lg:mb-0 relative cursor-pointer overflow-hidden main-video">
              <div className="relative">
                <iframe
                  className="w-full h-[320px] md:h-80 lg:h-[535px] object-cover"
                  src={getYouTubeEmbedLink(mainVideo.link)}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black1/60 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-75 text-content">
                  <span className="bg-lime1 text-black font-semibold text-[10px] md:text-xs px-2 py-1 uppercase">
                    {mainVideo.channel}
                  </span>
                  <a
                    href={mainVideo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h2 className="text-xl md:text-2xl font-medium md:font-semibold pr-6 mt-4 leading-[22px] md:leading-[35px] hover:text-lime1 transition-colors duration-300">
                      {mainVideo.title}
                    </h2>
                  </a>
                  <p className="text-[12.5px] md:text-[13.5px] lato text-white/80 mt-5 pointer-events-none">
                    {mainVideo.publish_time} | {mainVideo.views}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Side Videos */}
          <div className="w-full lg:w-1/3 space-y-4 sm:space-y-7 side-videos mt-5 md:mt-0">
            {sideVideos?.map((vid, index) => (
              <div
                key={index}
                className="relative flex items-center space-x-4 cursor-pointer group side-video"
              >
                <div className="relative flex-shrink-0">
                  <iframe
                    className="w-22 h-16 sm:w-24 sm:h-20 md:w-32 md:h-[112px] opacity-70 object-cover group-hover:opacity-40 transition-all duration-500"
                    src={getYouTubeEmbedLink(vid.link)}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex-1 space-y-2">
                  <a
                    href={vid.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h4 className="text-[13px] sm:text-base md:text-[16px] font-medium md:font-semibold leading-tight line-clamp-2 frank text-white/90 hover:text-lime1 transition-colors duration-300">
                      {vid.title}
                    </h4>
                  </a>
                  <div className="flex items-center text-[10px] md:text-xs text-gray-500 space-x-2">
                    <span>{vid.channel}</span>
                    <span>|</span>
                    <span>{vid.publish_time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Remaining Videos (Horizontal Layout) */}
        {/* <div className="flex gap-4 mt-10 no-scrollbar">
          {remainingVideos?.map((vid, index) => (
            <div key={index} className="w-full p-2">
              <iframe
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                src={getYouTubeEmbedLink(vid.link)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <a
                href={vid.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2"
              >
                <h4 className="text-sm font-medium text-white line-clamp-2 hover:text-lime1 transition-colors duration-300">
                  {vid.title}
                </h4>
              </a>
              <p className="text-xs text-gray-400">
                {vid.publish_time} • {vid.views}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default YouTubeVideos;
