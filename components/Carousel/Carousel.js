/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container");

const imageArray = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];

function carouselCreator(array) {
  // <div class="carousel"></div>
  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel");

  // <div class="left-button"> < </div>
  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");
  leftButton.textContent = "<";
  carouselDiv.appendChild(leftButton);

  // carousel images
  const carouselImage0 = document.createElement("img");
  carouselImage0.src = array[0];
  carouselImage0.classList.add("current-image");
  carouselDiv.appendChild(carouselImage0);

  const carouselImage1 = document.createElement("img");
  carouselImage1.src = array[1];
  carouselDiv.appendChild(carouselImage1);

  const carouselImage2 = document.createElement("img");
  carouselImage2.src = array[2];
  carouselDiv.appendChild(carouselImage2);

  const carouselImage3 = document.createElement("img");
  carouselImage3.src = array[3];
  carouselDiv.appendChild(carouselImage3);

  // <div class="right-button"> > </div>
  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");
  rightButton.textContent = ">";
  carouselDiv.appendChild(rightButton);

  var counter = 0;
  var amount = array.length;
  var current = carouselImage0;
  // carouselContainer.classList.add("active");
  function navigate(direction) {
    current.classList.remove("current-image");
    counter = counter + direction;
    if (direction === -1 && counter < 0) {
      counter = amount - 1;
    }
    if (direction === 1 && !array[counter]) {
      counter = 0;
    }
    current = carouselImage0;
    current.classList.add("current-image");
    console.log(current);
  }
  rightButton.addEventListener("click", function(ev) {
    navigate(1);
  });
  leftButton.addEventListener("click", function(ev) {
    navigate(-1);
  });
  navigate(0);

  return carouselDiv;
}

const carousel = carouselCreator(imageArray);

carouselContainer.appendChild(carousel);
