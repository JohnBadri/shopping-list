import { list } from './main.js';
import { createElement } from './createElement.js';

export function filterList() {
  const inputFilter = document.querySelector('.input-filter');
  inputFilter.addEventListener('keyup', showFilter);
}

function showFilter() {
  const inputFilter = document.querySelector('.input-filter');
  const ul = document.querySelector('.item-list');
  const typeValue = inputFilter.value.toLowerCase();
  list.filteredListItems = list.listItems.filter((item) =>
    item.includes(typeValue)
  );

  if (typeValue.length > 0 && list.filteredListItems.length === 0) {
    ul.textContent = 'Filter returned 0 results';
  } else if (typeValue.length > 0) {
    ul.innerHTML = '';
    list.filteredListItems.forEach((item) => {
      ul.appendChild(
        createElement(
          'li',
          item.charAt(0).toUpperCase() + item.slice(1),
          'list'
        )
      ).appendChild(createElement('i', '✖', 'icon'));
    });
  } else {
    ul.innerHTML = '';
    list.listItems.forEach((item) => {
      ul.appendChild(
        createElement(
          'li',
          item.charAt(0).toUpperCase() + item.slice(1),
          'list'
        )
      ).appendChild(createElement('i', '✖', 'icon'));
    });
  }

  console.log(list.filteredListItems, typeValue);
}
