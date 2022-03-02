import {getRandomInteger, uniqueId, getRandomArrayElement} from './utils/index.js';

const PHOTOS_COUNT = 25;

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

const CommentAvatarNumber = {
  MIN: 1,
  MAX: 6,
};

const photoIdGenerator = uniqueId(1);
const urlIdGenerator = uniqueId(1);
const commentIdGenerator = uniqueId();

/**
 * Creates new comment object
 * @returns created comment object
 */
const createComment = () => ({
  id: commentIdGenerator.next().value,
  avatar: `img/avatar-${getRandomInteger(CommentAvatarNumber.MIN, CommentAvatarNumber.MAX)}.svg`,
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
  likes: getRandomInteger(PhotoLikesCount.MIN, PhotoLikesCount.MAX),
  comments: generateComments(),
});

/**
 * Created array of photo objects with test data
 * @returns Array of photo objects
 */
const createPhotos = () => Array.from({length: PHOTOS_COUNT}, createPhoto);

createPhotos();
