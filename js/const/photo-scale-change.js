import {PhotoScale} from './index.js';

const PhotoScaleChange = {
  UP: (value) => value < PhotoScale.MAX ? value + PhotoScale.STEP : value,
  DOWN: (value) => value > PhotoScale.MIN ? value - PhotoScale.STEP : value,
};

export default PhotoScaleChange;
