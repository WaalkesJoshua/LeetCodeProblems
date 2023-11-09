**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  //create a return value and set equal to empty string
  const long1 = word1.length;
  const long2 = word2.length;
  let zippered = '';
  //write a for loop for shortest value length
  if (long1 !== long2) {
    for (let i = 0; i <= long1 || i <= long2; i++) {
      if (i === long1) {
        let remaining = word2.slice(i);
        zippered += remaining;
        break;
      } else if (i === long2) {
        let remaining = word1.slice(i);
        zippered += remaining;
        break;
      } else {
        zippered += word1[i] + word2[i];
      }
    }
  } else {
    for (let i = 0; i < long1; i++) {
        zippered += word1[i] + word2[i];
    }
  }

  return zippered;
};