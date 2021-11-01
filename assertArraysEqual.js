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
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]))// => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]))// => false