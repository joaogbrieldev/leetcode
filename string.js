class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < t.length; j++) {
        if (s[i] === t[i]) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
}
