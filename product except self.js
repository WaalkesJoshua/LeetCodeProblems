/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  //create answer array by mapping through nums
  const answer = nums.map((n, index) => {
      return nums.reduce((acc, cur, i) => {
          if(i !== index) {
              return acc * cur;
          } else { return acc }
      }, 1)

  })

  //return answer
  return answer;
};

// O:array of integers representing sum of all inputs minus current input index, "answer"
// I:array of integers "nums"
// C: nums has at least two elements nums
// E: nums is all zeros
//