
const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(` ✅Assertion Passed: ${actual } ===  ${expected} `);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !==  ${expected} `);
    }
  //console.assert(assertEqual("Lighthouse Labs", "Bootcamp"))
  };

  const findKey = function(object, callback) {
    for (const i in object) {
        console.log('item BEFORE: ', i);
        console.log('item AFTER: ', callback(i));
        console.log('---');
        if( callback(object[i]) === true){
            return i
      }
      


  }
  return false
}
 console.log( findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) )// => "noma"
  
  assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 3)  , "Akaleri")
  assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 5)  , false)