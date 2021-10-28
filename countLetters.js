
const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(` ✅Assertion Passed: ${actual } ===  ${expected} `);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !==  ${expected} `);
    }
  //console.assert(assertEqual("Lighthouse Labs", "Bootcamp"))
  };

  const countLetters = function(actual) {
    const results = {}

    for(let i=0; i<actual.length ;i++ ){
        if(actual.charAt(i) !== ' '){

        if (results[actual.charAt(i)]) {
            results[actual.charAt(i)] += 1;
          } else {
            results[actual.charAt(i)] = 1;
          }}
    }




    return results;

  }
  console.log(countLetters("lighthouse in the house") )