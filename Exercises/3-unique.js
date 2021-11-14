'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i]))
      result.push(array[i]);
  }
  return result;
};

module.exports = { unique };
