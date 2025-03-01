/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let aux = "";
  for (let i = 0; i < strs.length; i++) {
    const letters = strs[i].split("");
    const next = strs[i + 1];
    console.log("letters", letters);
    for (let j = 0; j < next.length; j++) {
      console.log(letters[j]);
      if (letters[j] === next[j]) {
        aux += letters[j];
        j++;
      } else {
        return "";
      }
    }
    console.log("aux", aux);
    return aux;
  }
};

console.log(longestCommonPrefix(["flor", "fluxo", "voo"]));
