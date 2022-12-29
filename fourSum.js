const fourSum = (nums, target) => {
  const squads = [];

  nums.sort((a, b) => b - a);
  const fourSumHelper = (nums, left, prequel) => {
    if (prequel.length < 2) {
      const validArray = [];
      for (let i = left; i < nums.length - 2; i++) {
        if (nums[i] == nums[i-1] && ((i -1) >= left)) continue;
        const validSubArray = fourSumHelper(nums, i + 1, [...prequel, nums[i]]);
        for (let j = 0; j < validSubArray.length; j++) {
          if (validSubArray[j]) validArray.push(validSubArray[j]);
        }
      }
      return validArray;
    }

    let right = nums.length -1;
    const fixed = prequel.reduce((a, b) => a + b, 0);

    const valid = [];

    while (left < right) {
      const total = fixed + nums[left] + nums[right]

      if (total > target) left++;
      if (total < target) right--;
      if (total == target) {
        const validated = [...prequel, nums[left], nums[right]];
        valid.push(validated);
        const leftInit = nums[left];
        while (nums[left] == leftInit) {
          left++;
        }

        const rightInit = nums[right];
        while (nums[right] == rightInit) {
           right--;
        }
      }
    }

    return valid;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i-1]) continue;

    const rtn = fourSumHelper(nums, i + 1, [nums[i]])
    for (let j = 0; j < rtn.length; j++) {
      // to be fixed
      if (rtn[j]) squads.push(rtn[j]);
    }
  }
  return squads;
}
// test case
const array = [0,1,5,0,1,5,5,-4];
console.log(fourSum(array, 11))
console.log(array);
