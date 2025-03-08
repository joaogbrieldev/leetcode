/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const removeCaracters = s.replace(/[^a-zA-Z0-9]/g, "");
  const removeSpaces = removeCaracters.replace(/\s/g, "").toLowerCase();

  let awser = true;

  for (let i = 0, j = removeSpaces.length - 1; i < j; i++, j--) {
    console.log("Comparando:", removeSpaces[i], "com", removeSpaces[j]);
    if (removeSpaces[i] !== removeSpaces[j]) {
      awser = false;
      break;
    }
  }

  return awser;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
