import { useState, useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoData } from "../store/slices/apiSlice";

const VideoModal = ({ video, onClose }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.api.video);
  console.log(videoData);
  const status = useSelector((state) => state.api.status);

  useEffect(() => {
    if (status === "idle" || status === "failed") {
      dispatch(fetchVideoData());
    }
  }, [status, dispatch]);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black1 bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-[80vw] h-[50vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-[25%] text-white text-3xl z-10"
        >
          ×
        </button>
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-contain"
          autoPlay
        />
        <button
          onClick={togglePlay}
          className="absolute bottom-4 left-[25.5%] text-white text-2xl z-10"
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
      </div>
    </div>
  );
};

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoData = {
    mainVideo: {
      id: "main-video",
      src: "https://media.istockphoto.com/id/2155913298/video/the-train-is-heading-towards-toronto-along-lake-ontariocanada.mp4?s=mp4-640x640-is&k=20&c=lfcc3urts0LHfGZTVgVXnA1Lq_amRDtE1xl4Y8U1qFU=",
      title:
        "Nuclear Power Market Size is Projected to Reach USD 45.31 billion by 2032, Growing at a CAGR of 3.10%: Straits Research",
      category: "Nuclear-Grade trending News",
      description: "Globe Newswire – Aug 21, 2024",
    },
    sideVideos: [
      {
        id: "side-video-1",
        src: "https://cdn.pixabay.com/video/2020/04/24/37079-413229597_large.mp4",
        title:
          "Exploring Uranium Mining: A Deep Dive into Modern Extraction Techniques",
        author: "Dr. Emma Radcliffe",
        date: "Aug 15, 2023",
      },
      // add other videos here
      {
        id: "side-video-1",
        src: "https://cdn.pixabay.com/video/2020/04/24/37079-413229597_large.mp4",
        title:
          "Exploring Uranium Mining: A Deep Dive into Modern Extraction Techniques",
        author: "Dr. Emma Radcliffe",
        date: "Aug 15, 2023",
      },
      {
        id: "side-video-1",
        src: "https://cdn.pixabay.com/video/2020/04/24/37079-413229597_large.mp4",
        title:
          "Exploring Uranium Mining: A Deep Dive into Modern Extraction Techniques",
        author: "Dr. Emma Radcliffe",
        date: "Aug 15, 2023",
      },
      {
        id: "side-video-1",
        src: "https://cdn.pixabay.com/video/2020/04/24/37079-413229597_large.mp4",
        title:
          "Exploring Uranium Mining: A Deep Dive into Modern Extraction Techniques",
        author: "Dr. Emma Radcliffe",
        date: "Aug 15, 2023",
      },
      {
        id: "side-video-1",
        src: "https://cdn.pixabay.com/video/2020/04/24/37079-413229597_large.mp4",
        title:
          "Exploring Uranium Mining: A Deep Dive into Modern Extraction Techniques",
        author: "Dr. Emma Radcliffe",
        date: "Aug 15, 2023",
      },
    ],
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="py-12 mt-7 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-20 overflow-x-hidden">
      <div className="mb-8 py-4 lg:py-10 trending-section">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 sm:mb-10 title-section">
          <h2 className="ml-0 flex items-center text-base sm:text-lg md:text-xl lg:text-2xl frank mb-4 sm:mb-0 font-semibold text-white capitalize">
            <i className="ri-menu-4-fill text-lime2 font-bold text-xl mr-3"></i>
            Latest Uranium Videos
          </h2>
          <a
            href="#"
            className="hidden md:flex text-black/45 hover:text-lime2 text-[11px] md:text-[13px] items-center"
          >
            VIEW MORE <i className="ri-arrow-right-s-line ml-1 text-lg"></i>
          </a>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Main Video */}
          <div
            className="group block w-full lg:w-2/3 mb-6 lg:mb-0 relative cursor-pointer overflow-hidden main-video"
            onClick={() => handleVideoClick(videoData.mainVideo)}
          >
            <div className="relative">
              <video
                id={videoData.mainVideo.id}
                className="w-full h-[320px] md:h-80 lg:h-[535px] object-cover group-hover:scale-110 transition-all duration-500"
                src={videoData.mainVideo.src}
                type="video/mp4"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="ri-play-circle-fill text-white/50 text-6xl group-hover:text-white/60 transition-all duration-200"></i>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black1/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-75 text-content">
                <span className="bg-lime1 text-black font-semibold text-[10px] md:text-xs px-2 py-1 uppercase">
                  {videoData.mainVideo.category}
                </span>
                <h2 className="text-xl md:text-2xl font-medium md:font-semibold pr-6 mt-4 leading-[22px] md:leading-[35px]">
                  {videoData.mainVideo.title}
                </h2>
                <p className="text-[12.5px] md:text-[13.5px] lato text-white/80 mt-5">
                  {videoData.mainVideo.description}
                </p>
              </div>
            </div>
          </div>

          {/* Side Videos */}
          <div className="w-full lg:w-1/3 space-y-4 sm:space-y-7 side-videos mt-5 md:mt-0">
            {videoData.sideVideos.map((video) => (
              <div
                key={video.id}
                className="relative flex items-center space-x-4 cursor-pointer group side-video"
                onClick={() => handleVideoClick(video)}
              >
                <div className="relative flex-shrink-0">
                  <video
                    id={video.id}
                    className="w-22 h-16 sm:w-24 sm:h-16 md:w-32 md:h-[84px] opacity-70 object-cover group-hover:opacity-40 transition-all duration-500"
                    src={video.src}
                    type="video/mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className="ri-play-circle-fill text-white/50 shadow-xl group-hover:text-white/60 transition-all duration-200 text-3xl"></i>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="text-[13px] sm:text-base md:text-[16px] font-medium md:font-semibold leading-tight line-clamp-2 frank text-white/90">
                    {video.title}
                  </h4>
                  <div className="flex items-center text-[10px] md:text-xs text-gray-500 space-x-2">
                    <span>{video.author}</span>
                    <span>•</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

export default VideoSection;
