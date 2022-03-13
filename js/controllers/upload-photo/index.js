import {UploadPhotoComponent} from '../../components/index.js';

export default class UploadPhotoController {
  /**
   * Created new instance of controller
   */
  constructor() {
    this._uploadPhotoComponent = new UploadPhotoComponent();

    this._uploadFileHandler = this._uploadFileHandler.bind(this);
    this._uploadPhotoComponent.setUploadFileHandler(this._uploadFileHandler);

    this._closeFormHandler = this._closeFormHandler.bind(this);
    this._uploadPhotoComponent.setCloseHandler(this._closeFormHandler);

    this._submitHandler = this._submitHandler.bind(this);
    this._uploadPhotoComponent.setSubmitHandler(this._submitHandler);

    this._initFormValidation();
  }

  /**
   * Handles file upload
   * @param {File} file - loaded file object
   */
  _uploadFileHandler(file) {
    const fileReader = new FileReader();

    fileReader.addEventListener('load', () => {
      this._uploadPhotoComponent.setPreviewImage(fileReader.result);
      this._uploadPhotoComponent.render();
    });
    fileReader.readAsDataURL(file);
  }

  /**
   * Handles upload form close
   */
  _closeFormHandler() {
    this._uploadPhotoComponent.hide();
  }

  /**
   * Form submit handler
   */
  _submitHandler() {
    if (this._validator.validate()) {
      this._uploadPhotoComponent.getFormElement().submit();
    }
  }

  /**
   * Creates and instance of validator
   */
  _initFormValidation() {
    Pristine.addValidator('hashtags-format', this._hashTagsFormatValidator, null, 1, true);
    Pristine.addValidator('hashtags-equal', this._hashTagsEqualValidator, null, 2, true);
    Pristine.addValidator('hashtags-count', this._hashTagsCountValidator, null, 3, true);

    this._validator = new Pristine(this._uploadPhotoComponent.getFormElement(), {
      classTo: 'input-label',
      errorClass: 'has-error',
      errorTextParent: 'input-label',
      errorTextTag: 'output',
      errorTextClass: 'input-error',
    });
  }

  /**
   * Validates number of hashtags
   * @param {String} value - hashtags
   */
  _hashTagsCountValidator(value) {
    return value.split(' ').length <= 5; // TODO: add separator to const
  }

  /**
   * Validates hashtags format
   * @param {String} value - hashtags
   */
  _hashTagsFormatValidator(value) {
    const hashTagRegExp = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/; // TODO: add RE to const
    const hashTags = value.split(' '); // TODO: add to const

    return hashTags[0] ?
      hashTags.every((hashTag) => hashTagRegExp.test(hashTag)) :
      true;
  }

  /**
   * Validates equal hashtags
   * @param {String} value - hashtags
   */
  _hashTagsEqualValidator(value) {
    const hashTags = value.toUpperCase().split(' '); // TODO: add to const
    return (new Set(hashTags)).size === hashTags.length;
  }
}
