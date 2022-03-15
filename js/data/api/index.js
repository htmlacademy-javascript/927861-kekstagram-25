import {Photo} from '../../model/index.js';
import {END_POINT} from '../../const/index.js';

const HTTP_RESPONSE_OK = 200;

export default class Api {
  /**
   * Creates an instance of api
   * @param {String} endPoint endpoint URL
   */
  constructor(endPoint = END_POINT) {
    this._endPoint = endPoint;
  }

  /**
   * @returns {Promise<Array<Photo>>} - promise that resolves with array of photos
   */
  getPhotos() {
    return this._send('data')
      .then((response) => response.json())
      .then(Photo.parsePhotos);
  }

  /**
   * Sends request to server
   * @return {Promise<Response>} - promise that resoves to server response if it is successfull
   */
  _send(url) {
    return fetch(`${this._endPoint}/${url}`)
      .then(this._checkStatus)
      .catch((err) => {
        throw err;
      });
  }

  /**
   * Checks server response status
   * @param {Response} response - server response
   * @returns {Response} response if status is Ok
   */
  _checkStatus(response) {
    if (response.status === HTTP_RESPONSE_OK) {
      return response;
    }
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}
