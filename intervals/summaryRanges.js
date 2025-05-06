/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let result = [];
  let i = 0;

  while (i < nums.length) {
    let start = i;
    while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
      i++;
    }
    if (start === i) {
      result.push(`${nums[i]}`);
    } else {
      result.push(`${nums[start]}->${nums[i]}`);
    }

    i++;
  }
  return result;
};
console.log(summaryRanges([0, 1, 2, 4, 5, 8]));
