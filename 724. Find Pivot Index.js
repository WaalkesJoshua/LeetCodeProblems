/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  //define left = 0
  let left = 0;
  //define right = sum of whole array
  let right  = nums.reduce((prev, current) => (prev + current));

  //while left doesnt equal right and index < nums.length
  for(var i = 0; i < nums.length; i++) {
    //left is equal to sum of all values until index
    left = nums.slice(0, i).reduce((prev, current) => (prev + current), 0);
    //right is equal to sum of all values after index
    right = nums.slice(i + 1, nums.length).reduce((prev, current) => (prev + current), 0);

    if (left === right) {
      return i;
    }
  }
  return -1;
};