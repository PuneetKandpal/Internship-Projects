const discussions = [
  {
    title: "What does the fox say?",
    message:
      "Guys! So I was in the shower last day and it just popped in my head. What does the fox say? Like really. How do they sound when they speak.",
    votes: 56,
    views: 100,
    replies: 12,
    postedBy: "Aakash Raj Dahal",
    postedTime: "12hr ago",
  },
  {
    title: "COVID-19 Mega Thread Apr 2020",
    message:
      "Post all the news, spoofs and everything related to the COVID Virus in this topic. This allows others to quickly go though all the information related to the virus in an much easier manner.",
    votes: 90,
    views: 300,
    replies: 300,
    postedBy: "Rajan Neupane",
    postedTime: "6hr ago",
  },
  {
    title: "How to start learning programming?",
    message:
      "Hi all! I'm interested in learning how to code but I'm not sure where to start. What programming language should I learn first?",
    votes: 121,
    views: 1000,
    replies: 50,
    postedBy: "FutureDev",
    postedTime: "8hr ago",
  },
];

function renderDiscussions() {
  const container = document.getElementById("discussionContainer");
  container.innerHTML = "";

  discussions.forEach((discussion, index) => {
    const discussionElement = `
          <div class="bg-gray-900 p-6 rounded-lg flex">
            <div class="mr-6 flex flex-col items-center">
              <button class="text-xl text-gray-400 hover:text-green-600" onclick="upvote(${index})">
                <i class="ri-arrow-up-s-line"></i>
              </button>
              <span class="my-1 text-[15px] font-bold">${discussion.votes}</span>
              <button class="text-xl text-gray-400 hover:text-red-500" onclick="downvote(${index})">
                <i class="ri-arrow-down-s-line"></i>
              </button>
            </div>
            <div class="flex-grow">
              <h2 class="text-[1rem] capitalize md:text-[1.25rem] lg:mb-3 font-semibold inter tracking-tight text-white">
                ${discussion.title}
              </h2>
              <p class="text-white/60 text-[16px] mb-5">${discussion.message}</p>
              <div class="text-white/40 text-[15px] mb-4">Posted by ${discussion.postedBy} • ${discussion.postedTime}</div>
              <div class="flex space-x-6">
                <button class="flex text-[14.5px] items-center text-white/40 hover:text-white">
                  <i class="ri-chat-1-fill mr-2 mt-[1px]"></i>Comment
                </button>
                <button class="flex text-[14.5px] items-center justify-center text-white/40 hover:text-white">
                  <i class="ri-share-forward-fill mr-2 text-[17px] mt-[1px]"></i>Share
                </button>
                <button class="flex text-[14.5px] items-center justify-center text-white/40 hover:text-white">
                  <i class="ri-eye-fill mr-2 text-[15px] mt-[1px]"></i>${discussion.views} Views
                </button>
              </div>
            </div>
          </div>
        `;

    container.innerHTML += discussionElement;
  });
}

function upvote(index) {
  discussions[index].votes++;
  renderDiscussions();
}

function downvote(index) {
  discussions[index].votes--;
  renderDiscussions();
}

function postDiscussion(event) {
  event.preventDefault();

  const title = document.getElementById("discussionTitle").value;
  const message = document.getElementById("discussionMessage").value;

  discussions.unshift({
    title: title,
    message: message,
    votes: 0,
    views: 0,
    replies: 0,
    postedBy: "You",
    postedTime: "Just now",
  });

  document.getElementById("discussionTitle").value = "";
  document.getElementById("discussionMessage").value = "";

  renderDiscussions();
}

function filterDiscussions() {
  const searchQuery = document.getElementById("search").value.toLowerCase();
  const filteredDiscussions = discussions.filter((discussion) =>
    discussion.title.toLowerCase().includes(searchQuery)
  );

  renderFilteredDiscussions(filteredDiscussions);
}

function renderFilteredDiscussions(filteredDiscussions) {
  const container = document.getElementById("discussionContainer");
  container.innerHTML = "";

  filteredDiscussions.forEach((discussion, index) => {
    const discussionElement = `
          <div class="bg-gray-900 p-6 rounded-lg flex">
            <div class="mr-6 flex flex-col items-center">
              <button class="text-xl text-gray-400 hover:text-green-600" onclick="upvote(${index})">
                <i class="ri-arrow-up-s-line"></i>
              </button>
              <span class="my-1 text-[15px] font-bold">${discussion.votes}</span>
              <button class="text-xl text-gray-400 hover:text-red-500" onclick="downvote(${index})">
                <i class="ri-arrow-down-s-line"></i>
              </button>
            </div>
            <div class="flex-grow">
              <h2 class="text-[1rem] capitalize md:text-[1.25rem] lg:mb-3 font-semibold inter tracking-tight text-white">
                ${discussion.title}
              </h2>
              <p class="text-white/60 text-[16px] mb-5">${discussion.message}</p>
              <div class="text-white/40 text-[15px] mb-4">Posted by ${discussion.postedBy} • ${discussion.postedTime}</div>
              <div class="flex space-x-6">
                <button class="flex text-[14.5px] items-center text-white/40 hover:text-white">
                  <i class="ri-chat-1-fill mr-2 mt-[1px]"></i>Comment
                </button>
                <button class="flex text-[14.5px] items-center justify-center text-white/40 hover:text-white">
                  <i class="ri-share-forward-fill mr-2 text-[17px] mt-[1px]"></i>Share
                </button>
                <button class="flex text-[14.5px] items-center justify-center text-white/40 hover:text-white">
                  <i class="ri-eye-fill mr-2 text-[15px] mt-[1px]"></i>${discussion.views} Views
                </button>
              </div>
            </div>
          </div>
        `;

    container.innerHTML += discussionElement;
  });
}

function sortDiscussions() {
  const sortBy = document.getElementById("sortBy").value;

  if (sortBy === "newest") {
    discussions.sort((a, b) => new Date(b.postedTime) - new Date(a.postedTime));
  } else if (sortBy === "mostViewed") {
    discussions.sort((a, b) => b.views - a.views);
  } else if (sortBy === "mostReplied") {
    discussions.sort((a, b) => b.replies - a.replies);
  }

  renderDiscussions();
}

// Initial render
renderDiscussions();
