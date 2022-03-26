import {DEBOUNCE_DELAY} from '../const/index.js';

/**
 * Debounces given function
 * @param {Function} callback - callback function
 */
const debounce = (callback) => {
  let timeoutId = null;

  return (...params) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => callback(...params), DEBOUNCE_DELAY);
  };
};

export default debounce;
