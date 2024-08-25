document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const newPostButton = document.getElementById('newPostButton');
    const sortSelect = document.getElementById('sortSelect');
    const discussionContainer = document.getElementById('discussionContainer');

    let discussions = [
        {
            id: 1,
            title: "Future Concerns",
            author: "S_RISHINARAYAN",
            date: "August 16, 2024 20:07",
            content: "As we look to address climate change and meet growing global energy demands, nuclear energy is once again entering the spotlight as a potential clean energy solution. I'd like to start a discussion on the future prospects for nuclear power, considering both the opportunities and challenges ahead",
            reactions: 1
        },
        {
            id: 2,
            title: "Technological developments",
            author: "NuclearEnthusiast",
            date: "August 17, 2024 15:30",
            content: "Advanced reactor designs and fusion research progress are showing promising results. What are your thoughts on these recent developments?",
            reactions: 3
        }
    ];

    function renderDiscussions(discussionsToRender) {
        discussionContainer.innerHTML = '';
        discussionsToRender.forEach(discussion => {
            const discussionElement = document.createElement('div');
            discussionElement.className = 'bg-[#1e2a3a] p-4 rounded';
            discussionElement.innerHTML = `
                <h3 class="font-bold">${discussion.title}</h3>
                <p class="text-sm text-gray-400">Fissioned by ${discussion.author} on ${discussion.date}</p>
                <p class="mt-2">${discussion.content}</p>
                <div class="flex justify-between items-center mt-2">
                    <span>${discussion.reactions} Chain Reactions</span>
                    <div>
                        <button class="text-gray-400 hover:text-white upvote" data-id="${discussion.id}">▲</button>
                        <button class="text-gray-400 hover:text-white downvote" data-id="${discussion.id}">▼</button>
                    </div>
                </div>
            `;
            discussionContainer.appendChild(discussionElement);
        });

        // Add event listeners for upvote/downvote buttons
        document.querySelectorAll('.upvote, .downvote').forEach(button => {
            button.addEventListener('click', handleVote);
        });
    }

    function handleVote(event) {
        const discussionId = parseInt(event.target.getAttribute('data-id'));
        const isUpvote = event.target.classList.contains('upvote');
        const discussion = discussions.find(d => d.id === discussionId);

        if (discussion) {
            discussion.reactions += isUpvote ? 1 : -1;
            renderDiscussions(discussions);
        }
    }

    function sortDiscussions(method) {
        if (method === 'newest') {
            discussions.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (method === 'popular') {
            discussions.sort((a, b) => b.reactions - a.reactions);
        }
        renderDiscussions(discussions);
    }

    function searchDiscussions(term) {
        const filteredDiscussions = discussions.filter(discussion => 
            discussion.title.toLowerCase().includes(term.toLowerCase()) || 
            discussion.content.toLowerCase().includes(term.toLowerCase())
        );
        renderDiscussions(filteredDiscussions);
    }

    function addNewDiscussion(title, content) {
        const newDiscussion = {
            id: discussions.length + 1,
            title: title,
            author: "Current User",
            date: new Date().toLocaleString(),
            content: content,
            reactions: 0
        };
        discussions.unshift(newDiscussion);
        renderDiscussions(discussions);
    }

    // Event Listeners
    sortSelect.addEventListener('change', function() {
        sortDiscussions(this.value);
    });

    searchButton.addEventListener('click', function() {
        searchDiscussions(searchInput.value);
    });

    newPostButton.addEventListener('click', function() {
        const title = prompt("Enter discussion title:");
        const content = prompt("Enter discussion content:");
        if (title && content) {
            addNewDiscussion(title, content);
        }
    });

    // Initial render
    renderDiscussions(discussions);
});