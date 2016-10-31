'use strict';

/**
 * # Concat
 *
 * Concatenate multiple arrays.
 *
 * > Note: This function is effectively identical to `Array.prototype.concat()`.
 *
 *
 * @param  {Array|mixed} item, ... The item(s) to concatenate.
 * @return {Array}                 The array containing the concatenated items.
 */
module.exports = function fastConcat () {
  var length = arguments.length,
      arr = [],
      i = -1, 
      item, childLength, j;

  while (++i < length) {
    item = arguments[i];
    if (Array.isArray(item)) {
      j = -1;
      childLength = item.length;
      while (++j < childLength) {
        arr.push(item[j]);
      }
    }
    else {
      arr.push(item);
    }
  }
  return arr;
};
