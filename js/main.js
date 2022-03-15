import {createPhotos} from './data/index.js';
import {Photos, Photo} from './model/index.js';
import {PhotoGalleryController} from './controllers/index.js';

const photosModel = new Photos();
photosModel.setPhotos(Photo.parsePhotos(createPhotos()));
const photoGalleryController = new PhotoGalleryController(photosModel);

photoGalleryController.render();
