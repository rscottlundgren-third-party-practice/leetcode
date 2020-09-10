/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	// Instantiate empty "longestCommonPrefix" array for solution
	let lcp = []

	// If the inputted array has a length of 0, return empty string
	if (strs.length === 0) return ''

	// "For Loop" through the letters of the first word
	for (let i = 0; i < strs[0].length; i++) {
		// Set your "control" to be a letter in the first word
		const control = strs[0][i]
		// "For Loop" through the words of the inputted array
		for (let j = 0; j < strs.length; j++) {
			// If the letter of the word does not equal your control
			if (strs[j][i] !== control) {
				// Return the solution array
				return lcp.join('')
			}
		}
		// If the control letter matches the letters at the same index across all words in array, push to solution array, loop through again
		lcp.push(control)
	}
	// Once both "For Loops" are broken, return the joined solution array
	return lcp.join('')
}
