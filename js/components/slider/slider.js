export default class Slider {

  /**
   * Creates new instance of slider
   * @param {HTMLElement} sliderElement - html element to be associated with slider
   */
  constructor(sliderElement) {
    this._sliderElement = sliderElement;
    this._slider = null;
    this._sliderChangeHandler = null;
  }

  /**
   * Renders slider with given parameters
   * @param {Object} params - slider parameters
   */
  render(params) {
    const {min, max, start, step} = params;

    if (!this._slider) {
      this._slider = noUiSlider.create(this._sliderElement,
        {range: {min, max}, start, step, connect: 'lower'});
      this._slider.on('update', () => this._sliderChangeHandler(this._slider.get()));
    } else {
      this._slider.updateOptions({range: {min, max}, start, step});
    }
  }

  /**
   * hides slider
   */
  hide() {
    if (this._slider) {
      this._slider.destroy();
      this._slider = null;
    }
  }

  /**
   * Sets slider change handler
   * @param {Function} handler - slider change handler
   */
  setChangeHandler(handler) {
    this._sliderChangeHandler = handler;
  }
}

