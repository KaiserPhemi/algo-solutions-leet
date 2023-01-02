// imports
const search = require("./variant");
const assert = require("assert");

// test cases
assert.strictEqual(search([-1, 0, 3, 5, 9, 12], 9), 4);
assert.strictEqual(search([-1, 0, 3, 5, 9, 12], 2), -1);
