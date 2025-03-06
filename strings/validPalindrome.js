/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const removeCaracters = s.replace(/[^a-zA-Z0-9 ]/g, "");
  const removeSpaces = removeCaracters.replace(/\s/g, "");

  for (let i = 0; i < removeSpaces.length; i++) {
    for (let j = removeSpaces.length - 1; j > 0; j--) {
      if (removeSpaces[i] === removeSpaces[j]) {
        return true;
      }
      return false;
    }
  }
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
