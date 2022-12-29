const threeSum = function(nums) {
  const trios = [];
  nums.sort((a, b) => a - b);
  
  let prevValue;

  for (let i = 0; i < nums.length; i++) {
    if (prevValue == nums[i]) {
      console.log("caught")
      continue;
    }
    prevValue = nums[i];

    const value = nums[i] * -1;
    const hash = {};
    for (let j = i + 1; j < nums.length; j++) {
      const index = hash[nums[j]];

      if (index == -1) {
        continue;
      }

      if (index) {
        trios.push([nums[i], nums[j], nums[index]]);
        hash[nums[j]] = -1;
        continue;
      }
      
      hash[value - nums[j]] = j;
    }
  }

  return trios;

};

// testing
const array = [0,0,0,0,0];
console.log(threeSum(array));
