/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let rev = Math.abs(x).toString().split('').reverse().join('')
	if (-0x80000000 >= rev || rev >= 0x7fffffff) return 0
	if (x < 0) {
		return `-${rev}`
	} else {
		return rev
	}
}
