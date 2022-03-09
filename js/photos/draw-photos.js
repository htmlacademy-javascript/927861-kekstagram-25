/**
 * Draws photos on main page
 * @param {Array} photos - array of photo objects
 */
const drawPhotos = (photos) => {

  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const picturesContainer = document.querySelector('.pictures');
  const pictureFragment = document.createDocumentFragment();

  photos.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    pictureFragment.append(pictureElement);
  });

  picturesContainer.append(pictureFragment);
};

export default drawPhotos;

