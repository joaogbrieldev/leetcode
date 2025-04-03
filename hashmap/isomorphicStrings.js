/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const mapS = new Map();
  const mapT = new Map();

  let i = 0;
  let j = 0;

  while (j < t.length) {
    if (
      (mapS.has(s[i]) && mapS.get(s[i]) !== t[j]) ||
      (mapT.has(t[j]) && mapT.get(t[j]) !== s[i])
    ) {
      return false;
    }
    mapS.set(s[i], t[j]);
    mapT.set(t[j], s[i]);

    i++;
    j++;
  }

  return true;
};

console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
