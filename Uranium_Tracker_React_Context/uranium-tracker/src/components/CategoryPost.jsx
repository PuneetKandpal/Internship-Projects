import React from "react";

// Array of posts
const posts = [
  {
    id: 1,
    user: {
      name: "Ethan Blake",
      profileImage:
        "https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_640.jpg",
      username: "@ethanblake",
      timeAgo: "2 hours ago",
      visibility: "Public",
    },
    content:
      "Dhaka is wonderful no matter what! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia maxime voluptatibus perspiciatis vitae aliquam voluptatum at, minima deleniti nobis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum molestias incidunt fugit amet obcaecati, magnam ex, cumque nihil, doloribus nisi eos? Est, quam? Eligendi molestiae accusantium dolores animi sed excepturi commodi doloremque recusandae, eos dolorem! Nam nisi quas dolorem. 😊",
    image: "https://cdn.pixabay.com/photo/2022/12/31/14/32/cat-7688749_640.jpg",
    stats: {
      likes: 20,
      comments: 12,
      shares: 5,
    },
  },
  {
    id: 2,
    user: {
      name: "Michelle Jones",
      profileImage:
        "https://cdn.pixabay.com/photo/2022/10/24/17/22/girl-7543957_640.jpg",
      username: "@michellejones",
      timeAgo: "2 minutes ago",
      visibility: "Public",
    },
    content:
      "Dhaka is wonderful no matter what! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia maxime voluptatibus perspiciatis vitae aliquam voluptatum at, minima deleniti nobis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum molestias incidunt fugit amet obcaecati, magnam ex, cumque nihil, doloribus nisi eos? Est, quam? Eligendi molestiae accusantium dolores animi sed excepturi commodi doloremque recusandae, eos dolorem! Nam nisi quas dolorem. 😊",
    image: null, // No image for this post
    stats: {
      likes: 20,
      comments: 9,
      shares: 5,
    },
  },
];

const CategoryPost = () => {
  return (
    <div>
      {posts.map((post, index) => (
        <div
          key={post.id}
          className={`bg-zinc-800/30 rounded-md shadow-md p-4 ${
            index < posts.length - 1 ? "mb-4" : ""
          }`}
        >
          {/* User Profile and Post Header */}
          <div className="flex items-center mb-6">
            <img
              src={post.user.profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-4 object-cover"
            />
            <div>
              <h2 className="font-medium frank text-white/95 mb-[2px]">
                {post.user.name}
              </h2>
              <p className="text-[13px] text-white/40 font-normal flex items-center space-x-1">
                <i className="ri-earth-fill"></i>
                <span>{post.user.visibility}</span>
                <span>•</span>
                <span>{post.user.timeAgo}</span>
              </p>
            </div>
          </div>

          {/* Post Content */}
          <p className="text-white/60 lato font-normal mb-6 px-1">
            {post.content}
          </p>

          {/* Post Image */}
          {post.image && (
            <img
              src={post.image}
              alt="Post"
              className="w-full rounded-lg mb-4 object-cover"
              style={{ height: "300px" }}
            />
          )}

          {/* Comments and Share Section */}
          <div className="flex items-center justify-between text-sm text-white/60 mb-4">
            <div className="flex gap-2">
              <span>❤️ {post.stats.likes}</span>
            </div>
            <div className="flex gap-3 font-normal text-white/50 lato items-center">
              <span>{post.stats.comments} Comments</span>
              <span className="mx-2">•</span>
              <span>{post.stats.shares} Share</span>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-4 border-white/10" />

          {/* Like, Comment, and Share Buttons */}
          <div className="flex gap-2">
            <button className="flex items-center text-white/40 font-normal hover:text-lime1 pr-2 py-2 rounded">
              <i className="ri-thumb-up-line mr-2"></i> Like
            </button>
            <button className="flex items-center text-white/40 font-normal hover:text-lime1 px-4 py-2 rounded">
              <i className="ri-chat-3-line mr-2"></i> Comment
            </button>
            <button className="flex items-center text-white/40 font-normal hover:text-lime1 px-4 py-2 rounded">
              <i className="ri-share-forward-line mr-2"></i> Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPost;
