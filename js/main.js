/**
 * Returns random integer number between min and max inclusive.
 * @param {integer} min - min value inclusive
 * @param {integer} max - max value inclusive
 * @returns random integer number
 */
const getRandomInteger = (min, max) => {
  if (min > max) {
    throw new Error('min must be less than or equal to max');
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

/**
 * Checks if string's length is less than or equal to max length
 * @param {string} str - string
 * @param {integer} maxLength - max length of the string
 * @returns true if string's length is less than or equal to max length
 */
const checkStringLength = (str, maxLength) => str.length <= maxLength;

checkStringLength('some test string', 140);

const PHOTOS_COUNT = 25;
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

const photoIds = Array.from({length: PHOTOS_COUNT}, (_, i) => i + 1);
const urlIds = Array.from({length: PHOTOS_COUNT}, (_, i) => i + 1);

/**
 * Return random element from given array
 * @param {Array} elements - array of elements
 * @param {Boolean} remove - true if element should be deleted from array. False by default
 * @returns random element
 */
const getRandomArrayElement = (elements, remove = false) => remove ?
  elements.splice(getRandomInteger(0, elements.length - 1), 1)[0] :
  elements[getRandomInteger(0, elements.length - 1)];

/**
 * Creates new comment object
 * @returns created comment object
 */
const createComment = () => ({
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
});

/**
 * Creates new photo object
 * @returns created photo object
 */
const createPhoto = () => ({
  id: getRandomArrayElement(photoIds, true),
  url: `photos/${getRandomArrayElement(urlIds, true)}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: [createComment(), createComment()],
});

const photos = Array.from({length: PHOTOS_COUNT}, createPhoto);
console.log(photos);
