/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  //iterate over flower bed using a sliding window pattern
  let i = 0;
  while (i < flowerbed.length) {
      if (n === 0) {return true}
      //if a space index value is zero and has zero on both sides, subtract 1 from n in increment pointer by 2 -> helper function
      if(isOpenSpace(flowerbed, i)) {
          n -= 1;
          i += 2;
      } else {
      //otherwise increment pointer by 1
          i++;
      }
  }

  //return true if n equals zero,  false if n > 0
  return n === 0 ? true : false;
};

const isOpenSpace = (flowerbed, i) => {
  let prev = flowerbed[i-1] === 0 || flowerbed[i-1] === undefined;
  let spot = flowerbed[i] === 0;
  let next  = flowerbed[i+1] === 0 || flowerbed[i+1] === undefined;
  if (prev && spot && next ) {
      return true;
  }
  return false;
}
