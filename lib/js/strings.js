'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-console */

/**
 * @description Function that count occurrences of a substring in a string
 * @param {String} string - The string to search in
 * @param {String} subString - The sub string to search for
 * @return {Integer} - the count of the occurrences
 * @see http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string/7924240#7924240
 * modified to fit our use cases, return zero for '' substring, and no use case for overlapping.
 */
var occurrencesInString = exports.occurrencesInString = function occurrencesInString(string, subString) {
  if (subString.length <= 0) return 0;
  var occurrences = 0;
  var position = 0;
  var step = subString.length;
  while (position < string.length) {
    position = string.indexOf(subString, position);
    if (position === -1) break;
    ++occurrences;
    position += step;
  }
  return occurrences;
};

/**
 * @description - Function that normalizes a string including whitespace
 * @param {String} string - the string to normalize
 * @return {String} - The returned normalized string
 */
var normalizeString = exports.normalizeString = function normalizeString(string) {
  string = string.replace(/\s+/g, ' ');
  return string;
};