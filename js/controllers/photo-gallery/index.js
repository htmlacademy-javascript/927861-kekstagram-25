import {PhotosGallery, FullSizePhoto} from '../../components/index.js';

export default class PhotoGalleryController {
  /**
   * Creates an instance of Phtos gallery controller
   * @param {Array} photos - array of photos
   */
  constructor(photos) {
    this._photos = photos;
    this._photosGallery = new PhotosGallery();
    this._fullSizePhoto = new FullSizePhoto();

    this._fullSizePhoto.setCloseHandler(() => this._fullSizePhoto.hide());
    this._photosGallery.setOpenFullSizeHandler((photo) => this._fullSizePhoto.render(photo));
  }

  /**
   * Renders photos gallery
   */
  render() {
    this._photosGallery.render(this._photos);
  }
}
