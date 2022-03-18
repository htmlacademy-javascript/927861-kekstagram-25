import {UploadPhotoComponent} from '../../components/index.js';
import {FormValidator} from '../../utils/index.js';

export default class UploadPhotoController {
  /**
   * Creates new instance of controller
   */
  constructor() {
    this._uploadPhotoComponent = new UploadPhotoComponent();

    this._closeFormHandler = this._closeFormHandler.bind(this);
    this._uploadPhotoComponent.setCloseHandler(this._closeFormHandler);

    this._submitHandler = this._submitHandler.bind(this);
    this._uploadPhotoComponent.setSubmitHandler(this._submitHandler);

    this._validator = new FormValidator(this._uploadPhotoComponent.getFormElement());
  }

  /**
   * Renders upload photo popup
   * @param {String} fileData - selected photo file data
   */
  render(fileData) {
    this._uploadPhotoComponent.render(fileData);
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
}
