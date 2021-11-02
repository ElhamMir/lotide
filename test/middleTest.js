const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

//console.log(middle([1])) // => []
//console.log(middle([1, 2]))
//console.log(middle([1, 2, 3, 4])) // => [2, 3])
//console.log(middle([1, 2, 3, 4, 5, 6]) )// => [3, 4]
//console.log(middle([1, 2, 3])) // => [2]
//console.log(middle([1, 2, 3, 4, 5])) // => [3]

assertArraysEqual([ ], [ ]); // => should PASS)
assertArraysEqual(middle([ 1,2]), [ ]); // => should PASS)
assertArraysEqual(middle([ 1,2,3]), [2 ]); // => should PASS)
//assertArraysEqual(middle([ 1,2,3,4], [2 ,3])); // => should PASS)
assertArraysEqual(middle([ 1,2,3,4,5]), [3]); // => should PASS)
assertArraysEqual(middle([ 1]), []); // => should PASS)
