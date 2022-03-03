import {getRandomInteger} from '../utils/index.js';
import {MAX_COMMENT_NUMBER} from '../const/index.js';
import {createComment} from './index.js';

/**
 * Generates random number of comments
 * @returns Array of random comments
 */
const generateComments = () => Array.from(
  {length: getRandomInteger(1, MAX_COMMENT_NUMBER)},
  createComment
);

export default generateComments;
