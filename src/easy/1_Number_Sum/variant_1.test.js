// module import
const numSum = require("./variant_1");
const assert = require("assert");

// test case
assert.deepStrictEqual(numSum([2, 7, 11, 15], 9), [1, 0]);
assert.deepStrictEqual(numSum([3, 2, 4], 6), [2, 1]);
assert.deepStrictEqual(numSum([3, 3], 6), [0, 1]);
