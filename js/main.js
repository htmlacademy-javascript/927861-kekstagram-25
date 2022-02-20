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
  return Math.floor(Math.random() * (max - min + 1));
};

getRandomInteger(0, 2);
