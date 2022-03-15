import {uniqueId, getRandomArrayElement, getRandomInteger} from '../utils/index.js';
import {PhotoLikesCount, PHOTO_DESCRIPTIONS, PHOTO_ID_START, URL_ID_START} from '../const/index.js';
import {generateComments} from './index.js';

const photoIdGenerator = uniqueId(PHOTO_ID_START);
const urlIdGenerator = uniqueId(URL_ID_START);

/**
 * Creates new photo object
 * @returns created photo object
 */
const createPhoto = () => ({
  id: String(photoIdGenerator.next().value),
  url: `photos/${urlIdGenerator.next().value}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(PhotoLikesCount.MIN, PhotoLikesCount.MAX),
  comments: generateComments(),
});

export default createPhoto;
