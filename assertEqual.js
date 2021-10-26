
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(" ✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑 Assertion Failed: " + actual + " !== " + expected);
  }
//console.assert(assertEqual("Lighthouse Labs", "Bootcamp"))
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hi","Hi");
assertEqual("yes","no");
assertEqual(6,6);
assertEqual(34,77);
