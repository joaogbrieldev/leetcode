/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const symbols = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let aux = [];
  let i = 0;
  while (i < s.length) {
    if (["(", "{", "["].includes(s[i])) {
      aux.push(s[i]);
    } else {
      const lastOpen = aux.pop();
      if (symbols[lastOpen] !== s[i]) {
        return false;
      }
    }
    i++;
  }
  return aux.length === 0;
};

console.log(isValid("([])"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
