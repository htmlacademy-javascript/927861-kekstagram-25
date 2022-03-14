import {FullSizePhoto} from '../../components/index.js';
import {COMMENTS_ON_PAGE} from '../../const/index.js';

export default class FullSizePhotoController {

  /**
   * Creates new instance of FullSizePhotoController
   */
  constructor() {
    this._fullSizePhotoComponent = new FullSizePhoto();
    this._fullSizePhotoComponent.setCloseHandler(() => this._fullSizePhotoComponent.hide());

    this._showMoreCommentsHandler = this._showMoreCommentsHandler.bind(this);
    this._fullSizePhotoComponent.setShowMoreCommentsHandler(this._showMoreCommentsHandler);
  }

  /**
   * Renders full size photo popup
   * @param {Object} photo - photo object
   */
  render(photo) {
    this._photo = photo;

    this._fullSizePhotoComponent.render(this._photo);

    this._renderedCommentsCount = 0;
    this._renderComments();
  }

  /**
   * Renders comments with respect to comments on page number
   */
  _renderComments() {
    const {comments} = this._photo;

    this._fullSizePhotoComponent.renderComments(
      comments.slice(this._renderedCommentsCount, this._renderedCommentsCount + COMMENTS_ON_PAGE)
    );
    this._renderedCommentsCount += COMMENTS_ON_PAGE;
    if (this._renderedCommentsCount >= comments.length) {
      this._fullSizePhotoComponent.hideShowMoreComments();
    }
  }

  /**
   * Handles show more comments event
   */
  _showMoreCommentsHandler() {
    this._renderComments();
  }
}
