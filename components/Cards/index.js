// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator(headlineText, cardImageUrl, authorName) {
  // <div class="card">
  const card = document.createElement("div");
  card.classList.add("card");

  // <div class="headline">{Headline of article}</div>
  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = headlineText;
  card.appendChild(headline);

  // <div class="author">
  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  card.appendChild(authorDiv);

  // <div class="img-container">
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");
  authorDiv.appendChild(imageContainer);

  // <img src={url of authors image} />
  const cardImage = document.createElement("img");
  cardImage.src = cardImageUrl;
  imageContainer.appendChild(cardImage);

  // <span>By {authors name}</span>
  const author = document.createElement("span");
  author.textContent = authorName;
  authorDiv.appendChild(author);

  return card;
}

const cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // network request finished
    const articles = Object.entries(response.data.articles);

    articles.forEach(([key, article]) => {
      article.forEach(articleData => {
        const newCard = cardCreator(
          articleData.headline,
          articleData.authorPhoto,
          articleData.authorName
        );
        cardsContainer.appendChild(newCard);
      });
    });
  })
  .catch(error => {
    console.log("Network request was unsuccessful");
    console.log(error);
  });
