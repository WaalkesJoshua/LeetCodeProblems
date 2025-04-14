class Solution {
  public int coinChange(int[] coins, int amount) {
      //create an arry of length amount + 1 and set all values to amount +1 called dp
      int[] dp = new int[amount + 1];
      Arrays.fill(dp, amount + 1);
      //dp at 0 equals 0 as our base case/edge case
      dp[0] = 0;
      //calculate all values of dp for each index up to amount by iterating over dp and for each value of dp
      for (int i = 1; i <= amount; i++) {
          //iterate over coins
          for (int c : coins) {
          //if current coin is less than index
              //dp at index equals 1 plus dp[index - coin value]
              if (c <= i) {
                  dp[i] = Math.min(1 + dp[i - c], dp[i]);
              }
          }
      }

      //if dp[amount] does not equal amount + 1, then return dp[amount]
          //else return -1
      return dp[amount] > amount ? -1 : dp[amount];
  }
}
