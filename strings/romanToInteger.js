// Símbolo        Valor
// I                1
// V                5
// X                10
// L                50
// C                100
// D                500
// M                1000

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let aux = 0;
  const romanNumers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const rules = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  for (let index = 0; index < s.length; index++) {
    if (rules[s[index] + s[index + 1]]) {
      aux += rules[s[index] + s[index + 1]];
      index++;
    } else {
      aux += romanNumers[s[index]];
    }
  }

  return aux;
};

console.log(romanToInt("XIX"));
