import { createElement } from './createElement.js';

let list = [];

export function addRemoveList() {
  const buttonAdd = document.querySelector('.button-add');
  const buttonRemove = document.querySelector('.button-clear');
  const ul = document.querySelector('.item-list');

  buttonAdd.addEventListener('click', addList);
  buttonRemove.addEventListener('click', removeList);
  ul.addEventListener('click', removeItem);
}

function addList() {
  const input = document.querySelector('.input-item');
  const ul = document.querySelector('.item-list');
  if (ul.textContent === 'List is empty!') {
    ul.textContent = '';
  }
  if (input.value) {
    list.push(input.value);
    ul.appendChild(createElement('li', input.value, 'list')).appendChild(
      createElement('i', '✖', 'icon')
    );
    input.value = '';
  }
}

function removeList() {
  if (list.length !== 0) {
    list = [];
    const ul = document.querySelector('.item-list');
    ul.innerHTML = '';
    ul.textContent = 'List is empty!';
  }
}

function removeItem(event) {
  let parentElement = event.target.parentNode;
  if (event.target.tagName === 'I') {
    let count = 0;
    while (parentElement.previousElementSibling != null) {
      count++;
      parentElement = parentElement.previousElementSibling;
    }
    event.target.parentElement.remove();
    list = list.filter((item, index) => index !== count);
  }
}
