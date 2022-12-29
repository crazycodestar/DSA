var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => b - a);
    console.log("sorted Array ->", nums);
    let sum;
    for (let left = 0; left < nums.length; left++) {
        let mid = left + 1;
        let right = nums.length - 1;
        while (mid < right) {
            const total = nums[left] + nums[mid] + nums[right];
            console.log(nums[left], nums[mid], nums[right]);
            console.log(total);

            if (!sum) {
                sum = total;
            } else if (Math.abs(total - target) < Math.abs(sum - target)) {
                sum = total;
            }

            if (total < target) {
                right--;
            } else if (total > target) {
                mid++;
            } else if (total == target) {
                return target;
            }
        }
    }
    return sum;
};

// test case
console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2)); // -2
