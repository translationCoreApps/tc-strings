import * as strings from '../src/js/strings';

describe('strings.normalizeString', () => {
  it('should normalize string by removing extra spaces into single contiguous space', () => {
    const string = '01  234   56789qwertyuiopasdfghjklzxcvbnmtyui01    234      567890';
    const output = strings.normalizeString(string);
    const expected = '01 234 56789qwertyuiopasdfghjklzxcvbnmtyui01 234 567890';
      expect(expected).toEqual(output);
  });
  it('should normalize string by removing line breaks into single contiguous space', () => {
    const string = '01\n234 \n56789qwertyuiopasdfghjklzxcvbnmtyui01\n 234 \n 567890';
    const output = strings.normalizeString(string);
    const expected = '01 234 56789qwertyuiopasdfghjklzxcvbnmtyui01 234 567890';
      expect(expected).toEqual(output);
  });
});

describe('strings.occurrencesInString', () => {
  const string = '01 234 56789qwerty234uiopasdfghjklzxcvbnmtyui01 234 567890';
  it('should find sub-strings with spaces and without spaces around it', () => {
    const subString = '234';
    const output = strings.occurrencesInString(string, subString);
    const expected = 3;
      expect(expected).toEqual(output);
  });
  it('should find substrings at the beginning and end even if a single character', () => {
    const subString = '0';
    const output = strings.occurrencesInString(string, subString);
    const expected = 3;
      expect(expected).toEqual(output);
  });
  it('should return 0 if sub-string not found', () => {
    const subString = 'not in string';
    const output = strings.occurrencesInString(string, subString);
    const expected = 0;
      expect(expected).toEqual(output);
  });
});
