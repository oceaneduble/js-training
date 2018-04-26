'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */

 function JadenCase(str) {
  
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

  };
        
  
  


//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof JadenCase, 'function' )
assert.strictEqual(JadenCase('How are you?'), 'How Are You?')


// End of tests */
