/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  //helper function to check if vowel
  let vowels = 'aeiouAEIOU';
  let arr = s.split('');
  //create two pointers
  let left = 0;
  let right = arr.length - 1;

  //iterate over s from both ends
  //while first pointer < second pointer
  while (left < right) {
      //if first value not a vowel
      if(!vowels.includes(arr[left])) {
      //increment first pointer
          left++;
      } else if (!vowels.includes(arr[right])) {
      //else if second value not a vowel
      //then decrement second pointer
          right--;
      } else {
         //swap values
         [arr[left], arr[right]] = [arr[right], arr[left]];
         //increment/decrement pointers
          left++;
          right--;
      }
  }
  //return s
  s = arr.join('');
  return s;
};