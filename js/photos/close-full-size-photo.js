const bigPictureElement = document.querySelector('.big-picture');

/**
 * Closes full size photo popup
 */
const closeFullSizePhoto = () => {
  bigPictureElement.classList.toggle('hidden');
  document.body.classList.toggle('modal-open');
};

export default closeFullSizePhoto;
