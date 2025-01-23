/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const lastAndMin = prices[prices.length - 1];
  let min = Math.min(...prices);

  if (min === lastAndMin) {
    prices.pop();
  }
  let anotherMin = Math.min(...prices);
  let index = prices.indexOf(anotherMin);
  const aux = [];
  for (let i = index; i < prices.length; i++) {
    aux.push(prices[i] - 1);
  }
  return Math.max(...aux);
};

console.log(maxProfit([7, 6, 4, 3, 1]));
