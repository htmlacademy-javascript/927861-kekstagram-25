export default class Comment {
  /**
   * Creates an instance of comment
   * @param {Object} data - raw data object
   */
  constructor(data) {
    this.id = data['id'];
    this.avatar = data['avatar'];
    this.message = data['message'];
    this.name = data['name'];
  }

  /**
   * Creates new Comment object from raw data
   * @param {Object} data - raw data
   */
  static parseComment(data) {
    return new Comment(data);
  }
}
