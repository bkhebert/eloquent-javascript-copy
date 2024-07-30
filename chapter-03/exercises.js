////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  if(num1 > num2){
    return num2
  } else if (num2 > num1){
    return num1
  } else {
  return 0
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  if(num % 2 === 0){
    return true
  } else if(num % 2 !==0){
    return false
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//set up parameters for a string and a char
function countChars(string, char) {
  //initialize a count variable to 0
  let count = 0;
  //loop throught the string
  for(let i = 0; i < string.length; i++){
    //if the character occurs in uppercase or lowercase
    if(char.toUpperCase() === string[i] || char.toLowerCase() === string[i]){
      //add 1 to the count
      count++
    }
  }
//return the count
return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  //initialize a count variable to zero
  let bCount = 0;
  //loop through the string
  for(let i = 0; i < string.length; i++){
    //if there is an uppercase b at the index, add 1 to the bCount variable
    if(string[i] === "B"){
      bCount++
    }
  }//return the bCount variable
  return bCount
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};