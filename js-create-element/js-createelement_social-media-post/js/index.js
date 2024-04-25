console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("section");
newPost.classList.add("post");

const postText = document.createElement("p");
postText.classList.add("post__content");
postText.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const username = document.createElement("span");
username.classList.add("post__username");
username.textContent = "@username";

const newLikeButton = document.createElement("button");
newLikeButton.classList.add("post__button");
newLikeButton.textContent = "♥ Like";

footer.append(username, newLikeButton);
newPost.append(postText, footer);
document.body.append(newPost);
