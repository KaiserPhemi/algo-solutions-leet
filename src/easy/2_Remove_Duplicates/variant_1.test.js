// imports
const removeDups = require("./variant_1");
const assert = require("assert");

// test cases
assert.strictEqual(removeDups([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5);
assert.strictEqual(removeDups([1, 1, 2]), 2);
