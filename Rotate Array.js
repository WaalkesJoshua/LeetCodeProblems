O:nums array, rotated k steps
I:k the non-negative number of steps to rotate to the right, nums array
C:nums is not empty, k non-negative
E:all values are equal

[1,2,3,4,5,6,7,8,9]
[6, 5, 4, 3, 2, 1, 9, 8, 7]
[7,8,9,1,2,3,4,5,6]


const function rotateArr (nums, k) {
  //create a subArr to hold end values
  //create a value holder, val
  //set subArr to be equal to last k values in nums
  // iterate over nums starting at k - 1
      //set val equal to nums at k
      //set

  // also tried a reversal technique //


//alt solution
  //set subArr equal to split off end of nums for k indexes, using array.splice
  const subArr = nums.splice(k, nums.length - k);
  //conjoin subArr at beginning of nums using destructuring
  // nums = [...subArr, ...nums];
  subArr.concat(nums);

  //return nums
  return nums;

}

