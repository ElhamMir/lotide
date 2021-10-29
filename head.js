const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(` ✅Assertion Passed: ${actual } ===  ${expected} `);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !==  ${expected} `);
    }
  //console.assert(assertEqual("Lighthouse Labs", "Bootcamp"))
  };

  const head = function(i){
      //var j = ""
      //console.log(j+i[0])
      return i[0]
     // console.log(i[0]);
  }

  assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
