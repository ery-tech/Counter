//constructor with functions for dom elements
const createDomElement = (tag, classes, content) => {
    const el = document.createElement(tag);
    classes.forEach(e => el.classList.add(e));
    el.innerHTML= content;
    return el;
  }
  //article
  const rootElement = document.querySelector('#body');
  const newElement = 
  createDomElement('article' , ['main'],"Hi, feel free to use the counter!");
  rootElement.appendChild(newElement);
  //counter
  const main = document.querySelector('.main');
  const newElement2 = createDomElement('div',['counter']," " );
  main.append(newElement2);
  //counter-board
  const counter = document.querySelector('.counter');
  const paragraph = createDomElement('p',['counter-board'],'0');
  counter.append(paragraph);
//buttons-section
  const newElement3 = createDomElement('div',['buttons-section'],'');
  main.append(newElement3);
//three buttons
  const buttonsSection = document.querySelector('.buttons-section');
  const button1 = createDomElement('button',['decrease-btn'],'-');
  const button2 = createDomElement('button', ['reset-btn'],'Reset');
  const button3 = createDomElement('button',['increase-btn'],'+');
  buttonsSection.append(button1,button2,button3);

 //adding style to dom elements
  function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

css(main,{ 'color':'navy',
  'font-family': "'Franklin Gothic Medium', 'Arial Narrow'",
  'font-weight' : 'normal',
  'background': 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)',
    'height' : '100vh',
    'display' : 'flex',
    'flex-direction' : 'column',
    'justify-content': 'center',
    'align-items'   : 'center'
})
css(paragraph,{
   'font-size': '30px'
})




css(newElement2,{
  'display': 'flex',
  'justify-content' : 'center',
  'align-items': 'center',
  'padding-top' : '2rem',
  'padding-bottom' : '2rem'
})
  
//get the increase and decrease button 
const incrementButton = document.querySelector('.increase-btn');
const decrementButton = document.querySelector('.decrease-btn');
const resetButton = document.querySelector('.reset-btn');
//get the counter-board value 
const counterBoard = document.querySelector('.counter-board');
//variable holding the counter value
let counterValue = 0;
// function that increases the counter by 1
const increaseCounter = () =>{
  counterBoard.innerHTML = ++counterValue;
}
// function that decreases the counter by 1
const decreaseCounter = () =>{
  counterBoard.innerHTML = --counterValue;
}
//reset functionality
const resetCounter = () =>{
  
  counterBoard.innerHTML = 0;
  counterValue = 0;
}
// Add event listener to the buttons
incrementButton.addEventListener('click', increaseCounter);
decrementButton.addEventListener('click', decreaseCounter);
resetButton.addEventListener('click', resetCounter);

