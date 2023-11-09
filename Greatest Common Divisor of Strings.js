/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

  //if they are have common substring, then adding them together in either direction should be the smae string as 3t + 2t equals 2t + 3t
  //if not, return empty string
  if(str1 + str2 !== str2 + str1) {
      return "";
  }
  //find shortest length, short
  const short = str1.length < str2.length ? str1.length : str2.length;


  //loop through both words until both lengths modulo short devrementally until equal 0,
  for (let x = short; x > 0; x-- ) {
      if((str1.length % x === 0) && (str2.length % x === 0)) {
  //then return the substring of str1 from 0 to that value
          return str1.substring(0, x);
      }
  }


};






//expected output = "ABAC"

// O: String containing the GCD between S and T.
// I: Two String S and T
// C: all letters uppercase, non-empty strings less than 1000 characters
// E: S equals T,