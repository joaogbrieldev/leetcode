function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
// melhoria
function twoSum(nums, target) {
  const numMap = {}; // Armazena números e seus índices
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
}
// Explicação da Versão Melhorada
// Cria um objeto numMap para armazenar números e seus índices.
// Percorre a lista nums.
// Para cada número, calcula o complemento necessário para atingir o target (complement = target - nums[i]).
// Verifica se o complemento já está no numMap.
// Se estiver, retorna os índices do complemento e do número atual.
// Se não estiver, armazena o número atual e seu índice em numMap.
// Essa versão tem complexidade O(n), o que é muito mais eficiente para listas grandes.
