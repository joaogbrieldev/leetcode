/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s === "" && t === "") {
    return true;
  }
  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
    if (i === s.length) return true;
  }
  return false;
};

console.log(isSubsequence("acb", "ahbgdc"));
