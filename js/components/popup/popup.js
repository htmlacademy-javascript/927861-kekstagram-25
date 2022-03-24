import {isEscKey} from '../../utils/index.js';

export default class Popup {
  /**
   * Creates new instance of Popup component
   */
  constructor() {
    if (new.target === Popup) {
      throw new Error('Can\'t instantiate abstract class');
    }

    this._closeHandler = null;
    this._closeButton = null;
    this._keydownHandler = this._keydownHandler.bind(this);
  }

  /**
   * Sets popup close button element
   * @param {HTMLElement} button - button
   */
  setCloseButton(button) {
    this._closeButton = button;
  }

  /**
   * Renders popup component
   */
  render() {
    document.addEventListener('keydown', this._keydownHandler);
  }

  /**
   * Hides popup component
   */
  hide() {
    document.removeEventListener('keydown', this._keydownHandler);
  }

  /**
   * Sets popup close handler callback
   * @param {Function} handler - close handler
   */
  setCloseHandler(handler) {
    this._closeHandler = handler;
    this._closeButton.addEventListener('click', this._closeHandler);
  }

  /**
   * Returns popup close handler
   * @returns {Function} - close handler
   */
  getCloseHandler() {
    return this._closeHandler;
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
