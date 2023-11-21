import './style.css';
import { createBody } from './createBody.js';
import { addRemoveList } from './addRemoveList.js';

const main = document.querySelector('#app');

createBody(main);
addRemoveList();
