const form = document.querySelector('form');
const postsList = document.getElementById('posts-list');
let posts = [];

function addPost(author, text) {
  const post = {
    author,
    text,
    date: new Date().toLocaleString()
  };
  posts.push(post);
  displayPosts();
}

function displayPosts() {
  postsList.innerHTML = '';
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const postEl = document.createElement('li');
    postEl.classList.add('post');
    const authorEl = document.createElement('div');
    authorEl.classList.add('author');
    authorEl.textContent = post.author;
    const dateEl = document.createElement('div');
    dateEl.classList.add('date');
    dateEl.textContent = post.date;
    const textEl = document.createElement('div');
    textEl.classList.add('text');
    textEl.textContent = post.text;
    const replyForm = document.createElement('form');
    replyForm.innerHTML = `
      <label for="reply-author">Author:</label>
      <input type="text" id="reply-author" name="author">
      <br>
      <label for="reply-text">Reply:</label>
      <textarea id="reply-text" name="text"></textarea>
      <br>
      <button type="submit">Reply</button>
    `;
    replyForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const replyAuthor = event.target.elements.author.value;
      const replyText = event.target.elements.text.value;
      if (replyAuthor && replyText) {
        const reply = {
          author: replyAuthor,
          text: replyText,
          date: new Date().toLocaleString()
        };
        post.replies.push(reply);
        displayPosts();
      }
    });
    const repliesList = document.createElement('ul');
    repliesList.classList.add('replies-list');
    for (let j = 0; j < post.replies.length; j++) {
      const reply = post.replies[j];
      const replyEl = document.createElement('li');
      replyEl.classList.add('reply');
      const replyAuthorEl = document.createElement('div');
      replyAuthorEl.classList.add('author');
      replyAuthorEl.textContent = reply.author;
      const replyDateEl = document.createElement('div');
      replyDateEl.classList.add('date');
      replyDateEl.textContent = reply.date;
      const replyTextEl = document.createElement('div');
      replyTextEl.classList.add('text');
      replyTextEl.textContent = reply.text;
      replyEl.appendChild(replyAuthorEl);
      replyEl.appendChild(replyDateEl);
      replyEl.appendChild(replyTextEl);
      repliesList.appendChild(replyEl);
    }
    postEl.appendChild(authorEl);
    postEl.appendChild(dateEl);
    postEl.appendChild(textEl);
    postEl.appendChild(replyForm);
    postEl.appendChild(repliesList);
    postsList.appendChild(postEl);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const author = event.target.elements.author.value;
  const text = event.target.elements.text.value;
  if (author && text) {
    addPost(author, text);
    event.target.elements.author.value = '';
    event.target.elements.text.value = '';
  }
});