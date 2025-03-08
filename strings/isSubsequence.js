/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let aux = true;
  for (let i = 0; i < s.length; i++) {
    if (t.includes(s[i]) === false) {
      aux = false;
      break;
    }
  }
  return aux;
};

console.log(isSubsequence("acb", "ahbgdc"));
