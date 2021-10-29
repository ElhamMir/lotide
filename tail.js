const tail = function(array) {
  let results  = [];
  for (let i = 1; i < array.length; i++) {
    results.push(array[i]);

  }
  return results;
};


const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(` ✅Assertion Passed: ${actual } ===  ${expected} `);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !==  ${expected} `);
  }
  //console.assert(assertEqual("Lighthouse Labs", "Bootcamp"))
};
  // Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
