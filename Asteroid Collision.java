
class Solution {
  public int[] asteroidCollision(int[] asteroids) {
      // create a var to keep track of if a collision happened, "collided" = false
      boolean collided = false;
      // create a stack to handle collisions outcomes in order
      Stack<Integer> stack = new Stack<>();
      // iterate over asteroids
      for (int i = 0; i < asteroids.length; i++) {
          int cur = asteroids[i];
          int next  = 0;
          if ( i < asteroids.length - 1) {
              next = asteroids[i + 1];
          }

          // if val is pos, and next val is neg, indicates collision
          if (cur > 0 && next < 0) {
                  // set collided to true
                  collided = true;
              if (cur != -next) {
                  // push a call to collision to stack
                  stack.push(collide(cur, next));
              }
              i++;
          } else {
              // else push val to stack
              stack.push(cur);
          }

      }
      // create an int array equal in size to the stack, 'ans'
      int[] ans = new int[stack.size()];
      // iterate backwards through array and pop stack values into array
      for (int i = ans.length - 1; i >= 0; i--) {
          ans[i] = stack.pop();
      }

      // if collided is false
      if (!collided) {
          // return "ans"
          return ans;
      } else {
          // else return recursive call with ans
          return asteroidCollision(ans);
      }
  }

  // create a function to calc collisions
  public int collide(int a, int b) {
      if (a > -b) {
          return a;
      }
      return b;
  }
}

// O: int array representing the remaining asteroids, all negatives left of all
// positives
// I: int array of positive or negative asteroids
// C: asteroids moving in same direction wont ever collide, larger absolute
// value "wins" the collision
// E:
// D: stack to handle collisions in order