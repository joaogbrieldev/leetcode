/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const array = s.split(" ");
  if (array.length !== pattern.length) return false;
  const mapS = new Map();
  const mapT = new Map();

  let i = 0;
  let j = 0;

  while (j < pattern.length) {
    if (
      (mapS.has(array[i]) && mapS.get(array[i]) !== pattern[j]) ||
      (mapT.has(pattern[j]) && mapT.get(pattern[j]) !== array[i])
    ) {
      return false;
    }
    mapS.set(array[i], pattern[j]);
    mapT.set(pattern[j], array[i]);

    i++;
    j++;
  }

  return true;
};
console.log(wordPattern("aaa", "aa aa aa aa"));
