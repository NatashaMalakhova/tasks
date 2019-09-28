import assert from 'assert';
import factorial from './implementations';

// Example
assert.equal(factorial(2), 2);
assert.equal(factorial(3), 6);

// BEGIN (write your solution here)
assert.equal(factorial(1), 1);
assert.equal(factorial(0), 1);
assert.equal(factorial(5), 120);
assert.equal(factorial(4), 24);
assert.equal(factorial(6), 720);
// END
