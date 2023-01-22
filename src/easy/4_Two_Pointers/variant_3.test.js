// imports
const moveZeroes = require("./variant_3");
const assert = require("assert");

// test cases
// assert.deepStrictEqual(moveZeroes([0, 0, 1, 0, 3, 12]), [1, 3, 12, 0, 0, 0]);
// assert.deepStrictEqual(moveZeroes([0]), [0]);
assert.deepStrictEqual(moveZeroes([0, 0, 1]), [1, 0, 0]);
