import {uniqueId, getRandomArrayElement, getRandomInteger} from '../utils/index.js';

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

export default createComment;
