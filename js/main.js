import {Photos, Photo} from './model/index.js';
import {PhotoGalleryController} from './controllers/index.js';
import {Api} from './data/index.js';

const api = new Api();
const photosModel = new Photos();
let photoGalleryController = null;

api.getPhotos().then((photos) => {
  photosModel.setPhotos(Photo.parsePhotos(photos));
  photoGalleryController = new PhotoGalleryController(photosModel);
  photoGalleryController.render();
});
