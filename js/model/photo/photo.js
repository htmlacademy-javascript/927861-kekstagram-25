import {Comment} from '../index.js';

export default class Photo {
  /**
   * Creates an instance of photo
   * @param {Object} data - raw data object
   */
  constructor(data) {
    this.id = String(data['id']);
    this.url = data['url'];
    this.description = data['description'];
    this.likes = data['likes'];
    this.comments = data['comments'] ?
      data['comments'].map((item) => Comment.parseComment(item)) :
      [];
  }

  /**
   * Creates new Photo object from raw data
   * @param {Object} data - raw data
   * @returns {Photo} - photo
   */
  static parsePhoto(data) {
    return new Photo(data);
  }

  /**
   * Creates new Photo object array from raw data
   * @param {Array<Object>} data - raw data
   * @returns {Array<Photo>} - array of photos
   */
  static parsePhotos(data) {
    return data.map(Photo.parsePhoto);
  }
}
