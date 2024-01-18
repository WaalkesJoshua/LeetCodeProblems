class Solution {
  public double findMaxAverage(int[] nums, int k) {
      //create a left and right pointer, 0 and k - 1
      int left = 0;
      int right = k - 1;
      //create a maxAvg var and set to neg inf
      double maxAvg = Double.NEGATIVE_INFINITY;
      double winTotal = 0;


      //slide a window along nums
      while (right < nums.length) {
      //for first window pane, need to sum entire window (helper function)
          // have to create a subArray for helper function, copyOfRange
      if (left == 0) {
          int[] subArr = Arrays.copyOfRange(nums, 0, k);
          winTotal = findWindowSum(subArr);
      } else {
      //for each window after,
          //then only have to add new right value
          winTotal += nums[right];
      }
      //check window avg against maxAvg and if larger, reassing maxAvg
          double winAvg = winTotal/k;
          if(winAvg > maxAvg) {
              maxAvg = winAvg;
          }
      //before moving subtract left value,
          winTotal -= nums[left];
      //increment left and right to slide window
          left++;
          right++;

      }

      //return maxAvg
      return maxAvg;

  }

  public double findWindowSum (int[] window) {
      //create a total var
      double total = 0;
      //iterate over window and sum each value
      for (int num: window) {
          total += num;
      }
      //return total
      return total;
  }
}