import {createPhoto} from './index.js';
import {PHOTOS_COUNT} from '../const/index.js';

/**
 * Created array of photo objects with test data
 * @returns Array of photo objects
 */
const createPhotos = () => Array.from({length: PHOTOS_COUNT}, createPhoto);

export default createPhotos;
