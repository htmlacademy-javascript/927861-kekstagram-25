import {createPhotos} from '../index.js';
import {END_POINT} from '../../const/index.js';

export default class Api {
  /**
   * Creates an inatance of api
   * @param {String} endPoint endpoint URL
   */
  constructor(endPoint = END_POINT) {
    this._endPoint = endPoint;
  }

  /**
   * @returns {Promise<Array<Photo>>} - promise that resolves with array of photos
   */
  getPhotos() {
    return Promise.resolve(createPhotos());
  }
}
