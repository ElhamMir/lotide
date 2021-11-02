const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

describe("#middle", () => {
    it("returns []] for []", () => {
        assert.deepEqual(middle([]), []);
    });
  
    it("returns []] for [ 1,2]", () => {
        assert.deepEqual(middle([ 1,2]), []); 
    });
  
    it("returns [2] for [ 1,2,3]", () => {
        assert.deepEqual( middle([ 1,2,3]), [2 ]); 
    });
  
  
    it('returns [3] for [ 1,2,3,4,5]', () => {
        assert.deepEqual(middle([ 1,2,3,4,5]), [3] ); 
    });

    it("returns []] for [1]", () => {
        assert.deepEqual(middle([1]), []);
    });
  
  });
//console.log(middle([1])) // => []
//console.log(middle([1, 2]))
//console.log(middle([1, 2, 3, 4])) // => [2, 3])
//console.log(middle([1, 2, 3, 4, 5, 6]) )// => [3, 4]
//console.log(middle([1, 2, 3])) // => [2]
//console.log(middle([1, 2, 3, 4, 5])) // => [3]

//assertArraysEqual([ ], [ ]); // => should PASS)
//assertArraysEqual(middle([ 1,2]), [ ]); // => should PASS)
//assertArraysEqual(middle([ 1,2,3]), [2 ]); // => should PASS)
//assertArraysEqual(middle([ 1,2,3,4], [2 ,3])); // => should PASS)
//assertArraysEqual(middle([ 1,2,3,4,5]), [3]); // => should PASS)
//assertArraysEqual(middle([ 1]), []); // => should PASS)
