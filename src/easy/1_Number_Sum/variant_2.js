/**
 * Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the array sum up to the target sum, the function should return them in an array. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.

  Sample input:
  [3,5,-4,8,11,-1,6], 10

  Sample Output:
  [-1,11]
 */

/**
 * @desc O(n) time | O(n) space
 * @param {array} numArray
 * @param {number} targetSum
 */
const twoSum = (numArray, targetSum) => {
  // create a hash
  let numHash = {};

  // loop through array
  for (const currentNum of numArray) {
    let targetNum = targetSum - currentNum;
    if (targetNum in numHash) {
      return [currentNum, targetNum].sort((a, b) => a - b);
    } else {
      numHash[currentNum] = true;
    }
  }
  return [];
};

module.exports = twoSum;
