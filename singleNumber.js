O:integer, the one that only appears once in nums
I:nums, a non empty array of integers
C:o(n) time, o(1) space
E:length of nums is 1, return first element

[4,1,2,1,2]

solo = 5
solo2 = 3


[2,4,1,2,1,4,3]

[2,5,2,3,4,4,3]

function singleNumber (nums) {
  //create an var to represent the solo value, Solo
  let solo = null;
  //create second placeholder var, backup
  let backup = null;
  //iterate over nums
  for (var val of nums) {
    //if solo is null, set equal to current value and continue
    if (solo === null) {
      solo = val;
      continue;
    }
    //if solo equals current val, set solo equal to backup and backup equal to null continue
    if (solo === val) {
      solo = backup;
      backup = null;
      continue;
    } else {
      //else if backup equals current val, set to null continue
      if (backup === val) {
        backup = null;
      } else {
        //else set back up to current val
        backup = val;
      }
    }
  }
  //return solo value var
  return solo;
}