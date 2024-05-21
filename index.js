import {questions} from "./data.js";
import {questions2} from "./coreJS2.js";

function createElements( className) {
  return document.querySelector(className);
}

function eventClick(el, namefunction) {
  return el.addEventListener('click', namefunction)
}

const modalWindow = createElements('.modal-window');
const modalContent = createElements('.modal-answer');
const p = document.getElementById('root');
const btn = createElements('.button');
const listContainer = createElements('.repeat-list-container');
const btnYes = createElements('.yes-btn');
const btnNo = createElements('.no-btn');
const btnNewQst = createElements('.NewQst');
const doneQst = createElements('.done-qst');
const clearBtn = createElements('.clear-btn');
const clearList = createElements('.clear-list-btn');
const repeatList = createElements('.button-repeat');
const closeModal =createElements('.close-modal');
const btnWatch = createElements('.btn-watch');

eventClick(btn,getRandom);
eventClick(btnNo,addToList);
eventClick(btnYes,addCount);
eventClick(clearBtn,clearCount);
eventClick(clearList,clearListEl);
eventClick(repeatList,repeatListQst);
eventClick(btnNewQst,getNewQst);
eventClick(closeModal,closeModalWindow);
eventClick(btnWatch,showAnswer);

let count = 0;
p.innerText = questions[1];
p.className = "text"

function closeModalWindow() {
  modalWindow.style.display = "none";
}

function clearListEl() {
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }}

function addCount() {
  count++
  doneQst.innerHTML = count;
  // getRandom();
}

function clearCount() {
  count = 0
  doneQst.innerHTML = count;
}

let indx = 0;

function getNewQst(){
  const length = Object.keys(questions2).length;
  indx ++;
  const currentQst = questions2[indx].qst;
  p.innerText = currentQst;
  return currentQst;
}

function addToList() {
  const listElement = document.createElement('li')
  listContainer.appendChild(listElement);
  listElement.innerText = p.innerText;
  listElement.className = 'list-element';
  modalWindow.style.display = "flex";
  modalContent.innerText = `${p.innerText}\n\nAnswer: ${questions2[indx].answ}`;
}

function showAnswer() {
  modalWindow.style.display = "flex";
  modalContent.innerText = `${p.innerText}\n\nAnswer: ${questions2[indx].answ}`;
}

function getRandom() {
  const length = Object.keys(questions).length;
  const randInx = Math.floor(Math.random() * length)
  p.innerText = questions[randInx];
  return questions[randInx]
}

function repeatListQst() {
  const listElements = createElementsAll('.list-element');
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