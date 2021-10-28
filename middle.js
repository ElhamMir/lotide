
const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(` ✅Assertion Passed: ${actual } ===  ${expected} `);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !==  ${expected} `);
    }
  //console.assert(assertEqual("Lighthouse Labs", "Bootcamp"))
  };
  

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
const middle = function(actual) {
    if(actual.length < 3 ){
        return []
    }
    if(actual.length %2 === 0){
        let y = actual.length/2
        return [actual[y-1] , actual[y]]


    }
    else if(actual.length%2 === 1){
        let x = Math.floor(actual.length /2)
        return [actual[x]]



    }
}
console.log(middle([1])) // => []
console.log(middle([1, 2]))
console.log(middle([1, 2, 3, 4])) // => [2, 3])
console.log(middle([1, 2, 3, 4, 5, 6]) )// => [3, 4]
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(assertArraysEqual([ ], [ ])); // => should PASS)
console.log(assertArraysEqual(middle([ 1,2]), [ ])); // => should PASS)
console.log(assertArraysEqual(middle([ 1,2,3]), [2 ])); // => should PASS)
console.log(assertArraysEqual(middle([ 1,2,3,4]), [2 ,3])); // => should PASS)
console.log(assertArraysEqual(middle([ 1,2,3,4,5]), [3])); // => should PASS)
console.log(assertArraysEqual(middle([ 1]), [])); // => should PASS)


