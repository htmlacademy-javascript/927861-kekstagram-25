/**
 * Shows popup element
 * @param {HTMLElement} element - element
 */
const showPopup = (element) => {
  element.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

export default showPopup;
