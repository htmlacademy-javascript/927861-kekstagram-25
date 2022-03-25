import {PhotoFilter, PHOTO_FILTER_RANDOM_NUM} from '../../const/index.js';

export default class Photos {
  /**
   * Creates an instance of photos model
   * @param {Object} data - raw data object
   */
  constructor() {
    this._photos = [];
    this._changeHandlers = [];
    this._filter = PhotoFilter.DEFAULT;
  }

  /**
   * Returns the array of photos
   * @returns {Array<Photo>} - array of photos
   */
  getPhotos() {
    return this._filterPhotos();
  }

  /**
   * Sets model's photos
   * @param {Array<Photo>} photos - photos
   */
  setPhotos(photos) {
    this._photos = [...photos];
    // TODO: this._notifyChangeHandlers();
  }

  /**
   * Finds photo by given Id
   * @param {String} id - photo's id
   * @returns {Photo} - photo object
   */
  getPhotoById(id) {
    return this._photos.find((photo) => photo.id === id);
  }

  /**
   * Add model change handler
   * @param {Function} handler - handler function
   */
  addChangeHandler(handler) {
    this._changeHandlers.push(handler);
  }

  /**
   * Calls model change handlers
   */
  _notifyChangeHandlers() {
    this._changeHandlers.forEach((handler) => handler(this.getPhotos()));
  }

  /**
   * @param {String} filter - photo filter
   */
  setFilter(filter) {
    this._filter = filter;
    this._notifyChangeHandlers();
  }

  /**
   * Filters photos with respect to selected filter
   * @returns {Array<Photo>} array of filtered photos
   */
  _filterPhotos() {
    switch (this._filter) {
      case PhotoFilter.RANDOM:
        return [...this._photos]
          .sort(() => 0.5 - Math.random())
          .slice(0, PHOTO_FILTER_RANDOM_NUM);
      case PhotoFilter.MOST_COMMENTED:
        return [...this._photos]
          .sort((photo1, photo2) => photo2.comments.length - photo1.comments.length);
      case PhotoFilter.DEFAULT:
      default:
        return this._photos;
    }
  }
}
