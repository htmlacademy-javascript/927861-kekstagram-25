import {MAX_HASHTAGS_NUM, HASHTAGS_SPLITTER, HASHTAG_REG_EXP} from '../const/index.js';

export default class FormValidator {
  /**
   * Creates new instance of validator for given form
   * @param {HTMLFormElement} formElement - form element
   */
  constructor(formElement) {
    Pristine.addValidator('hashtags-format', this._hashTagsFormatValidator, null, 1, true);
    Pristine.addValidator('hashtags-equal', this._hashTagsEqualValidator, null, 2, true);
    Pristine.addValidator('hashtags-count', this._hashTagsCountValidator, null, 3, true);

    this._validator = new Pristine(formElement, {
      classTo: 'input-label',
      errorClass: 'has-error',
      errorTextParent: 'input-label',
      errorTextTag: 'output',
      errorTextClass: 'input-error',
    });
  }

  /**
   * Validates form
   * @returns {Boolean} - true if form is valid
   */
  validate() {
    return this._validator.validate();
  }

  /**
   * Resets errors
   */
  reset() {
    this._validator.reset();
  }

  /**
   * Validates number of hashtags
   * @param {String} value - hashtags
   */
  _hashTagsCountValidator(value) {
    return value.split(HASHTAGS_SPLITTER).length <= MAX_HASHTAGS_NUM;
  }

  /**
   * Validates hashtags format
   * @param {String} value - hashtags
   */
  _hashTagsFormatValidator(value) {
    const hashTags = value.split(HASHTAGS_SPLITTER);

    return hashTags[0] ?
      hashTags.every((hashTag) => HASHTAG_REG_EXP.test(hashTag)) :
      true;
  }

  /**
   * Validates equal hashtags
   * @param {String} value - hashtags
   */
  _hashTagsEqualValidator(value) {
    const hashTags = value.toUpperCase().split(HASHTAGS_SPLITTER);
    return (new Set(hashTags)).size === hashTags.length;
  }
}
