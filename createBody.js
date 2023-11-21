function createElement(elem, elemText, addClass, textPlaceholder) {
  const tag = document.createElement(elem);
  if (elemText) {
    tag.textContent = elemText;
  }
  if (addClass) {
    tag.classList.add(addClass);
  }
  if (elem === 'input') {
    const div = document.createElement('div');
    tag.placeholder = textPlaceholder;
    div.appendChild(tag);
    return div;
  }
  return tag;
}

export function createBody(parent) {
  parent.appendChild(createElement('h1', 'Shopping List'));
  parent.appendChild(createElement('input', null, 'input-item', 'Input item'));
  parent.appendChild(createElement('button', '+ Add Item', 'button-add'));
  parent.appendChild(
    createElement('input', null, 'input-filter', 'Filter items')
  );
  parent.appendChild(createElement('ul', null, 'item-list'));
  parent.appendChild(createElement('button', 'Clear All', 'button-clear'));
}
