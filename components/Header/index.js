// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(dateText, headingText, temperatureText) {
  // <div class="header">
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  // <span class="date">SMARCH 28, 2019</span>
  const date = document.createElement("span");
  date.classList.add("date");
  date.textContent = dateText;
  headerDiv.appendChild(date);

  // <h1>Lambda Times</h1>
  const heading = document.createElement("h1");
  heading.textContent = headingText;
  headerDiv.appendChild(heading);

  // <span class="temp">98°</span>
  const temperature = document.createElement("span");
  temperature.classList.add("temp");
  temperature.textContent = temperatureText;
  headerDiv.appendChild(temperature);

  return headerDiv;
}

const headerContainer = document.querySelector(".header-container");
// console.log(headerContainer);

const header1 = Header("SMARCH 28, 2019", "Lambda Times", "98°");
// console.log(header1);

headerContainer.appendChild(header1);
