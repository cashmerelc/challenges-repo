console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    const newStar = document.createElement("img");
    if (i <= filledStars) {
      newStar.src = "../assets/star-filled.svg";
      starContainer.append(newStar);
    } else {
      newStar.src = "../assets/star-empty.svg";
      starContainer.append(newStar);
    }
  }
  //--^-- your code here --^--
}

renderStars(1);
