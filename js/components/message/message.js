import {Popup} from '../index.js';

export default class Message extends Popup {

  /**
   * Creates new instance of message
   * @param {String} template - message template name
   */
  constructor(template = 'success') {
    super();

    this._messageTemplate = document.querySelector(`#${template}`)
      .content
      .querySelector(`.${template}`);
    this._messageElement = this._messageTemplate.cloneNode(true);
    this.setCloseButton(this._messageElement.querySelector(`.${template}__button`));

    this._messageInner = this._messageElement.querySelector('.success__inner');
    this._messageInner.addEventListener('click', (evt) => evt.stopPropagation());
  }

  /**
   * Renders message
   */
  render() {
    super.render();

    this._messageElement.addEventListener('click', this.getCloseHandler());
    document.body.insertAdjacentElement('beforeend', this._messageElement);
  }

  /**
   * Hides message
   */
  hide() {
    super.hide();

    this._messageElement.remove();
  }
}
