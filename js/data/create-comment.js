import {uniqueId, getRandomArrayElement, getRandomInteger} from '../utils/index.js';
import {COMMENT_MESSAGES, COMMENTATOR_NAMES, CommentAvatarNumber} from '../const/index.js';

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
