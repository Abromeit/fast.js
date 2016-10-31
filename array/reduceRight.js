'use strict';

var bindInternal4 = require('../function/bindInternal4');

/**
 * # Reduce Right
 *
 * A fast `.reduceRight()` implementation.
 *
 * @param  {Array}    subject      The array (or array-like) to reduce.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
module.exports = function fastReduce (subject, fn, initialValue, thisContext) {
  var length = subject.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, result;

  if (initialValue === undefined) {
    i = length - 1;
    result = subject[i];
  }
  else {
    i = length;
    result = initialValue;
  }

  while (--i >= 0) {
    result = iterator(result, subject[i], i, subject);
  }

  return result;
};
