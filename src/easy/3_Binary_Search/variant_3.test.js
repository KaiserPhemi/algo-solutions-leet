// imports
const searchInsert = require("./variant_3");
const assert = require("assert");

// test cases
assert.strictEqual(searchInsert([1, 3, 5, 6], 7), 4);
assert.strictEqual(searchInsert([1, 3, 5, 6], 2), 1);
assert.strictEqual(searchInsert([1, 3, 5, 6], 5), 2);
