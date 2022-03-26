import {PhotoFilter} from '../../components/index.js';
import {debounce} from '../../utils/index.js';

export default class PhotoFilterController {
  /**
   * Creates new instance of controller
   * @param {Photos} photosModel - photos model
   */
  constructor(photosModel) {
    this._photosModel = photosModel;
    this._photoFilterComponent = new PhotoFilter();

    this._filterChangeHandler = this._filterChangeHandler.bind(this);
    this._photoFilterComponent.setFilterChangeHandler(debounce(this._filterChangeHandler));
  }

  /**
   * Renders photo filters
   */
  render() {
    this._photoFilterComponent.render();
  }

  /**
   * Handler for change filter
   * @param {String} filter - new filter
   */
  _filterChangeHandler(filter) {
    this._photosModel.setFilter(filter);
  }
}
