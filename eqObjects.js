// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(` ✅Assertion Passed: ${actual } ===  ${expected} `);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !==  ${expected} `);
    }
  //console.assert(assertEqual("Lighthouse Labs", "Bootcamp"))
  };

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };

  assertEqual( eqObjects(ab, ba), true); // => true
  
  const abc = { a: "1", b: "2", c: "3" };
  assertEqual( eqObjects(ab, abc),false); // => false
  const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false
