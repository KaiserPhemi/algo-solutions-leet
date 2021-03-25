/**
 * @desc Removes the duplicates of number in an array using constant space
 * @param {Object[]} numArr Array of sorted numbers
 * @author Oluwafemi Akinwa <kaiser.phemi@protonmail.ch>
 */
const removeDuplicates = (numArr) => {
  let arrLen = numArr.length;
  if (arrLen === 0) return 0;
  let i = 0;
  for (let j = 1; j < arrLen; j++) {
    if (numArr[j] !== numArr[i]) {
      i++;
      numArr[i] = numArr[j];
    }
  }
  return i + 1;
};

module.exports = removeDuplicates;
