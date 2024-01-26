/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  //create a return string var and set to ""
     let ans = "";
     //create a stack
     let stack = [];
     //iterate over s
     for (const char of s) {
         //if current char is a *, then pop value from stack
         if (char === "*" && stack.length > 0) {
             stack.pop();
         } else if (char !== "*") {
         //if current char is a letter, push to stack
             stack.push(char);
         }
     }
     //while stack is not empty
     while(stack.length > 0) {
         //pop value from stack and add return string to the end of it
         let val = stack.pop();
         ans = val + ans;
     }
     //return string var
     return ans;
};

// O: string containing remaining characters after removal process is performed on each star
// I:string containing letters and stars
// C:at least one character in string, op can be performed,
// E: more stars than letters
// D: stack would be useful to handle the backtracking for multiple stars
