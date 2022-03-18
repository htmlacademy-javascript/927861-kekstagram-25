import {PhotosGallery} from '../../components/index.js';
import {FullSizePhotoController, UploadPhotoController} from '../../controllers/index.js';

export default class PhotoGalleryController {
  /**
   * Creates an instance of Phtos gallery controller
   * @param {Array} photos - array of photos
   */
  constructor(photos) {
    this._photosModel = photos;
    this._photosGallery = new PhotosGallery();
    this._fullSizePhotoController = new FullSizePhotoController();
    this._uploadPhotoController = new UploadPhotoController();

    this._photoClickedHandler = this._photoClickedHandler.bind(this);
    this._photosGallery.setPhotoClickedHandler(this._photoClickedHandler);

    this._uploadFileHandler = this._uploadFileHandler.bind(this);
    this._photosGallery.setUploadFileHandler(this._uploadFileHandler);
  }

  /**
   * Renders photos gallery
   */
  render() {
    this._photosGallery.render(this._photosModel.getPhotos());
  }

  /**
   * Handles photo click event
   * @param {String} photoId - photo id
   */
  _photoClickedHandler(photoId) {
    this._fullSizePhotoController.render(this._photosModel.getPhotoById(photoId));
  }

  /**
   * Handles file upload
   * @param {File} file - loaded file object
   */
  _uploadFileHandler(file) {
    const fileReader = new FileReader();

    fileReader.addEventListener('load', () => {
      this._uploadPhotoController.render(fileReader.result);
    });
    fileReader.readAsDataURL(file);
  }
}
