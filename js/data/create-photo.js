import {uniqueId, getRandomArrayElement, getRandomInteger} from '../utils/index.js';
import {PhotoLikesCount, PHOTO_DESCRIPTIONS} from '../const/index.js';
import {generateComments} from './index.js';

const photoIdGenerator = uniqueId(1);
const urlIdGenerator = uniqueId(1);

/**
 * Creates new photo object
 * @returns created photo object
 */
const createPhoto = () => ({
  id: photoIdGenerator.next().value,
  url: `photos/${urlIdGenerator.next().value}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(PhotoLikesCount.MIN, PhotoLikesCount.MAX),
  comments: generateComments(),
});

export default createPhoto;
