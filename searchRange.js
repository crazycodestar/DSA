var searchRange = function (nums, target) {
	// find the number
	const findNumber = (array, num) => {
		let left = 0;
		let right = array.length - 1;

		while (left <= right) {
			const mid = Math.floor((left + right) / 2);
			if (num < array[mid]) {
				right = mid - 1;
			} else if (array[mid] < num) {
				left = mid + 1;
			} else {
				return mid;
			}
		}

		return -1;
	};

	const index = findNumber(nums, target);
	if (index == -1) return [-1, -1];

	// spread left and right
	let range = [index, index];
	while (nums[range[0] - 1] == target) range[0]--;
	while (nums[range[1] + 1] == target) range[1]++;

	return range;
};

// test cases;
const generateMultipleCases = (array, fnc) => {
	for (let i = 0; i < array.length; i++) {
		const result = fnc(array, array[i]);
		console.log(`target: ${array[i]} -> ${result}`);
	}
};

generateMultipleCases([2, 2], searchRange);
