/**
 * @param {number} x
 * @return {boolean}
 */

// With Turning It Into A String
var isPalindrome = function (x) {
	let pal = Math.abs(x).toString().split('').reverse().join('')
	if (x < 0 || -0x80000000 >= pal || pal >= 0x7fffffff) return false
	if (x == pal) {
		return true
	} else {
		return false
	}
}

// Without Turning It Into A String
var isPalindrome = function (x) {
	// Code TBD
}
