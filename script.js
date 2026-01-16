// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.querySelector('header').classList.toggle('dark');
});

// Search Functionality
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const posts = document.querySelectorAll('.blog-post');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    posts.forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        const content = post.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || content.includes(query)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
});

// Comment Functionality (using localStorage for persistence)
function loadComments(postId) {
    const comments = JSON.parse(localStorage.getItem(`comments-${postId}`)) || [];
    const commentsDiv = document.getElementById(`comments-${postId}`);
    commentsDiv.innerHTML = '';
    comments.forEach(comment => {
        const commentEl = document.createElement('div');
        commentEl.innerHTML = `<strong>${comment.name}:</strong> ${comment.message}`;
        commentsDiv.appendChild(commentEl);
    });
}

function saveComment(postId, name, message) {
    const comments = JSON.parse(localStorage.getItem(`comments-${postId}`)) || [];
    comments.push({ name, message });
    localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));
    loadComments(postId);
}

// Attach event listeners to comment forms
['post1', 'post2', 'post3'].forEach(postId => {
    loadComments(postId); // Load existing comments on page load
    const form = document.getElementById(`commentForm-${postId}`);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById(`name-${postId}`).value;
        const message = document.getElementById(`message-${postId}`).value;
        if (name && message) {
            saveComment(postId, name, message);
            form.reset();
        }
    });
});
