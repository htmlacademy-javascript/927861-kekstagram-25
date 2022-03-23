import {Photos} from './model/index.js';
import {PhotoGalleryController} from './controllers/index.js';
import {Api} from './data/index.js';

const api = new Api();
const photosModel = new Photos();
const photoGalleryController = new PhotoGalleryController(photosModel, api);

api.getPhotos().then((photos) => {
  photosModel.setPhotos(photos);
  photoGalleryController.render();
});
