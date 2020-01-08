'use strict';
/**
 * Carpe Data Javascript Test
 * Question 2
 * 
 * @author Jason Young <jason@jasonsyoung.com>
 * 
 * 2. Implement the filter method for an Array
 * Define a function that replicates the filter function for Array objects in Javascript. It
 * should accept two arguments, an Array and the function used to perform the actual filtering.
 * 
 * function filter(array, predicate) {
 *   // your logic here
 * }
 *  
 * // example usage #1
 * const numbers = [0, 1, 2, 0, 0, 3, 4];
 * filter(numbers, function(num) { return num !== 0; }); // [1, 2, 3, 4]
 *  
 * // example usage #2
 * const phrases = ["soccer is lame", "viva o benfica!"];
 * filter(phrases, function(phrase) { return phrase !== "soccer is lame"; }) // ["viva o benfica!"]
 */

// Things I Googled:
// - The docs on MDN for the behavior of the actual Array.filter method
//   See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

/**
 * Filters an array by testing each argument against a predicate function
 * 
 * @param {Array} array - The array to filter
 * @param {Function} predicate - Function that returns true or false 
 * 
 * @returns filtered array, otherwise an empty array 
 */
function filter(array, predicate) {
    let result = []
    if (Array.isArray(array) && typeof predicate === 'function') {
        array.forEach(element => {
            if (predicate.call(null, element)) {
                result.push(element)
            }
        })
    }
    return result
}

module.exports = filter