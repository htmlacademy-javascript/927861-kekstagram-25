/**
 * Returns random integer number between min and max inclusive.
 * @param {integer} min - min value inclusive
 * @param {integer} max - max value inclusive
 * @returns random integer number
 */
const getRandomInteger = (min, max) => {
  if (min > max) {
    throw new Error('min must be less than or equal to max');
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

/**
 * Checks if string's length is less than or equal to max length
 * @param {string} str - string
 * @param {integer} maxLength - max length of the string
 * @returns true if string's length is less than or equal to max length
 */
const checkStringLength = (str, maxLength) => str.length <= maxLength;

console.log(getRandomInteger(-5, -3));
checkStringLength('some test string', 140);
