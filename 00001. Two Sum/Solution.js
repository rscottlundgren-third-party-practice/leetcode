/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let minuend = target

	let unsortedNums = nums.slice()

	function swap(unsortedNums, leftIndex, rightIndex) {
		let temp = unsortedNums[leftIndex]
		unsortedNums[leftIndex] = unsortedNums[rightIndex]
		unsortedNums[rightIndex] = temp
	}

	function partition(unsortedNums, left, right) {
		let pivot = unsortedNums[Math.floor((right + left) / 2)]
		let i = left
		let j = right
		while (i <= j) {
			while (unsortedNums[i] < pivot) {
				i++
			}
			while (unsortedNums[j] > pivot) {
				j--
			}
			if (i <= j) {
				swap(unsortedNums, i, j)
				i++
				j--
			}
		}
		return i
	}

	function sortTheNums(unsortedNums, left, right) {
		let index
		if (unsortedNums.length > 1) {
			index = partition(unsortedNums, left, right)
			if (left < index - 1) {
				sortTheNums(unsortedNums, left, index - 1)
			}
			if (index < right) {
				sortTheNums(unsortedNums, index, right)
			}
		}
		return unsortedNums
	}

	let sortedNums = sortTheNums(unsortedNums, 0, unsortedNums.length - 1)
	function binarySearch(sortedNums) {
		for (let i = 0; i < sortedNums.length - 1; i++) {
			let startIndex = 0
			let endIndex = sortedNums.length - 1
			let difference = minuend - sortedNums[i]
			while (startIndex <= endIndex) {
				let middleIndex = Math.floor((startIndex + endIndex) / 2)
				if (minuend / sortedNums[i] === 2 || minuend === 0) {
					if (sortedNums[i - 1] === sortedNums[i]) {
						let a = nums.indexOf(sortedNums[i])
						nums[a] = nums[a] + 1
						return (output = [a, nums.indexOf(sortedNums[i - 1])])
					} else if (sortedNums[i + 1] === sortedNums[i]) {
						let a = nums.indexOf(sortedNums[i])
						nums[a] = nums[a] + 1
						return (output = [a, nums.indexOf(sortedNums[i + 1])])
					}
				}
				if (difference === sortedNums[middleIndex] && i !== middleIndex) {
					return (output = [
						nums.indexOf(sortedNums[i]),
						nums.indexOf(sortedNums[middleIndex]),
					])
				}
				if (difference > sortedNums[middleIndex]) {
					startIndex = middleIndex + 1
				}
				if (difference < sortedNums[middleIndex]) {
					endIndex = middleIndex - 1
				}
			}
		}
	}
	return binarySearch(sortedNums)
}
