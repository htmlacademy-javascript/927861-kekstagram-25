import {showPopup, hidePopup} from '../../utils/index.js';

export default class UploadPhotoComponent {
  /**
   * Created an instance of component
   */
  constructor() {
    this._uploadForm = document.querySelector('.img-upload__form');
    this._uploadFileInput = this._uploadForm.querySelector('#upload-file');
    this._uploadOverlay = this._uploadForm.querySelector('.img-upload__overlay');
    this._closeButton = this._uploadForm.querySelector('.img-upload__cancel');
    this._previewImage = this._uploadForm.querySelector('.img-upload__preview img');

    this._uploadFileHandler = null;
    this._closeHandler = null;
    this._keydownHandler = this._keydownHandler.bind(this);
  }

  /**
   * Renders upload photo form
   */
  render() {
    document.addEventListener('keydown', this._keydownHandler);
    showPopup(this._uploadOverlay);
  }

  /**
   * Hides upload photo form
   */
  hide() {
    this._uploadFileInput.value = '';

    document.removeEventListener('keydown', this._keydownHandler);
    hidePopup(this._uploadOverlay);
  }

  /**
   * Sets preview image source string
   * @param {String} source - preview image source string
   */
  setPreviewImage(source) {
    this._previewImage.src = source;
  }

  /**
   * Sets upload file handler
   * @param {Function} handler - upload file callback
   */
  setUploadFileHandler(handler) {
    this._uploadFileHandler = handler;
    this._uploadFileInput.addEventListener(
      'change',
      () => this._uploadFileHandler(this._uploadFileInput.files[0])
    );
  }

  /**
   * Sets close handler
   * @param {Function} handler - upload file callback
   */
  setCloseHandler(handler) {
    this._closeHandler = handler;
    this._closeButton.addEventListener('click', this._closeHandler);
  }

  /**
   * Handler for document key down event
   * @param {KeyboardEvent} evt - event object
   */
  _keydownHandler(evt) { // TODO: make separate function
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      this._closeHandler();
    }
  }
}
