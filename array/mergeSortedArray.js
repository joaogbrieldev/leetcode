/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  nums1 = [...nums1, ...nums2];
  nums1.forEach((item, index) => {
    if (item === 0) {
      nums1.splice(index, 3);
    }
  });
  return nums1.sort();
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// output = [ 1, 2, 2, 3, 5, 6 ]
