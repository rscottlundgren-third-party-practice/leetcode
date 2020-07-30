/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	// Create a global variable "hash" that will hold all of the differences for later parsing
	let hash = []
	let i = 0
	let largest = 0
	for (let subtrahend = 0; subtrahend < prices.length; subtrahend++) {
		for (let minuend = subtrahend + 1; minuend < prices.length; minuend++) {
			let difference = prices[minuend] - prices[subtrahend]
			if (difference > largest) largest = difference
		}
	}
	return largest
}
