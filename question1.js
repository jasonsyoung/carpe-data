'use strict';
/**
 * Carpe Data Javascript Test
 * Question 1
 * 
 * @author Jason Young <jason@jasonsyoung.com>
 * 
 * 1. Check if a number is divisible by either 3 or 5
 * Define a function that accepts a single Integer argument, then checks if the argument is
 * divisible by either 3 or 5. If the argument is divisible by 3 or 5, return true,
 * otherwise, return false.
 * 
 * function checkDivisible(someNum) {
 * // your logic here
 * }
 * 
 * checkDivisible(7);   // false
 * checkDivisible(11);  // false
 * checkDivisible(15);  // true
 */

// Things I Googled:
// - Checked if GCD/LCD was applicable here, decided modulus is simpler
// - Checked best method to check if variable is numeric, decided on `typeof` instead of 
//   methods on the `Number` class like `isNaN` or `isInteger`

/**
 * Checks the divisiblity of a numeric argument by 3 or 5
 * 
 * @param {Number} someNum 
 * 
 * @returns true if divisible,false if not numerical or not divisible
 */
function checkDivisible(someNum) {
    // Sanity check and modulus checks
    return typeof someNum === 'number' && ( someNum % 3 === 0 || someNum % 5 === 0 )
}

module.exports = checkDivisible