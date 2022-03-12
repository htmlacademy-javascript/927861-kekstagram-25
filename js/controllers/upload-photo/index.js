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
}
