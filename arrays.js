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

  hasDuplicateOptmization(nums) {
    const result = new Set();
    for (const num of nums) {
      if (result.has(num)) {
        return true;
      }
      result.add(num);
    }
    return false;
  }
}

// A versão otimizada usando Set tem complexidade O(n),
// o que significa que o tempo de execução cresce linearmente com o tamanho do array.
// Em contraste, a versão inicial tem complexidade O(n^2),
// o que significa que o tempo de execução cresce quadraticamente com o tamanho do array.
// Isso faz uma grande diferença em termos de desempenho para arrays grandes,
// tornando a versão com Set muito mais eficiente.

const nums = [1, 2, 3, 4, 5];
const a = new Solution();
console.log("retorno", a.hasDuplicate(nums));
