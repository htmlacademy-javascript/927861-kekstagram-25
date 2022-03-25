export default class PhotoFilter {
  /**
   * Creates new instance of component
   */
  constructor() {
    this._filter = document.querySelector('.img-filters');
    this._filterForm = this._filter.querySelector('.img-filters__form');
    this._activeFilter = this._filterForm.querySelector('.img-filters__button--active');
    this._filterChangeHandler = null;
  }

  /**
   * Renders component
   */
  render() {
    this._filter.classList.remove('img-filters--inactive');
  }

  /**
   * Sets filter change handler
   * @param {Function} handler - filter change handler
   */
  setFilterChangeHandler(handler) {
    this._filterChangeHandler = handler;
    this._filterForm.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('img-filters__button')) {
        this._activeFilter.classList.remove('img-filters__button--active');
        evt.target.classList.add('img-filters__button--active');
        this._activeFilter = evt.target;
        this._filterChangeHandler(evt.target.id);
      }
    });
  }
}
