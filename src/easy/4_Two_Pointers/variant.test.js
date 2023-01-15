// imports
const sortedSquares = require("./variant");
const assert = require("assert");

// test cases
assert.deepStrictEqual(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
assert.deepStrictEqual(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121]);
