// seudocode
// use two pointers starting at the same position
// pointer2 moves and every new value it gets it checks to see
// if it is in the subString length
// if it is it saves the new length as the max if it's longer than
// current length
// it then pulls pointer1 to the just after the position of the duplicate
// rinse an repeat

const lengthOfLongestSubstring = function (s) {
	let max = 0;
	let pointer1 = 0;

	for (let pointer2 = 0; pointer2 < s.length; pointer2++) {
		const index = findIndex(s, [pointer1, pointer2 - 1], s[pointer2]);

		if (index != -1) {
			// get length
			const length = pointer2 - pointer1;
			max = max < length ? length : max;
			// move to new position
			pointer1 = index + 1;
		}

		const length = pointer2 - pointer1 + 1;
		max = max < length ? length : max;
	}

	return max;
};

const findIndex = (array, range, value) => {
	for (let i = range[0]; i < range[1] + 1; i++) if (array[i] == value) return i;

	return -1;
};

const stringSet = " ";
console.log(lengthOfLongestSubstring(stringSet));

module.exports = lengthOfLongestSubstring;
