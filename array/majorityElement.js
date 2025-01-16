/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let aux = {};
  for (let i = 0; i < nums.length; i++) {
    if (aux[nums[i]]) {
      aux[nums[i]]++;
    } else {
      aux[nums[i]] = 1;
    }
  }
  const arrayNumbers = Object.values(aux);
  let max = Math.max(...arrayNumbers);
  const key = Object.entries(aux).find(([key, value]) => value === max)?.[0];
  return key;
};
console.log(majorityElement([6, 5, 5]));
