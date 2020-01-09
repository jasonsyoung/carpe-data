const test = require('unit.js')
const Maybe = require('./question3')

// example usage #1
const maybeNum = new Maybe(41); // Maybe(41)
const maybeNumMapped = maybeNum.map(function(a) { return a + 1; }); // Maybe(42)
console.log('1: ', maybeNumMapped.getOrElse(0)); // 4

// example usage #2
const empty = new Maybe(undefined); // Maybe(undefined)
const emptyMapped = empty.map(function(a) { return a + 1; }); // Maybe(undefined)
console.log('2: ', emptyMapped.getOrElse(0)); // 0

// example usage #3
console.log('3: ', new Maybe("hello")
  .map(function(a) { return a + " world!"; })
  .getOrElse("oops")); // "hello world!"
