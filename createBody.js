import { createElement } from './createElement.js';

export function createBody(parent) {
  parent.appendChild(createElement('h1', 'Shopping List'));
  parent.appendChild(createElement('input', null, 'input-item', 'Input item'));
  parent.appendChild(createElement('button', '+ Add Item', 'button-add'));
  parent.appendChild(
    createElement('input', null, 'input-filter', 'Filter items')
  );
  parent.appendChild(createElement('ul', 'List is empty!', 'item-list'));
  parent.appendChild(createElement('button', 'Clear All', 'button-clear'));
}
