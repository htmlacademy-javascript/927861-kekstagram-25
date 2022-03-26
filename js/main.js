import {Photos} from './model/index.js';
import {PhotoGalleryController, PhotoFilterController} from './controllers/index.js';
import {Api} from './data/index.js';
import {Message} from './components/index.js';

const api = new Api();
const photosModel = new Photos();
const photoGalleryController = new PhotoGalleryController(photosModel, api);
const photoFilterController = new PhotoFilterController(photosModel);

(async () => {
  try {
    const photos = await api.getPhotos();
    photosModel.setPhotos(photos);
    photoFilterController.render();
    photoGalleryController.render();
  } catch (err) {
    const errorMessage = new Message('load_photos_error');
    errorMessage.setCloseHandler(() => errorMessage.hide());
    errorMessage.render();
  }
})();
