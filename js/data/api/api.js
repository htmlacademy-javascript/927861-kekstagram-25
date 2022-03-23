import {Photo} from '../../model/index.js';
import {END_POINT} from '../../const/index.js';

export default class Api {
  /**
   * Creates an instance of api
   * @param {String} endPoint endpoint URL
   */
  constructor(endPoint = END_POINT) {
    this._endPoint = endPoint;
  }

  /**
   * Loads photos from server
   * @returns {Promise<Array<Photo>>} - promise that resolves with array of photos
   */
  getPhotos() {
    return this._send({url: 'data'})
      .then((response) => response.json())
      .then(Photo.parsePhotos);
  }

  /**
   * Uploads photo to server
   * @param {FormData} formData - form data object
   */
  uploadPhoto(formData) {
    return this._send({
      method: 'POST',
      body: formData
    }).then(this._checkStatus)
      .catch((err) => {
        throw err;
      });
  }

  /**
   * Sends request to server
   * @return {Promise<Response>} - promise that resoves to server response if it is successfull
   */
  _send({url='', method = 'GET', body = null, headers = new Headers()}) {
    return fetch(`${this._endPoint}/${url}`, {method, body, headers})
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
    if (response.ok) {
      return response;
    }
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}
