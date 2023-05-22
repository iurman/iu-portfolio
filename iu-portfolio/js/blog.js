// This would be in your blog.js
let currentPage = 1;

function loadPosts(page) {
  // Fetch the data for the given page from your server or a static JSON file
  fetch(`posts/page${page}.json`)
    .then(response => response.json())
    .then(posts => {
      // Clear out the old posts
      document.getElementById('blog-posts').innerHTML = '';
      
      // Add each new post to the page
      for (let post of posts) {
        document.getElementById('blog-posts').innerHTML += `
          <h2><a href="${post.link}">${post.title}</a></h2>
          <p>${post.date}</p>
          <p>${post.summary}</p>
        `;
      }
    });
}

document.getElementById('older-posts').addEventListener('click', () => {
  currentPage++;
  loadPosts(currentPage);
});

document.getElementById('newer-posts').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    loadPosts(currentPage);
  }
});

// Load the initial set of posts
loadPosts(currentPage);
