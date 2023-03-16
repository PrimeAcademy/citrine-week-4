// ********************************************************
// NAMING VARIABLES! **************************************
  // Variable Names! They Matter! So, So Much!
  // Good naming:
let primaryColors = ['red', 'blue', 'yellow'];
let nonPrimaryColors = ['green', 'pink', 'purple'];
  // Rotten naming:
let someStuff = ['red', 'blue', 'yellow'];
let someOtherStuff = ['green', 'pink', 'purple'];


// ********************************************************
// BUILT-IN METHODS! **************************************
  // Methods are:
    // * Functions that already exist in JS.
    // * Associated with a given data type.
  // Go check out the MDN docs about built-in methods.
    // They are nifty!
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
  // Where are these methods stored?
    // THIS IS DEEP. TURN BACK. TURN BACK NOW.
    // We can talk about it later when you are
    // more fully prepared to become a Wizard
    // of JavaScript. 😉

// Some "Array Methods" You've Already Seen:
primaryColors.sort(); // This sorts an array. :)
nonPrimaryColors.push('orange'); // Adds a value to
                                 // the end of an array. :)


// ********************************************************
// ARRAYS! ************************************************
  // Accessing Data in Arrays, A Quick Review:                                 
let studentNames = ['Kobi', 'Mandi', 'Heng'];

// Accessing things from an array:
// First thing is always index 0
// Second thing is always index 1
// Third thing is always index 2
// 533rd thing is always index 532

// How to access the LAST THING from an array:
// 1. How many things in the studentNames array?
//      studentNames.length evaluates to 3
// 2. What's the index of the LAST THING:
//      studentNames.length - 1 evaluates to 2
//      studentNames[2] would evaluate to 'Heng'
// 3. Putting these 👆 things together, we can write
//    the full expression in one line, like so:
//      studentNames[studentNames.length - 1]


// ********************************************************
// LOOPS! *************************************************
// The most powerful way to loop is the for loop!
//   With a for loop, we are in complete control of:
//     1. What "iterator" value to start at.
//          (let i = 0; __; __;)
//     2. What condition should cause our loop to stop.
//          (__; i < studentNames.length; __;)
//     3. How to modify the "iterator" value at end of
//        a single loop iteration.
//          (__; __; i++)
// Putting these three things together to loop through
// the entire studentNames array:
for (let i = 0; i < studentNames.length; i++) {
  console.log(studentNames[i]);
}

// for...of loop and for...in loop:
//   These are both syntax shortcuts!
  // for...of loop gives us access to EACH VALUE
  // as we iterate:
for (let aName of studentNames) {
  console.log(aName);
}

  // for...in loop gives us access to EACH INDEX
  // as we iterate:
for (let i in studentNames) {
  console.log(studentNames[i]);
}


// ********************************************************
// // ORGANIZING A SINGLE FILE OF CODE! *******************
// // Sample of how I'd organize a file where I'm
// // creating a function to solve a specific problem:


// // At the very top of the file, I'd put the summary
// // of the problem I'm setting out to solve:

// // Write a function that takes in an array of
// // two numbers and returns their sum.
//   // [4, 2] as an input should return 6
//   // [7, -3] as input should return 4


// // 1. GLOBAL VARIABLES:
// //    In this case: Some Test data for me to work with.

// let testData1 = [4, 2];
// let testData2 = [7, -3];


// // 2. FUNCTION(S):
// //    Any function(s) I create to solve the
// //    problem go here:

// function addTwoNumbers(numbers) {

// }


// // 3. RUN AND TEST MY CODE:
// //    This section is commonly referred to as the
// //    "Driver Code," or where I actually run/execute/test
// //    the function(s) I'm building:
// //     function for testing purposes:

// let result1 = addTwoNumbers(testData1);
// let result2 = addTwoNumbers(testData2);

// console.log('expect 6 -->', addTwoNumbers(testData1));
// console.log('expect 4 -->', addTwoNumbers(testData2));
