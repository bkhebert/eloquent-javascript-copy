// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/**
 * I: array of arrays
 * O: a single array with all the values inside the arrays combined
 * C: must use reduce and concat
 * E:
 */
//parameter will represent an array of arrays
function flatten (arrayOfArrays){
//return the result of the parameter invoking reduce method
return arrayOfArrays.reduce((returnArr, currentArr) => {
  //reduce method will concat the current value with the return arr
  return returnArr.concat(currentArr);
  //seed is an array literal
  }, []);
  }

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/**
 * I: a value, a test function, an update function, and a body function
 * O: nothing
 * C:
 * E:
 * Write a higher-order function loop that provides something like a for loop 
 * statement. It should take a value, a test function, an update function,
 *  and a body function. Each iteration, it should first run the test function 
 * on the current loop value and stop if that returns false. It should then call 
 * the body function, giving it the current value, and finally call the update 
 * function to create a new value and start over from the beginning.
 * loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

When defining the function, you can use a regular loop to do the actual looping.
 */
//functino takes in a number, then functions: a test, an update, and body functions
function loop(num, test, update, body) {
//if the test is true
if(test(num)){
  //run the body function
body(num)
//update the number
num = update(num)
//use recursion on new values
return loop(num, test, update, body)
}

}
  /*if(!test(num)){
  body(num)
  update(num)
  return loop(num, test, update, body);
}*/



// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
Arrays also have an every method analogous to the some method. 
This method returns true when the given function returns true for every element in the array.
 In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters.
 Write two versions, one using a loop and one using the some method.

function every(array, test) {
  // Your code here.
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
*/
/**
 * I: array and predicate function
 * O:
 * C:
 * E:
 * 
 */
//function takes in an array and predicate function
function every(array, predicateFunc) {
//function will loop through the entire array, stopping at the end
for(let i = 0; i < array.length; i += 1){
//function will pass each value into the predicate function, if any return false
  if(!predicateFunc(array[i])){
//return false
    return false
  }
}
//if the loop finishes with nothing returning false; return true
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * Write a function that computes the dominant writing 
 * direction in a string of text. Remember that each 
 * script object has a direction property that can be "ltr" 
 * (left to right), "rtl" (right to left), or "ttb" 
 * (top to bottom).
 * 
 this is what a typical SCRIPTS array of 
  objects looks like in the 
 array
{
  name: "Coptic",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "ltr",
  year: -200,
  living: false,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}
 function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
I: string
O: string
C: 
E: string correlates to the majority direction of chars

The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.
 */
function dominantDirection(string) {
string.replaceAll(" ", "")
arrayOfDirections = []
console.log(string)
  //create an array from the string. for each index of a single string char
 Array.from(string.replaceAll(" ","")).forEach( (current) => {

  /***********
    ///check its character code using codePointAt(?). which returns the full 
    //character code instead of half of it.
    //if the code is included in any of the arrays within the SCRIPTS array of objects 
    //key value of ranges... which is an array of arrays...push the direction into the array
**************/

    //initialize the variable 'code' to equal the current character using codePointAt index zero
    let code = current.codePointAt(0);
    //if the code is not undefined
    if(code != undefined){
      //set the value equal to the scripts object calling the reduce method, the reduce method takes in the current object within the scripts array, and the accumulator will be a script object
    let value = SCRIPTS.reduce( (scriptObj, currentObj) => {
      //inside the reduce method, we have an if statement based on the return value of the current objects key value of ranges calling the reduce method.
                                      //this reduce method has a bool for an accumulator, and takes in each array inside the objects range key. 
                                                            //if the code is within the 2 values in the array, set the bool to true, return the bool. the seed is defaulted to false
        if(currentObj.ranges.reduce( (bool, currentArr) => { if(code >= currentArr[0] && code <= currentArr[1]){ bool = true } return bool }, false ))
          {
            //this if statement should only trigger for ONE object, in which case, we will assign the script Object to the current object.
          scriptObj = currentObj;
         }
         //return the script object here, and it will become the value of the variable value described earlier
         return scriptObj;
         //seed is an object literal
      }, {}  ) 
      //this line of code is still inside the forEach mothod from earlier. so for Each character, we will add the values key value of direction into a new array
      arrayOfDirections.push(value.direction);
    } 
      
    
     

    //check the direction of that language, and add a counter
    //to the direction it is in
    //return the string associated with the highest number of
    //directions
  })
//initialize 3 variables to zero
  let ltr = 0
  let rtl = 0
  let ttb = 0
  //in the array of directions, run the forEach method, takes in the direction located at each index
  arrayOfDirections.forEach( (direction) => {
    //depending on the value of the direction, we will increment the corresponding variables
    if (direction === 'ltr'){ 
      ltr += 1
    }
    if (direction === 'rtl'){
      rtl += 1
    }
    if (direction === 'ttb' ){
      ttb += 1
    }
  })
  //here we determine which variable is the greatest, the variable with the highest number returns its corresponding string
  if(ltr > rtl && ltr > ttb ){
    return "ltr"
  }
  if( rtl > ltr && rtl > ttb){
    return "rtl"
  }
  if( ttb > rtl && ttb > ltr){
    return "ttb"
  }
}
console.log(dominantDirection("hello world"));


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};