import {isEscKey} from '../../utils/index.js';

export default class Message {

  /**
   * Creates new instance of message
   * @param {String} template - message template name
   */
  constructor(template = 'success') {
    this._messageTemplate = document.querySelector(`#${template}`)
      .content
      .querySelector(`.${template}`);
    this._messageElement = this._messageTemplate.cloneNode(true);
    this._closeButton = this._messageElement.querySelector(`.${template}__button`);

    this._closeHandler = null;
    this._keydownHandler = this._keydownHandler.bind(this);
  }

  /**
   * Renders message
   */
  render() {
    document.addEventListener('keydown', this._keydownHandler);
    document.body.insertAdjacentElement('beforeend', this._messageElement);
  }

  /**
   * Hides message
   */
  hide() {
    document.removeEventListener('keydown', this._keydownHandler);
    this._messageElement.remove();
  }

  /**
   * Sets message close handler callback
   * @param {Function} handler - close handler
   */
  setCloseHandler(handler) {
    this._closeHandler = handler;
    this._closeButton.addEventListener('click', this._closeHandler);
  }

  /**
   * Handler for document key down event
   * @param {KeyboardEvent} evt - event object
   */
  _keydownHandler(evt) {
    if (isEscKey(evt.key)) {
      this._closeHandler();
    }
  }
}
