// import React from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "./Navbar";

// const NewsPage = () => {
//   const { id } = useParams();
//   return (
//     <div>
//       <Navbar />
//       <div className="bg-black1 min-h-screen mt-[86px] sec-1">
//         {/* Content Section */}
//         <div className="flex flex-col md:flex-row px-6 md:px-20 mt-6 space-y-6 md:space-y-0 md:space-x-14">
//           {/* Left Side */}
//           <div className="flex-1 space-y-4 md:mb-7 mt-5">
//             {/* Header Info */}
//             <div className="pb-4 flex-1 space-y-4">
//               <p className="px-3 py-1 bg-lime2 w-fit text-black1 font-semibold uppercase text-[13px]">
//                 Technology
//               </p>
//               <h1 className="text-[25px] sm:text-[30px] font-extrabold leading-[34px] sm:leading-[40px] text-white/90">
//                 Nuclear Power Market Size is Projected to Reach USD 45.31
//                 billion by 2032, Growing at a CAGR of 3.10%: Straits Research
//               </h1>
//               <div className="text-white py-4 flex items-center justify-between">
//                 {/* Author Info */}
//                 <div className="flex items-center space-x-3">
//                   <img
//                     className="w-7 h-7 rounded-full object-cover"
//                     src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?cs=srgb&dl=pexels-spencer-selover-142259-428364.jpg&fm=jpg"
//                     alt="Author"
//                   />
//                   <div className="flex gap-x-4 items-center text-xs flex-wrap space-y-2 sm:space-y-0">
//                     <p>
//                       By <span className="font-semibold">Globe NewsWire -</span>
//                     </p>
//                     <p className="text-white/60">
//                       Aug 21, 2024 - Updated: Feb 15, 2021
//                     </p>
//                     <div className="flex items-center text-white/60">
//                       <i className="ri-chat-3-line"></i>
//                       <span className="ml-1">3 Comments</span>
//                     </div>
//                     <div className="flex items-center text-white/60">
//                       <i className="ri-time-line"></i>
//                       <span className="ml-1">5 Mins Read</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Social Share Buttons */}
//               <div className="text-white flex flex-wrap gap-x-2 gap-y-2 sm:gap-y-0">
//                 <button className="bg-[#1A6DD4] hover:bg-blue-700 transition-all duration-200 px-4 md:px-6 text-sm font-semibold py-2 flex items-center space-x-2">
//                   <i className="ri-facebook-fill text-[16px] ml-[-3px]"></i>
//                   <span>Facebook</span>
//                 </button>
//                 <button className="bg-[#55ACEF] hover:bg-cyan-400 transition-all duration-200 px-4 md:px-6 text-sm font-semibold py-2 flex items-center space-x-2">
//                   <i className="ri-twitter-fill text-[16px] ml-[-3px]"></i>
//                   <span>Twitter</span>
//                 </button>
//                 <button className="bg-[#FB2544] hover:bg-red-800 transition-all duration-200 px-4 md:px-6 text-sm font-semibold py-2 flex items-center space-x-2">
//                   <i className="ri-pinterest-fill text-[16px] ml-[-3px]"></i>
//                   <span>Pinterest</span>
//                 </button>
//                 <button className="border border-white/10 px-4 py-2 group group-hover:bg-zinc-800/30 transition-all duration-200">
//                   <i className="ri-share-forward-fill text-lg text-white/60 group-hover:text-white/90"></i>
//                 </button>
//               </div>
//             </div>
//             <hr className="border-white/10" />
//             {/* News Content */}
//             <div className="py-4">
//               <div className="w-full h-[600px]">
//                 <img
//                   className="w-full h-full object-cover object-bottom"
//                   src="https://images.unsplash.com/photo-1610720707798-6fe21dc165ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnVjbGVhcnxlbnwwfHwwfHx8MA%3D%3D"
//                   alt="News"
//                 />
//               </div>
//               <p className="text-[17.5px] text-white/50 font-normal mt-4">
//                 To understand the new smart watched and other pro devices of
//                 recent focus, we should look to Silicon Valley and the
//                 quantified movement. Apple’s Watch records exercise, tracks our
//                 moves throughout the day, checks the amount of time we are stood
//                 up and reminds us to get up and move around if we have been sat
//                 for too long – let’s not forget Tim Cooks “sitting is the new
//                 coolness” line.
//                 <br />
//                 <br />
//                 To its detractors, love at first sight must be an illusion – the
//                 wrong term for what is simply infatuation, or a way to sugarcoat
//                 lust. To understand the new smart watched and other pro devices
//                 of recent focus, we should look to Silicon Valley and the
//                 quantified movement. Apple’s Watch records exercise, tracks our
//                 moves throughout the day, checks the amount of time we are stood
//                 up and reminds us to get up and move around if we have been sat
//                 for too long – let’s not forget Tim Cooks “sitting is the new
//                 coolness” line. <br />
//                 <br />
//                 The wrong term for what is simply infatuation, or a way to
//                 sugarcoat lust. To understand the new smart watched and other
//                 pro devices of recent focus, we should look to Silicon Valley
//                 and the quantified movement. Apple’s Watch records exercise,
//                 tracks our moves throughout the day, checks the amount of time
//                 we are stood up and reminds us to get up
//               </p>
//               <h1 className="py-9 text-2xl font-bold">
//                 Best Chromebook: Google Pixelbook Go
//               </h1>
//               <div className="w-full h-[500px]">
//                 <img
//                   className="w-full h-full object-cover object-bottom"
//                   src="https://images.unsplash.com/photo-1637181145230-9b60a23df280?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bnVjbGVhcnxlbnwwfHwwfHx8Mg%3D%3D"
//                   alt="News"
//                 />
//               </div>
//               <div className="text-white py-10 mt-2">
//                 <div className="flex items-start space-x-3 mb-4">
//                   <i className="ri-double-quotes-l text-lime2 mt-[-4px] text-4xl"></i>
//                   <p className="text-[26px] leading-[33px] tracking-[0.5px] capitalize font-bold">
//                     Only a quarter of young adults are financially literate. You
//                     don’t want to overwhelm them with terrible advice. Best to
//                     keep them on track.
//                   </p>
//                 </div>
//                 <p className="text-sm text-white/40 ml-10">— John Mccarthy</p>
//               </div>
//               <p className="text-[17.5px] text-white/50 font-normal mt-2">
//                 To understand the new smart watched and other pro devices of
//                 recent focus, we should look to Silicon Valley and the
//                 quantified movement. Apple’s Watch records exercise, tracks our
//                 moves throughout the day, checks the amount of time we are stood
//                 up and reminds us to get up and move around if we have been sat
//                 for too long – let’s not forget Tim Cooks “sitting is the new
//                 coolness” line.
//                 <br />
//                 <br />
//                 To its detractors, love at first sight must be an illusion – the
//                 wrong term for what is simply infatuation, or a way to sugarcoat
//                 lust. To understand the new smart watched and other pro devices
//                 of recent focus, we should look to Silicon Valley and the
//                 quantified movement. Apple’s Watch records exercise, tracks our
//                 moves throughout the day, checks the amount of time we are stood
//                 up and reminds us to get up and move around if we have been sat
//                 for too long – let’s not forget Tim Cooks “sitting is the new
//                 coolness” line. <br />
//                 <br />
//                 Only a quarter of young adults are financially literate. You
//                 don’t want to overwhelm them with terrible advice. Best to keep
//                 them on track. The wrong term for what is simply infatuation, or
//                 a way to sugarcoat lust. To understand the new smart watched and
//                 other pro devices of recent focus, we should look to Silicon
//                 Valley and the quantified movement. Apple’s Watch records
//                 exercise, tracks our moves throughout the day, checks the amount
//                 of time we are stood up and reminds us to get up To understand
//                 the new smart watched and other pro devices of recent focus, we
//                 should look to Silicon Valley and the quantified movement.
//                 Apple’s Watch records exercise, tracks our moves throughout the
//                 day, checks the amount of time we are stood up and reminds us to
//                 get up and move around if we have been sat for too long – let’s
//                 not forget Tim Cooks “sitting is the new coolness” line.
//                 <br />
//                 <br />
//                 To its detractors, love at first sight must be an illusion – the
//                 wrong term for what is simply infatuation, or a way to sugarcoat
//                 lust. To understand the new smart watched and other pro devices
//                 of recent focus, we should look to Silicon Valley and the
//                 quantified movement. Apple’s Watch records exercise, tracks our
//                 moves throughout the day, checks the amount of time we are stood
//                 up and reminds us to get up and move around if we have been sat
//                 for too long – let’s not forget Tim Cooks “sitting is the new
//                 coolness” line. <br />
//                 <br />
//                 Only a quarter of young adults are financially literate. You
//                 don’t want to overwhelm them with terrible advice. Best to keep
//                 them on track. The wrong term for what is simply infatuation, or
//                 a way to sugarcoat lust. To understand the new smart watched and
//                 other pro devices of recent focus, we should look to Silicon
//                 Valley and the quantified movement. Apple’s Watch records
//                 exercise, tracks our moves throughout the day, checks the amount
//                 of time we are stood up and reminds us to get up
//               </p>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="right w-full md:w-[28%] space-y-6 sticky overflow-y-auto top-[6.7rem] pb-12">
//             <div className="w-full h-[250px] bg-lime2/10">
//               <img
//                 className="w-full h-full object-cover"
//                 src="https://smartmag.theme-sphere.com/news-bulletin/wp-content/uploads/sites/26/2021/11/News-Right.jpg"
//                 alt="Advertise"
//               />
//             </div>
//             <div className="text-white">
//               {/* Title */}
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-lime2 text-lg font-semibold">
//                   Editors Picks
//                 </h2>
//               </div>
//               {/* Article 1 */}
//               <div className="flex space-x-4 mb-6">
//                 <img
//                   className="w-28 h-[70px] object-cover"
//                   src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8Mg%3D%3D"
//                   alt="Oculus Quest X"
//                 />
//                 <div>
//                   <a
//                     href="#"
//                     className="tracking-[0.7px] text-white/80 text-sm font-semibold flex leading-[21px] hover:text-lime2 transition-all duration-200"
//                   >
//                     Oculus Quest X Headset: Discover a Shining New Star
//                   </a>
//                   <p className="text-white/35 mt-1 text-[13px]">Jan 5, 2021</p>
//                 </div>
//               </div>
//               {/* Article 2 */}
//               <div class="flex space-x-4 mb-6">
//                 <img
//                   class="w-28 h-[70px] object-cover"
//                   src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8Mg%3D%3D"
//                   alt="iPhone Pro 13"
//                 />
//                 <div>
//                   <a
//                     href="#"
//                     class="tracking-[0.7px] text-white/80 text-sm font-semibold flex leading-[21px] hover:text-lime2 transition-all duration-200"
//                   >
//                     iPhone Pro 13 Rumored to Feature 1 TB of Storage
//                   </a>
//                   <p class="text-white/35 mt-1 text-[13px]">Jan 5, 2021</p>
//                 </div>
//               </div>

//               {/*Article 3*/}
//               <div class="flex space-x-4">
//                 <img
//                   class="w-28 h-[70px] object-cover"
//                   src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDI%3D"
//                   alt="Fujifilm Camera"
//                 />
//                 <div>
//                   <a
//                     href="#"
//                     class="tracking-[0.7px] text-white/80 text-sm font-semibold flex leading-[21px] hover:text-lime2 transition-all duration-200"
//                   >
//                     Fujifilm’s 102-Megapixel Camera is the Size of a Typical
//                     DSLR
//                   </a>
//                   <p class="text-white/35 mt-1 text-[13px]">Jan 5, 2021</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsPage;

import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const newsData = [
  {
    id: 1,
    category: "Technology",
    title:
      "Nuclear Power Market Size is Projected to Reach USD 45.31 billion by 2032, Growing at a CAGR of 3.10%: Straits Research",
    author: "Globe NewsWire",
    date: "Aug 21, 2024",
    updated: "Feb 15, 2021",
    comments: "3 Comments",
    readTime: "5 Mins Read",
    image1:
      "https://images.unsplash.com/photo-1610720707798-6fe21dc165ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnVjbGVhcnxlbnwwfHwwfHx8MA%3D%3D",
    content: `To understand the new smart watched and other pro devices of
                recent focus, we should look to Silicon Valley and the
                quantified movement. Apple’s Watch records exercise, tracks our
                moves throughout the day, checks the amount of time we are stood
                up and reminds us to get up and move around if we have been sat
                for too long – let’s not forget Tim Cooks “sitting is the new
                coolness” line.
               "
               
               "

                To its detractors, love at first sight must be an illusion – the
                wrong term for what is simply infatuation, or a way to sugarcoat
                lust. To understand the new smart watched and other pro devices
                of recent focus, we should look to Silicon Valley and the
                quantified movement. Apple’s Watch records exercise, tracks our
                moves throughout the day, checks the amount of time we are stood
                up and reminds us to get up and move around if we have been sat
                for too long – let’s not forget Tim Cooks “sitting is the new
                coolness” line. <br />
                <br />
                The wrong term for what is simply infatuation, or a way to
                sugarcoat lust. To understand the new smart watched and other
                pro devices of recent focus, we should look to Silicon Valley
                and the quantified movement. Apple’s Watch records exercise,
                tracks our moves throughout the day, checks the amount of time
                we are stood up and reminds us to get up`,
    highlightTitle: "Best Chromebook: Google Pixelbook Go",
    image2:
      "https://images.unsplash.com/photo-1637181145230-9b60a23df280?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bnVjbGVhcnxlbnwwfHwwfHx8Mg%3D%3D",
    quote: `Only a quarter of young adults are financially literate. You don’t want to overwhelm them with terrible advice. Best to keep them on track.`,
    quoteAuthor: "John Mccarthy",
    additionalContent: `To understand the new smart watched and other pro devices of
                recent focus, we should look to Silicon Valley and the
                quantified movement. Apple’s Watch records exercise, tracks our
                moves throughout the day, checks the amount of time we are stood
                up and reminds us to get up and move around if we have been sat
                for too long – let’s not forget Tim Cooks “sitting is the new
                coolness” line.
                <br />
                <br />
                To its detractors, love at first sight must be an illusion – the
                wrong term for what is simply infatuation, or a way to sugarcoat
                lust. To understand the new smart watched and other pro devices
                of recent focus, we should look to Silicon Valley and the
                quantified movement. Apple’s Watch records exercise, tracks our
                moves throughout the day, checks the amount of time we are stood
                up and reminds us to get up and move around if we have been sat
                for too long – let’s not forget Tim Cooks “sitting is the new
                coolness” line. <br />
                <br />
                Only a quarter of young adults are financially literate. You
                don’t want to overwhelm them with terrible advice. Best to keep
                them on track. The wrong term for what is simply infatuation, or
                a way to sugarcoat lust. To understand the new smart watched and
                other pro devices of recent focus, we should look to Silicon
                Valley and the quantified movement. Apple’s Watch records
                exercise, tracks our moves throughout the day, checks the amount
                of time we are stood up and reminds us to get up To understand
                the new smart watched and other pro devices of recent focus, we
                should look to Silicon Valley and the quantified movement.
                Apple’s Watch records exercise, tracks our moves throughout the
                day, checks the amount of time we are stood up and reminds us to
                get up and move around if we have been sat for too long – let’s
                not forget Tim Cooks “sitting is the new coolness” line.
                <br />
                <br />
                To its detractors, love at first sight must be an illusion – the
                wrong term for what is simply infatuation, or a way to sugarcoat
                lust. To understand the new smart watched and other pro devices
                of recent focus, we should look to Silicon Valley and the
                quantified movement. Apple’s Watch records exercise, tracks our
                moves throughout the day, checks the amount of time we are stood
                up and reminds us to get up and move around if we have been sat
                for too long – let’s not forget Tim Cooks “sitting is the new
                coolness” line. <br />
                <br />
                Only a quarter of young adults are financially literate. You
                don’t want to overwhelm them with terrible advice. Best to keep
                them on track. The wrong term for what is simply infatuation, or
                a way to sugarcoat lust. To understand the new smart watched and
                other pro devices of recent focus, we should look to Silicon
                Valley and the quantified movement. Apple’s Watch records
                exercise, tracks our moves throughout the day, checks the amount
                of time we are stood up and reminds us to get up`,
  },
];

const articles = [
  {
    title: "Oculus Quest X Headset: Discover a Shining New Star",
    date: "Jan 5, 2021",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8Mg%3D%3D",
    alt: "Oculus Quest X",
  },
  {
    title: "iPhone Pro 13 Rumored to Feature 1 TB of Storage",
    date: "Jan 5, 2021",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8Mg%3D%3D",
    alt: "iPhone Pro 13",
  },
  {
    title: "Fujifilm’s 102-Megapixel Camera is the Size of a Typical DSLR",
    date: "Jan 5, 2021",
    img: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDI%3D",
    alt: "Fujifilm Camera",
  },
];

const NewsPage = () => {
  const { id } = useParams();
  const news = newsData.find((newsItem) => newsItem.id === Number(id)); // Fetch the news item based on id

  return (
    <div>
      <Navbar />
      <div className="bg-black1 min-h-screen mt-[86px] sec-1">
        {/* Content Section */}
        <div className="flex flex-col md:flex-row px-6 md:px-20 mt-6 space-y-6 md:space-y-0 md:space-x-14">
          {/* Left Side */}
          <div className="flex-1 space-y-4 md:mb-7 mt-5">
            {/* Header Info */}
            <div className="pb-4 flex-1 space-y-4">
              <p className="px-3 py-1 bg-lime2 w-fit text-black1 font-semibold uppercase text-[13px]">
                {news.category}
              </p>
              <h1 className="text-[25px] sm:text-[30px] font-extrabold leading-[34px] sm:leading-[40px] text-white/90">
                {news.title}
              </h1>
              <div className="text-white py-4 flex items-center justify-between">
                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <img
                    className="w-7 h-7 rounded-full object-cover"
                    src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?cs=srgb&dl=pexels-spencer-selover-142259-428364.jpg&fm=jpg"
                    alt="Author"
                  />
                  <div className="flex gap-x-4 items-center text-xs flex-wrap space-y-2 sm:space-y-0">
                    <p>
                      By <span className="font-semibold">{news.author} -</span>
                    </p>
                    <p className="text-white/60">
                      {news.date} - Updated: {news.updated}
                    </p>
                    <div className="flex items-center text-white/60">
                      <i className="ri-chat-3-line"></i>
                      <span className="ml-1">{news.comments}</span>
                    </div>
                    <div className="flex items-center text-white/60">
                      <i className="ri-time-line"></i>
                      <span className="ml-1">{news.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Social Share Buttons */}
              <div className="text-white flex flex-wrap gap-x-2 gap-y-2 sm:gap-y-0">
                <button className="bg-[#1A6DD4] hover:bg-blue-700 transition-all duration-200 px-4 md:px-6 text-sm font-semibold py-2 flex items-center space-x-2">
                  <i className="ri-facebook-fill text-[16px] ml-[-3px]"></i>
                  <span>Facebook</span>
                </button>
                <button className="bg-[#55ACEF] hover:bg-cyan-400 transition-all duration-200 px-4 md:px-6 text-sm font-semibold py-2 flex items-center space-x-2">
                  <i className="ri-twitter-fill text-[16px] ml-[-3px]"></i>
                  <span>Twitter</span>
                </button>
                <button className="bg-[#FB2544] hover:bg-red-800 transition-all duration-200 px-4 md:px-6 text-sm font-semibold py-2 flex items-center space-x-2">
                  <i className="ri-pinterest-fill text-[16px] ml-[-3px]"></i>
                  <span>Pinterest</span>
                </button>
                <button className="border border-white/10 px-4 py-2 group group-hover:bg-zinc-800/30 transition-all duration-200">
                  <i className="ri-share-forward-fill text-lg text-white/60 group-hover:text-white/90"></i>
                </button>
              </div>
            </div>
            <hr className="border-white/10" />
            {/* News Content */}
            <div className="py-4">
              <div className="w-full h-[600px]">
                <img
                  className="w-full h-full object-cover object-bottom"
                  src={news.image1}
                  alt="News"
                />
              </div>
              <p className="text-[17.5px] text-white/50 font-normal mt-4">
                {news.content}
              </p>
              <h1 className="py-9 text-2xl font-bold">{news.highlightTitle}</h1>
              <div className="w-full h-[500px]">
                <img
                  className="w-full h-full object-cover object-bottom"
                  src={news.image2}
                  alt="News"
                />
              </div>
              <div className="text-white py-10 mt-2">
                <div className="flex items-start space-x-3 mb-4">
                  <i className="ri-double-quotes-l text-lime2 mt-[-4px] text-4xl"></i>
                  <p className="text-[26px] leading-[33px] tracking-[0.5px] capitalize font-bold">
                    {news.quote}
                  </p>
                </div>
                <p className="text-sm text-white/40 ml-10">
                  — {news.quoteAuthor}
                </p>
              </div>
              <p className="text-[17.5px] text-white/50 font-normal mt-2">
                {news.additionalContent}
              </p>
            </div>
          </div>

          {/*right side part */}
          <div className="right w-full md:w-[28%] space-y-6 sticky overflow-y-auto top-[6.7rem] pb-12">
            <div className="w-full h-[250px] bg-lime2/10">
              <img
                className="w-full h-full object-cover"
                src="https://smartmag.theme-sphere.com/news-bulletin/wp-content/uploads/sites/26/2021/11/News-Right.jpg"
                alt="Advertise"
              />
            </div>
            <div className="text-white">
              {/* Title */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lime2 text-lg font-semibold">
                  Editors Picks
                </h2>
              </div>
              {/* Map over articles */}
              {articles.map((article, index) => (
                <div key={index} className="flex space-x-4 mb-6">
                  <img
                    className="w-28 h-[70px] object-cover"
                    src={article.img}
                    alt={article.alt}
                  />
                  <div>
                    <a
                      href="#"
                      className="tracking-[0.7px] text-white/80 text-sm font-semibold flex leading-[21px] hover:text-lime2 transition-all duration-200"
                    >
                      {article.title}
                    </a>
                    <p className="text-white/35 mt-1 text-[13px]">
                      {article.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
