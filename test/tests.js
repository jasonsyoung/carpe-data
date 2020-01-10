/**
 * Unit tests for question 2
 */

// Things I Googled
// - https://gist.github.com/UsabilityEtc/09305c0186509a6e05efe318983c2879
//   to get a function that generates an array with random numbers 
// - https://gist.github.com/6174/6062387 for generating random strings

const test = require('unit.js')
const filter = require('../src/question2')

describe('Test filter method', function() {
    it('test numeric array 0-19 with predicate where elements < 10', function() {

        const arr = Array.from(Array(20).keys())
        const predicate = function(e) { return e < 10; }

        const filtered = filter(arr, predicate)
        const nativeFiltered = arr.filter(predicate)

        test
            .case('Checking equality to the native array filter function')
                .array(filtered)
                .array(nativeFiltered)
                    .is(filtered)
    })

    it('test object array with predicate where elements contain `value` property that is odd', function() {

        const arr = new Array(30).fill(0).map(n => {
            return { value: Math.round(Math.random() * (500 - 1)) + 1 }
        })
        const predicate = function(e) { return e.value % 2 === 1; }

        const filtered = filter(arr, predicate)
        const nativeFiltered = arr.filter(predicate)

        test
            .case('Checking equality to the native array filter function')
                .array(filtered)
                .array(nativeFiltered)
                    .is(filtered)
    })

    it('test string array predicate matching the pattern [integer][character][character][integer >= 5]', function() {

        const arr = new Array(1000).fill(0).map(n =>
            Math.random().toString(36).substring(3, 17) + Math.random().toString(36).substring(3, 17)
        )
        const predicate = function(e) { return /[0-9][a-z]{2}[5-9]/ig.test(e) }
        const filtered = filter(arr, predicate)
        const nativeFiltered = arr.filter(predicate)

        test
            .case('Checking equality to the native array filter function')
                .array(filtered)
                .array(nativeFiltered)
                    .is(filtered)
    })
})
