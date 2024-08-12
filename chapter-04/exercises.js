////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * 
 * I: two numbers
 * O: an array
 * C:
 * E: values are between start and end
 */
//default step to 1, current val to start, and a new array
 function range(start, end, step = 1, currentVal = start, newArr = []){
//if the start is the end or am improper step is given 
    if(start === end || (start > end && step > 0 ) || (start < end && step < 0)){
      //return the new array
      return newArr
    } 
    
    //if the start is less than the end
    if(start < end) {
      //base
      //if currentval is greater than the end
       if(currentVal > end){
        //return the new array
         return newArr
       } 
       //recursion
       //push current val to the array
         newArr.push(currentVal);
         //increase vurrent val by the step
         currentVal += step;
         //return the range function with updated parameters
         return range(start, end, step, currentVal, newArr);
       }
    //if start is more than the end
    if(start > end) {
      //do the exact same thing but reverse 
      if(currentVal < end){
        return newArr
      } else {
        newArr.push(currentVal);
        return range(start, end, step, currentVal - Math.abs(step), newArr)
      }
    }
    
  }

/**
function range(start, end, step = 1){
let currentVal = start;
let newArr = [];
  if(start === end){
    return newArr
  } else {
    newArr.push(start);
  }
  
  if(start < end){
    while(currentVal <= end){
      currentVal += step;
      newArr.push(currentVal);
    }
  }
  if(start > end){
    while (currentVal >= end){
      currentVal -= Math.abs(step); 
      newArr.push(currentVal)
    }
  }
  newArr.pop()
  return newArr
}
*/
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * I: an array
 * O: a number
 * C:
 * E:
 */
//takes in an array parameter
function sum(array) {
  //returns the result of array calling reduce, that adds the sum of each number to total, seed is 0
return array.reduce( (sum, val) => sum += val , 0)
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/** 
 * I: array
 * O: new array, reversed
 * C:
 * E: array is reversed
 * */ 
//takes in array parameter
function reverseArray(array) {
  //return the array calling map. map returns an array of the return values of its function.
  //function takes in the value, an index, and the array itself, and returns the array at the index of the arrays length minus the sum of the current index + 1
  return array.map((num, i, array) => array[array.length - ( 1 + i )] )
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * I: an array
 * O: 
 * C:
 * E:
 */
//take in array parameter, default an index to zero
function reverseArrayInPlace(array, i = 0, q) {
  //base
  //if the index is greater than or equal to the rounded down total of the length of the array over 2
  if(i >= Math.floor(array.length / 2)){
    //return the array
    return array;
  }
  //recursion
  //assign q to i value in array
  q = array[i];
  //assign index value in array to its opposite end. the length - 1 - index. the 1 is there cause index starts at 0
  array[i] = array[array.length - 1 - i];
  //assign the other end to q
  array[array.length - 1 - i] = q;
  //return the result of the called function with updated parameters
  return reverseArrayInPlace( array, i + 1, q )
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * I: an array
 * O: an object
 * C: object key rest values are the following index in the array, object key value values are the arrays index value 
 * E:
 */
//default an empty object param
function arrayToList(array, newObj = {}) {
  //if the array length is 0
  if( array.length === 0){
    //return null
    return null
  }
  //object initializes key value to 0 index array
  newObj["value"] = array[0];
  //object initiates key rest to the result of calling arrayToList slice 1
  newObj["rest"] = arrayToList(array.slice(1))
  //return the new object
  return newObj;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: an object list
 * O: an array
 * C
 * E
 */
//default an array and index to zero
function listToArray(object, newArr = [], i = 0) {
 //if object rest key is null
  if(object.rest === null){
    //push value to array
    newArr.push(object.value);
    //return array
    return newArr
  }
//new array at index i is assigned the object key value
  newArr[i] = object.value;
  //recursion, call function again with updated index
return listToArray(object.rest, newArr, i + 1 )

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
/**
 * I: 2 values
 * O: an object LIST
 * C:
 * E: parameter values are the key values of the object. keys for the object must be 'value' for first parameter and 'rest' for the second parameter.
 * i.e.
 * OUTPUT =>
 * {
 * value: "parameter 1"
 * rest: "parameter 2"
 * }
 */
//2 parameters, and default empty object
function prepend(valueKeyValue, restKeyValue, returnObject = {}){
  //add values to respective keys in a new object
  returnObject["value"] = valueKeyValue;
  returnObject["rest"] = restKeyValue;
  //return the object
  return returnObject;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
/**
 * I: an object list and an number
 * O: a single value
 * C:
 * E: single value is the index of the list as an array
 */
function nth(list, number) {
  //turn the list into an array, and find the index number, return the corresponding value 
    return listToArray(list)[number];

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  //determine if x and y are NOT objects
  if (typeof x !== 'object' && typeof y !== 'object'){
    return x === y
  }
  //determine if x OR y is not an object
  if (typeof x !== 'object' || typeof y !== 'object'){
    return false;
  }
  //create arrays of each inputs keys
let xKeys = Object.keys(x); 
let yKeys = Object.keys(y); 

//if they dont have the same length
if (xKeys.length !== yKeys.length){
  //return false
  return false;
}
//iterate to determine if array keys match and values at keys match
for(let i = 0; i < xKeys.length; i++){
  //if statement
  if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){ //determine if current key is not included
      //
  return false                    
  }
}
 return true
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};