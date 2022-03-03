import {getRandomInteger} from './index.js';

/**
 * Return random element from given array
 * @param {Array} elements - array of elements
 * @param {Boolean} remove - true if element should be deleted from array. False by default
 * @returns random element
 */
const getRandomArrayElement = (elements, remove = false) => remove ?
  elements.splice(getRandomInteger(0, elements.length - 1), 1)[0] :
  elements[getRandomInteger(0, elements.length - 1)];

export default getRandomArrayElement;
