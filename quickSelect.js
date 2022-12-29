const swap = (array, pos1, pos2) => {
	const temp = array[pos1];
	array[pos1] = array[pos2];
	array[pos2] = temp;
};

const quickSelect = (array, k) => {
	const quickSelectHelper = (array, left, right, target) => {
		if (left == right) return array[left];

		const start = left;
		const end = right;
		const center = Math.floor((left + right) / 2);

		const pivot = array[center];
		swap(array, center, right);
		right--;

		// log array
		const logArray = [];
		for (let i = start; i < end + 1; i++) {
			logArray.push(array[i]);
		}

		while (left < right) {
			while (array[left] < pivot) {
				left++;
			}
			while (array[right] > pivot) {
				right--;
			}

			if (left <= right) {
				swap(array, left, right);
				left++;
				right--;
			}
		}

		swap(array, left, end);

		if (left > target - 1) return quickSelectHelper(array, start, left - 1, target);
		if (left < target - 1) return quickSelectHelper(array, left + 1, end, target);
		return array[left];
	};
  if (k - 1 >= array.length) return undefined;
	return quickSelectHelper(array, 0, array.length - 1, k);
};

// test case;
const array = [1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2];
console.log(quickSelect(array, 11));

