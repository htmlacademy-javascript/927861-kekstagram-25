import showElement from './show-element.js';

/**
 * Shows popup element
 * @param {HTMLElement} element - element
 */
const showPopup = (element) => {
  showElement(element);
  document.body.classList.add('modal-open');
};

export default showPopup;
