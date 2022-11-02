var runningSum = function(nums) {
  //for each value except first index,
  for (var i = 1; i < nums.length; i++) {
      nums[i] = nums[i] + nums[i - 1];
  }
  //returm array
  return nums;
};