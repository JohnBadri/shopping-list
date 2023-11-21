import './style.css';
import { createBody } from './createBody.js';
import { addRemoveList } from './addRemoveList.js';
import { filterList } from './filterList.js';

const main = document.querySelector('#app');
export const list = {
  listItems: [],
  filteredListItems: [],
};

createBody(main);
addRemoveList();
filterList();
