function processDigits(digits) {
  return digits.map((d) => d ** 2);
}

function combineResults(results) {
  return results.reduce((acc, val) => acc + val, 0);
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let seen = new Set();
  let arr = n.toString().split("").map(Number);

  while (true) {
    const processed = processDigits(arr);
    console.log("process", processed);
    const result = combineResults(processed);
    console.log("result", result);

    if (result === 1) return true;
    if (seen.has(result)) return false;

    seen.add(result);
    arr = result.toString().split("").map(Number);
  }
};

console.log(isHappy(19));
console.log(isHappy(82));
