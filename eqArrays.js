const assertEqual = require('./assertEqual');
const eqArrays = function(actual, expected) {
  if(actual.length === 0){
    if(expected.length ===0){
      return true;
    }
    return false
  }
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

module.exports = eqArrays;