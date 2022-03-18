export default class Comment {
  /**
   * Creates an instance of comment component
   * @param {Object} comment - comment object
   * @param {HTMLElement} parentElement - parent HTML Element
   */
  constructor(comment, parentElement) {
    this._comment = comment;
    this._parentElement = parentElement;
  }

  render() {
    const newElement = document.createElement('div');
    newElement.innerHTML = this._getHTML();
    this._parentElement.insertAdjacentElement('beforeend', newElement.firstChild);
  }

  /**
   * Returns HTML filled with comment's data
   * @returns HTML string filled with data
   */
  _getHTML() {
    const {avatar, message, name} = this._comment;
    return `<li class="social__comment">
              <img
                class="social__picture"
                src="${avatar}"
                alt="${name}"
                width="35" height="35">
              <p class="social__text">${message}</p>
            </li>`;
  }
}
