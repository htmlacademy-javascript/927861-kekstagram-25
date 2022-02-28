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
const MAX_COMMENT_NUMBER = 10;
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const COMMENTATOR_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

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
 * Unique ID generator function.
 * @param {Number} start - start value.
 * @returns generator
 */
function* uniqueId(start = 0) {
  let id = start;

  while (true) {
    yield id++;
  }
}

const photoIdGenerator = uniqueId(1);
const urlIdGenerator = uniqueId(1);
const commentIdGenerator = uniqueId();

/**
 * Creates new comment object
 * @returns created comment object
 */
const createComment = () => ({
  id: commentIdGenerator.next().value,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENT_MESSAGES),
  name: getRandomArrayElement(COMMENTATOR_NAMES),
});

/**
 * Generates random number of comments
 * @returns Array of random comments
 */
const generateComments = () => Array.from(
  {length: getRandomInteger(1, MAX_COMMENT_NUMBER)},
  createComment
);

/**
 * Creates new photo object
 * @returns created photo object
 */
const createPhoto = () => ({
  id: photoIdGenerator.next().value,
  url: `photos/${urlIdGenerator.next().value}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: generateComments(),
});

/**
 * Created array of photo objects with test data
 * @returns Array of photo objects
 */
const createPhotos = () => Array.from({length: PHOTOS_COUNT}, createPhoto);

createPhotos();
