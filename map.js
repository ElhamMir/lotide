const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      console.log('item BEFORE: ', item);
      console.log('item AFTER: ', callback(item));
      console.log('---');
      results.push(callback(item));
    }
    return results;
  }
  
  
const results1 = map(words, word => word[0]);


console.log(results1);
const eqArrays = function(actual, expected) {
    if(actual.length === expected.length ){

        for(let i = 0;i < actual.length; i++){
            if(actual[i] !== expected[i]){
                return false;
            }
           
        }
        return true;
    }
    return false;


}
const assertArraysEqual = function(actual, expected){
    if(eqArrays(actual,expected) === true){
        console.log(`✅ Assertion Passed: ${actual } ===  ${expected} `);
    }
    else {
        console.log(`🛑 Assertion Failed: ${actual} !==  ${expected} `);
      }
}

assertArraysEqual( map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual( map(words, word => word[1]), [ 'r', 'o', 'o', 'a', 'o' ])
assertArraysEqual( map(words, word => word.length), [ 6,7,2,5,3  ])

module.exports = map;