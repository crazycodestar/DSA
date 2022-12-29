const search = function (nums, target) {
	if (nums.length == 1 && nums[0] != target) return -1;

	if (target >= nums[0]) {
		return searchFromLeft(nums, target);
	} else if (target <= nums[nums.length - 1]) {
		return searchFromRight(nums, target);
	} else {
		return -1;
	}
};

const searchFromLeft = (nums, target) => {
	let pointer = 0;
	let initPointer = pointer;

	while (
		nums[pointer] !== undefined &&
		nums[pointer] < target &&
		nums[pointer] >= nums[initPointer]
	) {
		initPointer = pointer;
		pointer = pointer + Math.floor(Math.sqrt(nums.length));
	}

	while (
		nums[pointer] === undefined ||
		nums[pointer] > target ||
		nums[pointer] < nums[initPointer]
	)
		pointer--;

	if (nums[pointer] == target) return pointer;
	return -1;
};

const searchFromRight = (nums, target) => {
	let pointer = nums.length - 1;
	let initPointer = pointer;

	while (
		nums[pointer] !== undefined &&
		nums[pointer] > target &&
		nums[pointer] <= nums[initPointer]
	) {
		initPointer = pointer;
		pointer = pointer - Math.floor(Math.sqrt(nums.length));
	}

	while (
		nums[pointer] === undefined ||
		nums[pointer] > nums[initPointer] ||
		nums[pointer] < target
	)
		pointer++;

	if (nums[pointer] == target) return pointer;
	return -1;
};

// test case
let array = [4, 5, 6, 7, 0, 1, 2];
array = [1];
array = [1, 3];
array = [0, 2, 3, 4, 7, 8, 9];
console.log("answer");
for (let i = 0; i < array.length; i++) {
	console.log("target ->", array[i]);
	console.log("position ->", search(array, array[i]));
}
console.log(search(array, 100)); // no existent case
