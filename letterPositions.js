const letterPositions = function(sentence) {
    const results = {};

    for(let i=0; i<sentence.length ;i++ ){
        if(sentence.charAt(i) !== ' '){

        if (results[sentence.charAt(i)]) {
            results[sentence.charAt(i)].push(i);
          } else {
            results[sentence.charAt(i)] = [i];
          }}
    }

    // logic to update results here
    return results;
  };

  console.log(letterPositions("lighthouse in the house") )

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
assertArraysEqual(letterPositions("hello").e, [1]);
