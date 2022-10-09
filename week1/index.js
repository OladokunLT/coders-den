// 1. comments can make code readable

// 2. Welcome to 30DaysOfJavaScript

/* 
   3. comments can make code readable, easy to reuse and informative
*/

// 4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
let greeting = `Hi, I'm Lukman`  // string
let inequality = 4 < 6;  // boolean
let valueNotAssigned;    // undefined
let hasEmptyValue = null;  //null
console.log(greeting, inequality, valueNotAssigned, hasEmptyValue);

// 5. Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable
console.log(typeof(greeting));  // string
console.log(typeof(inequality)); // string
console.log(typeof(valueNotAssigned));  // undefined
console.log(typeof(hasEmptyValue)); // object

// 6. Declare four variables without assigning values
let firstVar, secondVar, thirdVar, lastVar ;

// 7. Declare four variables with assigned values
const num= 6; let street= "palm groove", area="Mushin", town='Lagos';

// 8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let firstName = `Lukman`; 
let lastName = `Oladokun`;
let maritalStatus = `Single`; 
let country = `Nigeria`;
let age = 20;
 
// 9. Declare variables to store your first name, last name, marital status, country and age in a single line
let fName = `Lukman`, lName = `Oladokun`, maritalSta = `Single`, nation = `Nigeria`, howOld = 20;

// 10. Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
let myAge=25; yourAge= 30;
console.log(myAge, yourAge);