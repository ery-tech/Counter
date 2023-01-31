//constructor with functions for dom elements
const createDomElement = (tag, classes, content) => {
  const el = document.createElement(tag);
  classes.forEach((e) => el.classList.add(e));
  el.innerHTML = content;
  return el;
};
//article
const rootElement = document.querySelector("#body");
const article = createDomElement(
  "article",
  ["main"],
  "Hi, feel free to use the counter!"
);
rootElement.appendChild(article);
//counter
const main = document.querySelector(".main");
const counterDiv = createDomElement("div", ["counter"], " ");
main.append(counterDiv);
//counter-board
const counter = document.querySelector(".counter");
const paragraph = createDomElement("p", ["counter-board"], "0");
counter.append(paragraph);
//buttons-section
const buttonsDiv = createDomElement("div", ["buttons-section"], "");
main.append(buttonsDiv);
//three buttons
const buttonsSection = document.querySelector(".buttons-section");
const BUTTON_MINUS = createDomElement("button", ["decrease-btn"], "-");
const BUTTON_RESET = createDomElement("button", ["reset-btn"], "Reset");
const BUTTON_PLUS = createDomElement("button", ["increase-btn"], "+");
buttonsSection.append(BUTTON_MINUS, BUTTON_RESET, BUTTON_PLUS);

//adding style to dom elements
function updateCss(element, style) {
  for (const property in style) element.style[property] = style[property];
}

updateCss(main, {
  color: "navy",
  "font-family": "'Franklin Gothic Medium', 'Arial Narrow'",
  "font-weight": "normal",
  background: "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
  height: "100vh",
  display: "flex",
  "flex-direction": "column",
  "justify-content": "center",
  "align-items": "center",
});
updateCss(counter, {
  "font-size": "30px",
});
updateCss(paragraph, {
  "padding-top": "2rem",
});

updateCss(buttonsSection, {
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  "padding-top": "2rem",
  "padding-bottom": "2rem",
});

//get the counter-board value
const COUNTER_BOARD = document.querySelector(".counter-board");
//variable holding the counter value
let COUNTER_VALUE = 0;
// function that increases the counter by 1
const INCREASE_COUNTER = () => {
  COUNTER_BOARD.innerHTML = ++COUNTER_VALUE;
};
// function that decreases the counter by 1
const DECREASE_COUNTER = () => {
  COUNTER_BOARD.innerHTML = --COUNTER_VALUE;
};
//reset functionality
const RESET_COUNTER = () => {
  COUNTER_BOARD.innerHTML = 0;
  COUNTER_VALUE = 0;
};
// Added event listener to the buttons with event delegation
buttonsSection.addEventListener("click", (event) => {
  if (event.target.matches(".increase-btn")) {
    INCREASE_COUNTER();
  } else if (event.target.matches(".decrease-btn")) {
    DECREASE_COUNTER();
  } else if (event.target.matches(".reset-btn")) {
    RESET_COUNTER();
  }
});
