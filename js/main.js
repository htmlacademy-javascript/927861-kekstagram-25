import {Photos} from './model/index.js';
import {PhotoGalleryController, PhotoFilterController} from './controllers/index.js';
import {Api} from './data/index.js';

const api = new Api();
const photosModel = new Photos();
const photoGalleryController = new PhotoGalleryController(photosModel, api);
const photoFilterController = new PhotoFilterController(photosModel);

api.getPhotos().then((photos) => {
  photosModel.setPhotos(photos);
  photoFilterController.render();
  photoGalleryController.render();
});
