/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const aux = [];
  const spread = s.split(" ");
  const filtered = spread.filter((value) => value.length > 0);
  aux.push(filtered[filtered.length - 1]);
  const last = aux[0].split("");
  return last.length;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
