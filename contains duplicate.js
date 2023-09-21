O: boolean to represent if duplicates exist
I:nums array of integers
C:nums may be negative, minimum size of array is 1
E:length of array is 1, return false


function containsDuplicates (nums) {

  //sort nums array using sorting helper function
  nums = sortArray( nums ); //or just use .sort method
  //iterate through array
  for (var i = 0; i  < nums.length - 1; i++) {
    //if nums at i, is equal to nums at i + 1
    if (nums[i] === nums[i + 1]) {
      //return true
      return true
    }
  }

  //return false
  return false
}

//using quickSort algo
function sortArray (array) {
  if (array.length <= 1) {
    return array
  }

  let pivot = array[0];
  let left = [];
  let right = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [...sortArray(left), pivot, ...sortArray(right)];
}
