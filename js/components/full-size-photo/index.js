import {Comment} from '../index.js';
import {showPopup, hidePopup, isEscKey} from '../../utils/index.js';

export default class FullSizePhoto {
  constructor() {
    this._bigPictureElement = document.querySelector('.big-picture');
    this._imageElement = this._bigPictureElement.querySelector('.big-picture__img img');
    this._likesCountElement = this._bigPictureElement.querySelector('.likes-count');
    this._descriptionElement = this._bigPictureElement.querySelector('.social__caption');
    this._closeButtonElement = this._bigPictureElement.querySelector('.big-picture__cancel');
    this._commentListElement = this._bigPictureElement.querySelector('.social__comments');
    this._commentsCountElement = this._bigPictureElement.querySelector('.comments-count');
    this._commentsRenderedElement = this._bigPictureElement.querySelector('.comments-count-rendered');
    this._commentsLoaderElement = this._bigPictureElement.querySelector('.comments-loader');

    this._closeHandler = null;
    this._showMoreCommentsHandler = null;
    this._keydownHandler = this._keydownHandler.bind(this);

    this._commentComponents = [];
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
    this._commentListElement.innerHTML = '';

    document.addEventListener('keydown', this._keydownHandler);

    this._commentsLoaderElement.classList.remove('hidden');
    showPopup(this._bigPictureElement);
  }

  /**
   * Renders photo's comments
   * @param {Array} comments - array of comments
   */
  renderComments(comments) {
    this._commentComponents = comments.map((comment) => {
      const commentComponent = new Comment(comment, this._commentListElement);
      commentComponent.render();
      return commentComponent;
    });
    this._commentsRenderedElement.textContent = this._commentListElement.
      querySelectorAll('.social__comment').length;
  }

  /**
   * Sets show more cooments handler
   * @param {Function} handler - show more comments handler
   */
  setShowMoreCommentsHandler(handler) {
    this._showMoreCommentsHandler = handler;
    this._commentsLoaderElement.addEventListener('click', this._showMoreCommentsHandler);
  }

  /**
   * Hides show more comments element
   */
  hideShowMoreComments() {
    this._commentsLoaderElement.classList.add('hidden'); // TODO: move to const show - hide element
  }

  /**
   * Hides popup
   */
  hide() {
    hidePopup(this._bigPictureElement);
    this._commentListElement.innerHTML = '';
    document.removeEventListener('keydown', this._keydownHandler);
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
