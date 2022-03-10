import {createPhotos} from './data/index.js';
import {PhotoGalleryController} from './controllers/index.js';

const photos = createPhotos();
const photoGalleryController = new PhotoGalleryController(photos);

photoGalleryController.render();
