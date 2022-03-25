import {PhotoScaleChange} from '../../const/index.js';
import {Popup} from '../index.js';
import {showPopup, hidePopup} from '../../utils/index.js';

export default class UploadPhoto extends Popup {
  /**
   * Created an instance of component
   */
  constructor() {
    super();

    this._uploadForm = document.querySelector('.img-upload__form');
    this._uploadFileInput = this._uploadForm.querySelector('#upload-file');
    this._uploadOverlay = this._uploadForm.querySelector('.img-upload__overlay');
    this._previewImage = this._uploadForm.querySelector('.img-upload__preview img');
    this._hashTagsInput = this._uploadForm.querySelector('.text__hashtags');
    this._descriptionInput = this._uploadForm.querySelector('.text__description');
    this._scaleUpButton = this._uploadForm.querySelector('.scale__control--bigger');
    this._scaleDownButton = this._uploadForm.querySelector('.scale__control--smaller');
    this._scaleValue = this._uploadForm.querySelector('.scale__control--value');
    this._effectsList = this._uploadForm.querySelector('.effects__list');
    this._noEffectInput = this._effectsList.querySelector('#effect-none');
    this._effectsSliderElement = this._uploadForm.querySelector('.effect-level__slider');
    this._effectLevelInput = this._uploadForm.querySelector('.effect-level__value');
    this._uploadButton = this._uploadForm.querySelector('.img-upload__submit');

    this.setCloseButton(this._uploadForm.querySelector('.img-upload__cancel'));

    this._submitHandler = null;
    this._photoScaleChangeHandler = null;
    this._effectChangeHandler = null;

    this._hashTagsInput.addEventListener('keydown', this._stopEventPropagation);
    this._descriptionInput.addEventListener('keydown', this._stopEventPropagation);
  }

  /**
   * Renders upload photo form
   * @param {String} source - preview image source string
   */
  render(source) {
    super.render();

    this._previewImage.src = source;
    showPopup(this._uploadOverlay);
  }

  /**
   * Hides upload photo form
   */
  hide() {
    super.hide();

    this._uploadFileInput.value = '';
    this._descriptionInput.value = '';
    this._hashTagsInput.value = '';
    this._noEffectInput.checked = true;
    this._uploadButton.disabled = false;

    hidePopup(this._uploadOverlay);
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
   * Sets photo scale change handler
   * @param {Function} handler - photo scale change handler
   */
  setPhotoScaleChangeHandler(handler) {
    this._photoScaleChangeHandler = handler;
    this._scaleUpButton.addEventListener('click', () => {
      this._photoScaleChangeHandler(PhotoScaleChange.UP);
    });
    this._scaleDownButton.addEventListener('click', () => {
      this._photoScaleChangeHandler(PhotoScaleChange.DOWN);
    });
  }

  /**
   * Sets effect change handler
   * @param {Function} handler - effects change handler
   */
  setEffectChangeHandler(handler) {
    this._effectChangeHandler = handler;
    this._effectsList.addEventListener('change', (evt) => {
      this._effectChangeHandler(evt.target.value);
    });
  }

  /**
   * Sets photo scale
   * @param {Number} scale - photo scale
   */
  setPhotoScale(scale) {
    this._scaleValue.value = `${scale}%`;
    this._previewImage.style.transform = `scale(${scale / 100})`;
  }

  /**
   * Sets photo image effect
   * @param {String} newEffect - new effect
   * @param {String} oldEffect - old effect
   */
  setImageEffect(newEffect, oldEffect) {
    this._previewImage.classList.remove(`effects__preview--${oldEffect}`);
    this._previewImage.classList.add(`effects__preview--${newEffect}`);
  }

  /**
   * Sets image filter
   * @param {String} effectLevel - effect level value
   * @param {String} filter - image filter
   */
  setImageFilter(effectLevel = '', filter = '') {
    this._effectLevelInput.value = effectLevel;
    this._previewImage.style.filter = filter;
  }

  /**
   * Returns upload form html element
   * @returns {HTMLFormElement} - upload photo form element
   */
  getFormElement() {
    return this._uploadForm;
  }

  /**
   * Returns effects slider element
   * @returns {HTMLElement} - effects slider element
   */
  getSliderElement() {
    return this._effectsSliderElement;
  }

  /**
   * Disables upload button
   */
  disableUploadButton() {
    this._uploadButton.disabled = true;
  }

  /**
   * Stops event propagation
   * @param {Event} evt - event object
   */
  _stopEventPropagation(evt) {
    evt.stopPropagation();
  }
}
