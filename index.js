import {questions} from "./data.js";

const p = document.getElementById('root');
const btn = document.querySelector('.button');
const listContainer = document.querySelector('.repeat-list-container');
const btnYes = document.querySelector('.yes-btn');
const btnNo = document.querySelector('.no-btn');
const doneQst = document.querySelector('.done-qst');
const clearBtn = document.querySelector('.clear-btn');
const clearList = document.querySelector('.clear-list-btn');
const repeatList = document.querySelector('.button-repeat');

let count = 0;
p.innerText = questions[1];
p.className = "text"

btn.addEventListener('click', getRandom)
btnNo.addEventListener('click', addToList);
btnYes.addEventListener('click', addCount);
clearBtn.addEventListener('click', clearCount);
clearList.addEventListener('click', clearListEl);
repeatList.addEventListener('click', repeatListQst);

function clearListEl() {
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }}

function addCount() {
  count++
  doneQst.innerHTML = count;
  getRandom();
}

function clearCount() {
  count = 0
  doneQst.innerHTML = count;
}


function addToList() {
  const listElement = document.createElement('li')
  listContainer.appendChild(listElement);
  listElement.innerText = p.innerText;
  listElement.className = 'list-element'
}


function getRandom() {
  const length = Object.keys(questions).length;
  const randInx = Math.floor(Math.random() * length)
  p.innerText = questions[randInx];
  return questions[randInx]
}

function repeatListQst() {
  const listElements = document.querySelectorAll('.list-element');
  const length = listElements.length;
  if (length === 0) {
    console.log("No list elements found.");
    getRandom()
    return;
  }
  const randInx = Math.floor(Math.random() * length);
  const randomElement = listElements[randInx];
  p.innerText = randomElement.innerText;
  listContainer.removeChild(randomElement)
}