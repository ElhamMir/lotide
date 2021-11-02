const eqArrays = require('./eqArrays')
//const assertEqual = require('./assertEqual');
const assertArraysEqual = function(actual, expected){
    if(eqArrays(actual,expected) === true){
        console.log(`✅ Assertion Passed: ${actual } ===  ${expected} `);
    }
    else {
        console.log(`🛑 Assertion Failed: ${actual} !==  ${expected} `);
      }
}
module.exports = assertArraysEqual;
