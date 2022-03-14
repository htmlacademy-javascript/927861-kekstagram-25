import hideElement from './hide-element.js';

/**
 * Hides popup element
 * @param {HTMLElement} element - element
 */
const hidePopup = (element) => {
  hideElement(element);
  document.body.classList.remove('modal-open');
};

export default hidePopup;
