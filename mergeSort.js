const mergeSort = (array) => {
	if (array.length == 1) return array;

	const array1 = [];
	const array2 = [];

	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		array1.push(array[left]);
		array2.push(array[right]);

		left++;
		right--;

		if (left == right) array2.push(array[right]);
	}


	const mergeArray1 = mergeSort(array1);
	const mergeArray2 = mergeSort(array2);

	return sort(mergeArray1, mergeArray2);
};

const sort = (array1, array2) => {
	const tempSortedArray = [];

	while (array1.length && array2.length) {
		if (array1[0] < array2[0]) {
			const minValue = array1.shift();
			tempSortedArray.push(minValue);
		} else {
			const minValue = array2.shift();
			tempSortedArray.push(minValue);
		}
	}

	// push left over into the tempSortedArray
	while (array1.length) {
		const minValue = array1.shift();
		tempSortedArray.push(minValue);
	}

	while (array2.length) {
		const minValue = array2.shift();
		tempSortedArray.push(minValue);
	}

	return tempSortedArray;
};

// test case
const array = [2, 8, 5, 3, 9, 4, 1, 7];
console.log(mergeSort(array));
