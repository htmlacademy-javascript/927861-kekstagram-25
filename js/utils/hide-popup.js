/**
 * Hides popup element
 * @param {HTMLElement} element - element
 */
const hidePopup = (element) => {
  element.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

export default hidePopup;
