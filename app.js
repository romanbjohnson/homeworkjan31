// Problem 1

const maxofTwoNumbers = (x,y) => {
  return x >= y ? x : y
}



// Problem 2

const maxofThree = (x,y,z) => {
if (x >= y) {
if (x >= z) {
    return x
}  else {
return z
} else {
if (y >= z) {
return y 
} else {
   return z
   }
}
}

console.log(maxofthree(10,3,2))
console.log(maxofthree(1,3,2))
console.log(maxofthree(1,3,5))

/// OR 

// const maxofThreeNumebrs
//  if (x>=y && x>=z){
 // return x; 
// } else 

}
//OR

// const maxofThreeNumebrs
// if (x>=y && x>=z){
 // return x; 
// } else if (y>=x && y<=z){
// return z;
// } else 
// }










// Problem 4: Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers....
// One example from Isaax
const sumArray = (arr) => {
let sum = 0
for (let i=0; i<arr.length; i++) {
   sum + arr[i]
}
 return sum 
}
console.log(sumArray([1,2,3]))
console.log(sumArray([10,2,3]))
console.log(sumArray([10, 10, 29,30]))
console.log(sumArray([1]))


// problem 3: Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

const isCharVowel = (char) => {
let vowel = ['a', 'e', 'i', 'o', 'u']
if (vowel.includes (char.toLowerCase())) {
return true 
} else {
return false 
}



// example from web- function is CharAVowel(x) {

  // var result;

 //  result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
//  return result;
// }



// web examp;e

// function vowels(str) {
   // let counter = 0;
    
    // array of vowels we want to check against
  //   const checker = ["a", "e", "i", "o", "u"];
    // for(let char of str) {
        // if statement is true if checker array includes the str 
        // character
       //  if (checker.includes(char)) {
         //   counter++;
       //  }
    // }
    // return counter;
}

// Problem 4: Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

5.  function add(){
            const num1 = 5;
            const num2 = 3;

        // add two numbers
        const sum = num1 + num2;

            // display the sum
            console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
        }

// OR
// practicing. const isCharVowel = (char) => {
// let vowel = ['a', 'e', 'i', 'o', 'u']

// array of a sum of numbers 

function sum(sumArray) { 
  let result = 0;
  for (let a = 0; a < sumArray.length; a++) {
    let Addindex = sumArray[a];
    result += Addindex;
  } 
  return result;
}

console.log(sum([2, 3, 4, 5]));
// the result is equal to 14. 

// Problem 5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

function multiply(multiplyArray) {
let result = 1; 
for (let b= 1; b < multiplyArray.length; a++) {
let Multiplyindex = multiplyArray[b];
result *= Multiplyindex; 
}
return result; 
  }
console.log(multiplyArray)



// problem 6

let numArgs = (...args) => {
console.log(args.length)
}
numArgs(30, 77, 98, 2089)
