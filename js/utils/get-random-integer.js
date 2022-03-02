/**
 * Returns random integer number between min and max inclusive.
 * @param {Number} min - min value inclusive
 * @param {Number} max - max value inclusive
 * @returns random integer number
 */
const getRandomInteger = (min, max) => {
  if (min > max) {
    throw new Error('min must be less than or equal to max');
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

export default getRandomInteger;

