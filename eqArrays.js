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
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))// => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))// => false

const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(` ✅Assertion Passed: ${actual } ===  ${expected} `);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !==  ${expected} `);
    }
  //console.assert(assertEqual("Lighthouse Labs", "Bootcamp"))
  };

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
