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

const without = function(source,itemsToRemove  ) {
    const results = [];
    for(let i = 0;i<source.length;i++){
        //for(let j = 0; j<itemsToRemove.length;j++){
            if(itemsToRemove.includes(source[i]) === false){
                results.push(source[i])

                
            }
        
    }
    return results;
}
assertArraysEqual(without([1, 2, 3], [1]),[2, 3])
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
