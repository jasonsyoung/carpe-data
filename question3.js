/** 
 * Carpe Data Javascript Test
 * Question 3
 * 
 * @author Jason Young <jason@jasonsyoung.com>
 * 
 * 3. Create a class called Maybe
 * Create a class called Maybe. It should have the following properties:
 * 
 * · An attribute called innerValue which can be an Object of any type.
 * 
 * · A constructor that takes in a single argument which it will store as its innerValue.
 * 
 * · A method called map, which accepts a function as a single argument. As long as the
 *   innerValue property is not null or undefined, this argument function should then be
 *   used to change the value of the innerValue attribute.
 * 
 * · A method called getOrElse, which accepts a single argument. As long as the innerValue
 *   property is null or undefined, then this function should return innerValue and ignore
 *   the argument that was passed to it. However, if the value of innerValue is null or
 *   undefined, then this function should return the argument that it was provided.
 * 
 * Here is an example of how the class could be used:
 * 
 * // example usage #1
 * const maybeNum = new Maybe(41); // Maybe(41)
 * const maybeNumMapped = empty.map(function(a) { return a + 1; }); // Maybe(42)
 * maybeNumMapped.getOrElse(0); // 42
 *  
 * // example usage #2
 * const empty = new Maybe(undefined); // Maybe(undefined)
 * const emptyMapped = empty.map(function(a) { return a + 1; }); // Maybe(undefined)
 * emptyMapped.getOrElse(0); // 0
 *  
 * // example usage #3
 * new Maybe("hello")
 *   .map(function(a) { return a + " world!"; })
 *   .getOrElse("oops"); // "hello world!"
 * Bonus Points Question: Can you implement the Maybe class using const instead of var or let?
 */

// Things I Googled:
// - None for this question

/**
 * @class Maybe
 */
class Maybe {
    /**
     * Create a new instance of Maybe
     * 
     * @param {object} value - Any object to initialize the class with
     */
    constructor(value) {
        this.value = value
    }

    /**
     * Mutate the inner value
     * 
     * @param {function} modifier - function to modify the internal value
     * @return {Maybe} The instance of the Maybe class
     */
    map(modifier) {
        if (typeof modifier === 'function' && this.value !== null && typeof this.value !== 'undefined') {
            this.value = modifier.call(null, this.value)
        }
        return this
    }

    /**
     * Retrieve the inner value if set
     * 
     * @param {object} newValue - A value to return if the inner value is not set
     * @return {object} The inner value if set, otherwise `newValue`
     */
    getOrElse(newValue) {
        if (this.value !== null && typeof this.value !== 'undefined') {
            return this.value
        }
        return newValue
    }
}


module.exports = Maybe
