/**
 * Unit tests for question 2
 */

const test = require('unit.js')
const filter = require('../question2')

describe('Test filter method', function() {
    it('test numeric array 0-19 with predicate elements < 10', function() {

        const arr = Array.from(Array(20).keys())
        const predicate = function(e) { return e < 10; }

        const filtered = filter(arr, predicate)
        const nativeFiltered = arr.filter(predicate)

        test
            .case('Checking array lengths match')
                .array(filtered)
                    .value(filtered.length)
                        .is(arr.length / 2)

        test
            .case('Checking equality to the native array')
                .array(nativeFiltered)
                    .is(filtered)
    })
})