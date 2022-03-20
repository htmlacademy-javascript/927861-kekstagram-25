import {PhotoEffect} from './index.js';

const PhotoEffectParams = {
  [PhotoEffect.CHROME]: {min: 0, max: 1, start: 1, step: 0.1,
    filter: (value) => `grayscale(${value})`},
  [PhotoEffect.SEPIA]: {min: 0, max: 1, start: 1, step: 0.1,
    filter: (value) => `sepia(${value})`},
  [PhotoEffect.MARVIN]: {min: 0, max: 100, start: 100, step: 1,
    filter: (value) => `invert(${value}%)`},
  [PhotoEffect.PHOBOS]: {min: 0, max: 3, start: 3, step: 0.1,
    filter: (value) => `blur(${value}px)`},
  [PhotoEffect.HEAT]: {min: 1, max: 3, start: 3, step: 0.1,
    filter: (value) => `brightness(${value})`},
};

export default PhotoEffectParams;
