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

    this._photosGallery.setOpenFullSizeHandler(
      (photo) => this._fullSizePhotoController.render(photo)
    );
  }

  /**
   * Renders photos gallery
   */
  render() {
    this._photosGallery.render(this._photosModel.getPhotos());
  }
}
