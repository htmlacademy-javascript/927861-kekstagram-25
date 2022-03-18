export default class Photos {
  /**
   * Creates an instance of photos model
   * @param {Object} data - raw data object
   */
  constructor() {
    this._photos = [];
  }

  /**
   * Returns the array of photos
   * @returns {Array<Photo>} - array of photos
   */
  getPhotos() {
    return this._photos;
  }

  /**
   * Sets model's photos
   * @param {Iterable<Photo>} photos - photos
   */
  setPhotos(photos) {
    this._photos = [...photos];
  }

  /**
   * Finds photo by given Id
   * @param {String} id - photo's id
   * @returns {Photo} - photo object
   */
  getPhotoById(id) {
    return this._photos.find((photo) => photo.id === id);
  }
}
