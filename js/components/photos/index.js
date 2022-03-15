export default class PhotosGallery {
  constructor() {
    this._pictureTemplate = document.querySelector('#picture')
      .content
      .querySelector('.picture');
    this._picturesContainer = document.querySelector('.pictures');
    this._photoClickedHandler = null;
  }

  /**
   * Draws photos on main page
   * @param {Array} photos - array of photo objects
   * @param {Function} onOpenFullSize - open fill size photo callback
   */
  render(photos) {
    const pictureFragment = document.createDocumentFragment();

    photos.forEach((photo) => {
      const {id, url, likes, comments} = photo;
      const pictureElement = this._pictureTemplate.cloneNode(true);

      pictureElement.querySelector('.picture__img').src = url;
      pictureElement.querySelector('.picture__likes').textContent = likes;
      pictureElement.querySelector('.picture__comments').textContent = comments.length;
      pictureElement.dataset.photoId = id;
      pictureFragment.append(pictureElement);
    });

    this._picturesContainer.append(pictureFragment);
  }

  /**
   * Sets open full size photo callback function
   * @param {Function} handler - open full size photo callback
   */
  setPhotoClickedHandler(handler) {
    this._photoClickedHandler = handler;
    this._picturesContainer.addEventListener('click', ({target}) => {
      if (target.classList.contains('picture__img')) {
        this._photoClickedHandler(target.parentElement.dataset.photoId);
      }
    });
  }
}
