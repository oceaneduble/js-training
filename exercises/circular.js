'use strict'

/*
 * Create an object `circular` that has a property named `circular` with
 * itself as the value
 *
 * @notions Data-Structures, Get, Set
 */

// Your code :

function Circular(circular) {
    this.abc = "Hello";
    this.circular = this;
  }
  
  var foo = new Circular();
  return (foo.circular.circular.circular.circular.circular.abc);
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof circular, 'object')
assert.strictEqual(circular.circular, circular)
assert.strictEqual(circular.circular.circular, circular)
assert.strictEqual(circular.circular.circular.circular, circular)
assert.strictEqual(circular.circular.circular.circular.circular, circular)
// End of tests */
