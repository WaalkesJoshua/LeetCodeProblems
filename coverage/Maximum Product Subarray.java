class Solution {
  public int maxProduct(int[] nums) {
      //keep curMin
      //keep curMax
      int curMin = 1;
      int curMax = 1;
      int result = nums[0];

      //iterate over nums and for each int
      for (int n : nums) {
          //0 edge case - if 0, reset curMin and curMax to 1
          if (n == 0) {
              curMin = 1;
              curMax = 1;
          }
          //calc curMax, and curMin
          //to do this we will take max of n * curMax, n * curMin, and n
          //likewise for curmin do the same with min
          //this is becuase we don't know if max will flip from positive to negative or it may just be the value itself.
          int temp = curMax * n;
          curMax = Math.max(Math.max(curMax * n, curMin * n), n);
          curMin = Math.min(Math.min(temp, curMin * n), n);
          result = Math.max(result, curMax);
      }
      //definte result as max of curMin, curMax
      //return result
      return result;
  }
}
