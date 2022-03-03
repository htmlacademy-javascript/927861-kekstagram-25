/**
 * Unique ID generator function.
 * @param {Number} start - start value.
 * @returns generator
 */
function* uniqueId(start = 0) {
  let id = start;

  while (true) {
    yield id++;
  }
}

export default uniqueId;

