import {UploadPhoto} from '../../components/index.js';
import {FormValidator} from '../../utils/index.js';
import {PhotoScale, PhotoScaleChange} from '../../const/index.js';

export default class UploadPhotoController {
  /**
   * Creates new instance of controller
   */
  constructor() {
    this._uploadPhotoComponent = new UploadPhoto();

    this._closeFormHandler = this._closeFormHandler.bind(this);
    this._uploadPhotoComponent.setCloseHandler(this._closeFormHandler);

    this._submitHandler = this._submitHandler.bind(this);
    this._uploadPhotoComponent.setSubmitHandler(this._submitHandler);

    this._validator = new FormValidator(this._uploadPhotoComponent.getFormElement());

    this._photoScale = PhotoScale.DEFAULT;
    this._photoScaleChangeHandler = this._photoScaleChangeHandler.bind(this);
    this._uploadPhotoComponent.setPhotoScaleChangeHandler(this._photoScaleChangeHandler);

    this._currentEffect = 'none'; // TODO: add to const
    this._effectsChangeHandler = this._effectsChangeHandler.bind(this);
    this._uploadPhotoComponent.setEffectChangeHandler(this._effectsChangeHandler);
  }

  /**
   * Renders upload photo popup
   * @param {String} fileData - selected photo file data
   */
  render(fileData) {
    this._photoScale = PhotoScale.DEFAULT;
    this._uploadPhotoComponent.setPhotoScale(this._photoScale);

    this._uploadPhotoComponent.changeImageEffect('none', this._currentEffect);
    this._currentEffect = 'none'; // TODO: add to const

    this._uploadPhotoComponent.render(fileData);
  }

  /**
   * Handles upload form close
   */
  _closeFormHandler() {
    this._uploadPhotoComponent.hide();
  }

  /**
   * Form submit handler
   */
  _submitHandler() {
    if (this._validator.validate()) {
      this._uploadPhotoComponent.getFormElement().submit();
    }
  }

  /**
   * Photo scale change handler
   * @param {String} scaleChange - scale change (UP or DOWN)
   */
  _photoScaleChangeHandler(scaleChange) {
    switch(scaleChange) {
      case PhotoScaleChange.UP:
        this._photoScale = this._photoScale < PhotoScale.MAX ?
          this._photoScale + PhotoScale.STEP :
          this._photoScale;
        break;
      case PhotoScaleChange.DOWN:
        this._photoScale = this._photoScale > PhotoScale.MIN ?
          this._photoScale - PhotoScale.STEP :
          this._photoScale;
        break;
      default:
        throw new Error('Unsupported photo scale change operation');
    }

    this._uploadPhotoComponent.setPhotoScale(this._photoScale);
  }

  /**
   * Change photo effect handler
   * @param {String} effect - new photo effect
   */
  _effectsChangeHandler(effect) {
    this._uploadPhotoComponent.changeImageEffect(effect, this._currentEffect);
    this._currentEffect = effect;
  }
}
