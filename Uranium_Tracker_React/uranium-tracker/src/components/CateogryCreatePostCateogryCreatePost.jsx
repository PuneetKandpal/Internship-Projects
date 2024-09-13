import React from "react";

const CateogryCreatePost = () => {
  return (
    <div className="bg-zinc-800/30 p-6 rounded-md shadow-md">
      <div className="flex flex-col">
        {/* Avatar and Textarea */}
        <div className="flex items-start space-x-4 mb-4">
          <img
            src="https://cdn.pixabay.com/photo/2024/06/13/05/31/men-8826710_640.jpg"
            alt="Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <textarea
            rows="5"
            placeholder="Share what are you thinking here..."
            className="bg-black1 text-white w-full p-4 border-none focus:outline-none resize-y rounded-md placeholder-white/20"
          ></textarea>
        </div>

        <hr className="my-4 border-white/10" />

        {/* File Input and Post Button */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <label
              htmlFor="galleryInput"
              className="cursor-pointer text-white/30"
            >
              <i className="ri-image-fill text-xl hover:text-lime2"></i>
            </label>
            <input
              type="file"
              id="galleryInput"
              accept="image/*"
              className="hidden"
            />

            <label htmlFor="pinInput" className="cursor-pointer text-white/30">
              <i className="ri-attachment-2 text-xl hover:text-lime2"></i>
            </label>
            <input type="file" id="pinInput" className="hidden" />
          </div>

          <button className="bg-lime1 flex items-center px-3 pr-[14px] py-[3px] font-medium rounded-sm text-black hover:bg-lime2 cursor-pointer">
            <i className="ri-send-plane-fill text-[18px] mt-1 mr-2"></i>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CateogryCreatePost;
