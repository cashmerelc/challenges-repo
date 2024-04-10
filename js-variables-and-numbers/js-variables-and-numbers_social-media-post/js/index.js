console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
let myTitle = "Hello World!";
let myText = "This is my first post.";
let numberOfLikes = 1;
let postAuthor = "Derek";
let isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log("Title: " + myTitle);
console.log("Text: " + myText);
console.log("Likes: " + numberOfLikes);
console.log("Author: " + postAuthor);
console.log("Reported: " + isReported);

numberOfLikes++;
console.log("Likes: " + numberOfLikes);

// --^-- write your code here --^--
