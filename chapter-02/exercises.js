
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(number) {
  /**
   * I: a number
   * O: a triangle like thingamobobber
   * C: 
   * E: minimize the bullshit
   */
  for( i = 0; i < number; i++){
    console.log("#".repeat(i + 1));
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  /**
   * I: two numbers
   * O: a string
   * C: depending on the value of the number will determine what string is printed
   * E:
   */
  //loop through all the numbers
  for( var i = start; i <= end; i ++ ){
    if (i === 0){
      console.log(i);
    } else if( i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz');
    } else if ( i % 5 === 0 ){
      console.log('buzz')
    } else if ( i % 3 === 0 ){
      console.log('fizz')
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

/**
 * I: a number
 * O: a chessboard with that numbers dimensions
 * C: must be console.log
 * E:
 */

function drawChessboard(number) {
  /** declare a variable string that has the same amount of spaces as the number squared(to represent the squares) 
   * concatenated with the number (which represents the amount of times we will need to create a new line for each dimension)
   * I am using a string variable here because of my familiarity with the .repeat() method on strings
   */
  var string = " ".repeat(number * number) + " ".repeat(number);
 // console.log(string) to ensure the string has the correct number of spaces
 //initialize a new Array that will have the same number of indexes as the string
  var newArray = string.split('');
 // console.log(newArray) ensure it is correct
 // i was running into problems with infinite loops, so I created a comparison array that will be set to a fixed amount
  var comparisonArray = string.split('')
  //a new line is needed at the index that is equal to the string
  newArray.splice(number, 1, '\n')
 // console.log(newArray) checking for errors
 // console.log(comparisonArray.length) checking for errors before looping helped
 //create a loop, where the index will always be equal to the edge of the chessboard (number of squares plus one). 
 //note how I skipped the first value in order to account for the zero index in an array
  for(var i = number + number + 1; i < comparisonArray.length; i += number + 1){
  //  console.log(i) ensuring this index is correct
  //here i am using splice, to ensure that the newArray will insert a new line at each index where it's needed, and
  //replacing the empty line in the process.
    newArray.splice(i, 1, '\n')
  };
  //now the board should be set up with the correct amount of spaces. console.log(newArray.join('')) to check at this point.

  //the pattern on the board depends on whether the number is even or odd... 
  //if the number is odd
    if (number % 2 === 1){
      //create a loop that will last as long as the checkerboard SHOULD last (using the comparisonArray to ensure infinite loops aren't created)
       for(var q = 0; q < comparisonArray.length; q += 1){
        //the first space on the board will always be empty, so if q is 0, ensure the newArray at index 0 be assigned to an empty space
          if(q === 0){
            newArray[q] = ' ';
            //if the index lands on a spot that has a new line '\n' in it, do not change it.
          } else if (newArray[q] === '\n'){
            newArray[q] = '\n'
            //the index's 'color' is determined based on whether the previous spot is white ' ' or black #
          } else if (newArray[q - 1] === ' '){
            newArray[q] = '#';
          } else if (newArray[q - 1] === '#'){
            newArray[q] = ' ';
            //if the previous space is a new line, because we have an odd number, the box prior to the new line determines the color
            //in the case of odd number dimension chess boards, if the spot/index before the new line will always be the opposite color
            //of the first line on the next row
          } else if (newArray[q - 1] === '\n' && newArray[q - 2] === ' '){
            newArray[q] = '#';
          } else if (newArray[q - 1] === '\n' && newArray[q - 2] === '#'){
            newArray[q] = ' ';
          }
       }
    }
    //this loop does the exact same thing, but for even checkerboards
     if (number % 2 === 0){
       for(var q = 0; q < comparisonArray.length; q += 1){
          if(q === 0){
            newArray[q] = ' ';
          } else if (newArray[q] === '\n'){
            newArray[q] = '\n'
          } else if (newArray[q - 1] === ' '){
            newArray[q] = '#';
          } else if (newArray[q - 1] === '#'){
            newArray[q] = ' ';
            //the difference here is that for even numbered checkerboards, the spot before a new line is always the same
            //color as the first line on the following row
          } else if (newArray[q - 1] === '\n' && newArray[q - 2] === ' '){
            newArray[q] = ' ';
          } else if (newArray[q - 1] === '\n' && newArray[q - 2] === '#'){
            newArray[q] = '#';
          }
       }
    }



//console.log(newArray.length) //ensure the array has the correct length prior to logging in case loop errors occur
//finally, we can log our chessboard to the console. take the array and use the join() method while ensuring there are no spaces
//between it. CHEERS!
console.log(newArray.join(''))   
//  }
  
}
drawChessboard(3)
drawChessboard(4)
drawChessboard(5)
drawChessboard(6)
drawChessboard(undefined);
drawChessboard(false);



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}