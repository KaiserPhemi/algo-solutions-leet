// imports
const removeDups = require("./variant_1");
const assert = require("assert");

// test cases
assert.deepStrictEqual(removeDups([1, 1, 2]), [1, 2]);
assert.deepStrictEqual(
  removeDups([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]),
  [0, 1, 2, 3, 4]
);
