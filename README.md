# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @elhammir/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`:  retrieve the first element from the array
* `tail(array)`: returns every element except the head (first element) of the array.
* `eqArrays(actual, expected)`: returns true if two arrays are the same
* `without(source,itemsToRemove  )`: This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
* `middle(actual )`: will take in an array and return the middle-most element(s) of the given array.
* `countOnly(allItems, itemsToCount )`: Let's work together to implement countOnly. This function should take in a collection of items and return counts for a specific subset of those items. 
* * `countLetters(actual)`: The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence. 
* * * `letterpositions(sentence)`: will return all the indices (zero-based positions) in the string where each character is found.
* * * * `findKeyByValue(actual, expected)`: will return all the indices (zero-based positions) in the string where each character is found.
* * * * * `eqObjects(object1, object2)`: will return true if the objects are equal and false otherwise

* * * * * `map(array, callback)`: return a new array based on the results of the callback function.

* * * * * `takeUntil(array, callback)`: will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value. 
* * * * * `findKey(array, callback)`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined. 
