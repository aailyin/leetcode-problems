// link: https://leetcode.com/problems/3sum-closest/

// solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  
  let closest = Number.MAX_SAFE_INTEGER;
  let length = nums.length - 2, left, right, sum;
  
  for (let i = 0; i < length; i++) {
    left = i + 1;
    right = nums.length - 1;
    
    while(left < right) {
      sum = nums[i] + nums[left] + nums[right];
      
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }
      
      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  
  return closest;
};
