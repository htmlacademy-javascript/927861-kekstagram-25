/**
 * Draws photos on main page
 * @param {Array} photos - array of photo objects
 * @param {Function} onOpenFullSize - open fill size photo callback
 */
const drawPhotos = (photos, onOpenFullSize) => {

  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const picturesContainer = document.querySelector('.pictures');
  const pictureFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const {url, likes, comments} = photo;
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    pictureElement.addEventListener('click', () => onOpenFullSize(photo)); // TODO: Remove?

    pictureFragment.append(pictureElement);
  });

  picturesContainer.append(pictureFragment);
};

export default drawPhotos;

