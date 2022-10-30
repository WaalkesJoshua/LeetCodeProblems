var SmallestInfiniteSet = function() {
  //define an array of "popped" values
  this.popped = [];
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  //iterate over "popped" if length is greater than or equal to 1
  if (this.popped.length === 0) {
    this.popped[0] = 1
    return 1;
  }
  if (this.popped.length >= 1) {
    for (var i = 0; i <= this.popped.length; i++) {
    // if i + 1 doesnt equal current value
      if (i + 1 !== this.popped[i]) {
      //splice i + 1 into popped at i
        this.popped.splice(i, 0, i + 1);
      //return i+1
      return i + 1;
      }
  }
    }
  //push popped.length into popped
  this.popped.push(this.popped.length);
  //return popped.length
  return this.popped.length;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  //check if popped contains num
  if (this.popped.includes(num)) {
    //if true
      //splice num out of popped
    let index = this.popped.indexOf(num);
    this.popped.splice(index, 1);
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */