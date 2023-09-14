O: k, the number of unique elements in nums
I:nums, a non-descending sorted array of integers
C:non-unique elements must be removed in place, order kept the same
E:length of 0, negative ints, all same int

//create a counter, k = 0
//create a value holder, value = null
//iterate through nums
  //if value is null
    //set value to nums at i
    //increment k to 1
  //if value is not equal to nums at i
    //set value equal to nums at i
    //let j = i - 1
    // run a while loop where j decrements by 1 until j is less than k
      //replace nums at j, with value
    //increment k
//set nums equal to nums from 0 to k, cut the rest out
//return k

function removeDups (nums) {
let k = 0;
let value = null;
for (var i = 0; i < nums.length; i++) {
  if(value === null) {
    value = nums[i];
    k++;
  }
  if (value !== nums[i]) {
    value = nums[i];
    let j = i - 1;
    while (j >= k) {
      nums[j] = value;
      j--;
    }
    k++;
  }
}

nums = nums.slice(0, k + 1);

return k;
}




    [1,2,3,3,3,3,3,3]
    value=3
    k = 2
    i = 5
    j = 1