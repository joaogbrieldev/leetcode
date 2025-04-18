/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum == target) {
      return [i, j];
    } else if (sum > target) {
      j -= 1;
    } else {
      i += 1;
    }
  }
  return [];
};
console.log(twoSum([2, 7, 13, 15], 9));
