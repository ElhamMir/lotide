

const assert = require('chai').assert;
//const assertEqual = require('../assertEqual')
const tail = require('../tail')

describe("#tail", () => {
    it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
        assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });
  
    it('returns Hello, Lighthouse, Labs] for ', () => {
        assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
    });
  
    
  
  });
 /*// Test Case: Check the original array
 const words = ["Yo Yo", "Lighthouse", "Labs"];
 tail(words); // no need to capture the return value since we are not checking it
 assertEqual(words.length, 3); // original array should still have 3 elements!
 
 // Test Case 1: Check the returned array elements
 const result = tail(["Hello", "Lighthouse", "Labs"]);
 assertEqual(result.length, 2); // ensure we get back two elements
 assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
 assertEqual(result[1], "Labs"); // ensure second element is "Labs"*/
 