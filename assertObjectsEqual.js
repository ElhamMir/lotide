const eqObjects = function(object1, object2) {
    if( Object.keys(object1).length !== Object.keys(object2).length ){
     return false;
     }
     for(const i in object1){
         if(Array.isArray(object1[i]) === true){
            // console.log(Array.isArray(object1[i]))
             if(eqArrays(object1[i],object2[i]) == false){
                 return false
 
             }
         }
         else{
         if (object1[i] !== object2[i]){
             return false
         }}
     }
     return true
 
 };

 // FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    // Implement me!
    //const inspect = require('util').inspect; // <= add this line
    const inspect = require('util').inspect; // <= add this line
    console.log(`Example label: ${inspect(actual)}`);

    if(eqObjects(actual,expected) === true){
        console.log(`✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)} `);
    }
    else {
        console.log(`🛑 Assertion Failed: ${inspect(actual)} ===  ${inspect(expected)}  `);
      }
  };
  const ab = { a: '1', b: 2 }
  const ba = { b: 2, a: '1' }
  console.log(assertObjectsEqual(ab,ba))
  //console.log(`Example label: ${inspect(actual)}`);