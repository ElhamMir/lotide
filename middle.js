const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')
  

  

const middle = function(actual) {
    if(actual.length < 3 ){
        return []
    }
    if(actual.length %2 === 0){
        let y = actual.length/2
        return [actual[y-1] , actual[y]]


    }
    else if(actual.length%2 === 1){
        let x = Math.floor(actual.length /2)
        return [actual[x]]



    }
}

module.exports = middle;



