import {UploadPhoto, Slider} from '../../components/index.js';
import {FormValidator} from '../../utils/index.js';
import {PhotoScale, PhotoScaleChange, PhotoEffect, PhotoEffectParams} from '../../const/index.js';

export default class UploadPhotoController {
  /**
   * Creates new instance of controller
   * @param {Api} api - data api
   */
  constructor(api) {
    this._api = api;
    this._uploadPhotoComponent = new UploadPhoto();

    this._closeFormHandler = this._closeFormHandler.bind(this);
    this._uploadPhotoComponent.setCloseHandler(this._closeFormHandler);

    this._submitHandler = this._submitHandler.bind(this);
    this._uploadPhotoComponent.setSubmitHandler(this._submitHandler);

    this._validator = new FormValidator(this._uploadPhotoComponent.getFormElement());

    this._photoScale = PhotoScale.DEFAULT;
    this._photoScaleChangeHandler = this._photoScaleChangeHandler.bind(this);
    this._uploadPhotoComponent.setPhotoScaleChangeHandler(this._photoScaleChangeHandler);

    this._currentEffect = PhotoEffect.NONE;
    this._effectsChangeHandler = this._effectsChangeHandler.bind(this);
    this._uploadPhotoComponent.setEffectChangeHandler(this._effectsChangeHandler);

    this._effectSlider = new Slider(this._uploadPhotoComponent.getSliderElement());
    this._effectSliderChangeHandler = this._effectSliderChangeHandler.bind(this);
    this._effectSlider.setChangeHandler(this._effectSliderChangeHandler);
  }

  /**
   * Renders upload photo popup
   * @param {String} fileData - selected photo file data
   */
  render(fileData) {
    this._uploadPhotoComponent.render(fileData);
  }

  /**
   * Handles upload form close
   */
  _closeFormHandler() {
    this._uploadPhotoComponent.hide();

    this._photoScale = PhotoScale.DEFAULT;
    this._uploadPhotoComponent.setPhotoScale(this._photoScale);

    this._uploadPhotoComponent.setImageEffect(PhotoEffect.NONE, this._currentEffect);
    this._currentEffect = PhotoEffect.NONE;

    this._effectSlider.hide();
    this._uploadPhotoComponent.setImageFilter();

    this._validator.reset();
  }

  /**
   * Form submit handler
   */
  _submitHandler() {
    if (this._validator.validate()) {
      // this._uploadPhotoComponent.getFormElement().submit();
      this._api.uploadPhoto(new FormData(this._uploadPhotoComponent.getFormElement()))
        .then(() => {
          console.log('Photo uploaded');
        });
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
    this._uploadPhotoComponent.setImageEffect(effect, this._currentEffect);
    this._currentEffect = effect;

    if (effect !== PhotoEffect.NONE) {
      const effectParams = PhotoEffectParams[effect];
      this._effectSlider.render(effectParams);
      this._uploadPhotoComponent.setImageFilter(
        effectParams.start, effectParams.filter(effectParams.start)
      );
    } else {
      this._effectSlider.hide();
      this._uploadPhotoComponent.setImageFilter();
    }
  }

  /**
   * Change slider handler
   * @param {String} value - new slider value
   */
  _effectSliderChangeHandler(value) {
    this._uploadPhotoComponent.setImageFilter(
      value, PhotoEffectParams[this._currentEffect].filter(value)
    );
  }
}
