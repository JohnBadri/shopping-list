export function createElement(elem, elemText, addClass, textPlaceholder) {
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
