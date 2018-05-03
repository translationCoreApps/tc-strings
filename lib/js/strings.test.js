'use strict';

var _strings = require('./strings');

var strings = _interopRequireWildcard(_strings);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('strings.normalizeString', function () {
  it('should normalize string by removing extra spaces into single contiguous space', function () {
    var string = '01  234   56789qwertyuiopasdfghjklzxcvbnmtyui01    234      567890';
    var output = strings.normalizeString(string);
    var expected = '01 234 56789qwertyuiopasdfghjklzxcvbnmtyui01 234 567890';
    expect(expected).toEqual(output);
  });
  it('should normalize string by removing line breaks into single contiguous space', function () {
    var string = '01\n234 \n56789qwertyuiopasdfghjklzxcvbnmtyui01\n 234 \n 567890';
    var output = strings.normalizeString(string);
    var expected = '01 234 56789qwertyuiopasdfghjklzxcvbnmtyui01 234 567890';
    expect(expected).toEqual(output);
  });
});

describe('strings.occurrencesInString', function () {
  var string = '01 234 56789qwerty234uiopasdfghjklzxcvbnmtyui01 234 567890';
  it('should find sub-strings with spaces and without spaces around it', function () {
    var subString = '234';
    var output = strings.occurrencesInString(string, subString);
    var expected = 3;
    expect(expected).toEqual(output);
  });
  it('should find substrings at the beginning and end even if a single character', function () {
    var subString = '0';
    var output = strings.occurrencesInString(string, subString);
    var expected = 3;
    expect(expected).toEqual(output);
  });
  it('should return 0 if sub-string not found', function () {
    var subString = 'not in string';
    var output = strings.occurrencesInString(string, subString);
    var expected = 0;
    expect(expected).toEqual(output);
  });
});