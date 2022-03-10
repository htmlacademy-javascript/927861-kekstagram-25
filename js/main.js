import {createPhotos} from './data/index.js';
import {drawPhotos, showFullSizePhoto, closeFullSizePhoto} from './photos/index.js';

const photos = createPhotos();

drawPhotos(photos, (photo) => {
  showFullSizePhoto(photo, () => {
    closeFullSizePhoto();
  });
});

