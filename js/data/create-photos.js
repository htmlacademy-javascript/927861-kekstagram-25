import {createPhoto} from './index.js';

const PHOTOS_COUNT = 25;

/**
 * Created array of photo objects with test data
 * @returns Array of photo objects
 */
const createPhotos = () => Array.from({length: PHOTOS_COUNT}, createPhoto);

export default createPhotos;
