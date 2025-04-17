/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const mapS = new Map();
  const mapT = new Map();

  let i = 0;
  let j = 0;

  while (j < t.length) {
    mapS.set(s[i], (mapS.get(s[i]) || 0) + 1);
    mapT.set(t[j], (mapT.get(t[j]) || 0) + 1);

    i++;
    j++;
  }
  for (const [char, count] of mapS) {
    if (mapT.get(char) !== count) {
      return false;
    }
  }

  return true;
};
console.log(isAnagram("ab", "a"));
