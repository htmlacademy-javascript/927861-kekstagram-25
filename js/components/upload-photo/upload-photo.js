import {showPopup, hidePopup, isEscKey} from '../../utils/index.js';

export default class UploadPhoto {
  /**
   * Created an instance of component
   */
  constructor() {
    this._uploadForm = document.querySelector('.img-upload__form');
    this._uploadFileInput = this._uploadForm.querySelector('#upload-file');
    this._uploadOverlay = this._uploadForm.querySelector('.img-upload__overlay');
    this._closeButton = this._uploadForm.querySelector('.img-upload__cancel');
    this._previewImage = this._uploadForm.querySelector('.img-upload__preview img');
    this._hashTagsInput = this._uploadForm.querySelector('.text__hashtags');
    this._descriptionInput = this._uploadForm.querySelector('.text__description');

    this._closeHandler = null;
    this._submitHandler = null;

    this._keydownHandler = this._keydownHandler.bind(this);

    this._hashTagsInput.addEventListener('keydown', this._stopEventPropagation);
    this._descriptionInput.addEventListener('keydown', this._stopEventPropagation);
  }

  /**
   * Renders upload photo form
   * @param {String} source - preview image source string
   */
  render(source) {
    document.addEventListener('keydown', this._keydownHandler);
    this._previewImage.src = source;
    showPopup(this._uploadOverlay);
  }

  /**
   * Hides upload photo form
   */
  hide() {
    this._uploadFileInput.value = '';
    this._descriptionInput.value = '';
    this._hashTagsInput.value = '';

    document.removeEventListener('keydown', this._keydownHandler);
    hidePopup(this._uploadOverlay);
  }

  /**
   * Sets close handler
   * @param {Function} handler - popup close callback
   */
  setCloseHandler(handler) {
    this._closeHandler = handler;
    this._closeButton.addEventListener('click', this._closeHandler);
  }

  /**
   * Sets submit handler
   * @param {Function} handler - form submit callback
   */
  setSubmitHandler(handler) {
    this._submitHandler = handler;
    this._uploadForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler();
    });
  }

  /**
   * Returns upload form html element
   */
  getFormElement() {
    return this._uploadForm;
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

  /**
   * Stops event propagation
   * @param {Event} evt - event object
   */
  _stopEventPropagation(evt) {
    evt.stopPropagation();
  }
}