'use strict';

/**
 * # Pluck
 * Pluck the property with the given name from an array of objects.
 *
 * @param  {Array}  input The values to pluck from.
 * @param  {String} field The name of the field to pluck.
 * @return {Array}        The plucked array of values.
 */
module.exports = function fastPluck (input, field) {
  var length = input.length,
      plucked = [],
      count = -1,
      i = -1,
      value;

  while (++i < length) {
    value = input[i];
    if (value != null && value[field] !== undefined) {
      plucked[++count] = value[field];
    }
  }
  return plucked;
};
