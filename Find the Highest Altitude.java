class Solution {
  public int largestAltitude(int[] gain) {
      //given a starting alt of 0,
      int curAlt = 0;
      int maxAlt = 0;
      //we need to iterate through gain
      for (int netGain: gain) {
      //and keep track of the current altitude based on the change in alt (gains[i])
          curAlt += netGain;
      //this needs to be compared against a maxAlt tracker and update it accordingly
          maxAlt = Math.max(maxAlt, curAlt);
      }

      //finally return maxAlt
      return maxAlt;

  }
}