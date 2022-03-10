const bigPictureElement = document.querySelector('.big-picture');
const imageElement = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const descriptionElement = bigPictureElement.querySelector('.social__caption');
const closeButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

/**
 * Displays full size photo popup
 * @param {Object} photo - photo object
 * @param {Function} onClose - on popup close callback
 */
const showFullSizePhoto = (photo, onClose) => {
  const {url, likes, description, comments} = photo;

  imageElement.src = url;
  likesCountElement.textContent = likes;
  commentsCountElement.textContent = comments.length;
  descriptionElement.textContent = description;

  closeButtonElement.addEventListener('click', () => {
    onClose(); // TODO: Need to remove listeners
  });

  bigPictureElement.classList.toggle('hidden');
  document.body.classList.toggle('modal-open');
};

export default showFullSizePhoto;
