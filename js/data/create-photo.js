import {uniqueId, getRandomArrayElement, getRandomInteger} from '../utils/index.js';
import {generateComments} from './index.js';

const PhotoLikesCount = {
  MIN: 15,
  MAX: 200,
};

const PHOTO_DESCRIPTIONS = [
  'Description 1',
  'Description 2',
  'Description 3',
  'Description 4',
  'Description 5',
  'Description 6',
  'Description 7',
  'Description 8',
];

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
