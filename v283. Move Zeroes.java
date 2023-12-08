class Solution {
    public void moveZeroes(int[] nums) {
        int P1 = 0;
        for (int num: nums) {
            if(num != 0) {
                nums[P1] = num;
                P1++;
            }
        }
        while(P1 < nums.length) {
            nums[P1] = 0;
            P1++;
        }

    }
}

// O: nums array with all zeros at the end and remaining values in original order
// I:array of integers
// C: constant space, nums array non empty
// E: nums array length is 1