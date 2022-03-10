import {FullSizePhoto} from '../../components/index.js';

export default class FullSizePhotoController {

  /**
   * Creates new instance of FullSizePhotoController
   */
  constructor() {
    this._fullSizePhotoComponent = new FullSizePhoto();
    this._fullSizePhotoComponent.setCloseHandler(() => this._fullSizePhotoComponent.hide());
  }

  /**
   * Renders full size photo popup
   * @param {Object} photo - photo object
   */
  render(photo) {
    this._fullSizePhotoComponent.render(photo);
  }
}
