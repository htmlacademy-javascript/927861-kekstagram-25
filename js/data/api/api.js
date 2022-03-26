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
  async getPhotos() {
    const response = await this._send({url: 'data'});
    const jsonData = await response.json();
    return Photo.parsePhotos(jsonData);
  }

  /**
   * Uploads photo to server
   * @param {FormData} formData - form data object
   */
  async uploadPhoto(formData) {
    await this._send({method: 'POST', body: formData});
  }

  /**
   * Sends request to server
   * @return {Promise<Response>} - promise that resoves to server response if it is successfull
   */
  async _send({url='', method = 'GET', body = null, headers = new Headers()}) {
    const response = await fetch(`${this._endPoint}/${url}`, {method, body, headers});
    return this._checkStatus(response);
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
