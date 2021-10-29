const takeUntil = function(array, callback) {
    // ...
    const results = [];
    for (let item of array) {
      console.log('item BEFORE: ', item);
      console.log('item AFTER: ', callback(item));
      console.log('---');
      if( callback(item) === false){
      results.push(item);}
      else{
          return results
      }
    }
    return results;
  }

  

  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
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

const data3 = [21,3,5,9,11,13,22,43];
const data4 = ["hi", "szrgzsgz", "kdnzkngzgknzgrnzrgknr", "ejzszs"];
const data5 = [1, 2, 5, 7, 2, -1, 2, 4, 5];


assertArraysEqual( takeUntil(data3, x =>x % 2 ===0), [21,3,5,9,11,13])
assertArraysEqual( takeUntil(data4, x =>x.length>8), ["hi", "szrgzsgz"])
