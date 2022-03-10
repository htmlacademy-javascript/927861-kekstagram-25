import {KeyCodes} from '../../const/index.js';

export default class FullSizePhoto {
  constructor() {
    this._bigPictureElement = document.querySelector('.big-picture');
    this._imageElement = this._bigPictureElement.querySelector('.big-picture__img img');
    this._likesCountElement = this._bigPictureElement.querySelector('.likes-count');
    this._commentsCountElement = this._bigPictureElement.querySelector('.comments-count');
    this._descriptionElement = this._bigPictureElement.querySelector('.social__caption');
    this._closeButtonElement = this._bigPictureElement.querySelector('.big-picture__cancel');

    this._closeHandler = null;
  }

  /**
   * Renders full size photo popup
   * @param {Object} photo - photo object
   */
  render(photo) {
    const {url, likes, description, comments} = photo;

    this._imageElement.src = url;
    this._likesCountElement.textContent = likes;
    this._commentsCountElement.textContent = comments.length;
    this._descriptionElement.textContent = description;

    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === KeyCodes.ESC) {
        this._closeHandler();
      }
    });

    this._bigPictureElement.classList.toggle('hidden');
    document.body.classList.toggle('modal-open');
  }

  /**
   * Hides popup
   */
  hide() {
    this._bigPictureElement.classList.toggle('hidden');
    document.body.classList.toggle('modal-open');
    document.removeEventListener('keydown', this._closeHandler);
  }

  /**
   * Sets full size photo close handler
   * @param {Function} handler - popup close callback
   */
  setCloseHandler(handler) {
    this._closeHandler = handler;
    this._closeButtonElement.addEventListener('click', this._closeHandler);
  }

  /**
   * Removes close handler
   */
  removeCloseHandler() {
    this._closeButtonElement.removeEventListener('click', this._closeHandler);
  }

}
