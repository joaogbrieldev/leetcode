class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      if (result.includes(nums[i])) {
        return true;
      } else {
        result.push(nums[i]);
      }
    }
    return false;
  }
}

const nums = [1, 2, 3, 4, 5];
const a = new Solution();
console.log("retorno", a.hasDuplicate(nums));
