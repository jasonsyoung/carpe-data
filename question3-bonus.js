/** 
 * Carpe Data Javascript Test
 * Question 3 - Bonus
 * 
 * @author Jason Young <jason@jasonsyoung.com>
 * 
 * 3 (Bonus). Create a class called Maybe
 *
 * Bonus Points Question: Can you implement the Maybe class using const instead of var or let?
 */

// I believe this is what is being asked in this bonus question

// Things I Googled:
// - None for this question

/**
 * @class Maybe
 */
const Maybe = class {
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
