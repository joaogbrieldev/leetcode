/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let counts = {};

  for (let char of magazine) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (let char of ransomNote) {
    if (!counts[char]) return false;
    counts[char]--;
  }

  return true;
};
console.log(canConstruct("aa", "aab"));
