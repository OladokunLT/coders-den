// import  countries from "./countries.js";
// import webTechs from './web_techs.js';

// Level 1 ------------
// The itCompanies variable below is referenced by many task here.
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// Do not remove the variable above
// 1. Declare an empty array
    // const empty  = Array();
    // console.log(empty);

// 2. Declare an array with more than 5 number of elements
    // const arr1 = [1, 2, 3, 4, 5, 6, 7 ];

// 3. Find the length of your array
    // lengthOfArr1 = arr1.length;
    // console.log(lengthOfArr1);

// 4. Get the first item, the middle item and the last item of the array
    // console.log(arr1[0], arr1[Math.floor(lengthOfArr1/2)], arr1[lengthOfArr1-1] );

// // 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// const mixedDataTypes = ['lukman', 2, ['java'], {animal: "cat"}, false, true]

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    // const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7. Print the array using console.log()
    // console.log(itCompanies);

// 8. Print the number of companies in the array
    // console.log(itCompanies.length);

// 9. Print the first company, middle and last company
    // console.log(
    //     itCompanies[0],
    //     itCompanies[3],
    //     itCompanies[6],
    // )

// 10. Print out each company
    // for (const company of itCompanies) {
    //     console.log(company)
    // }

// 11. Change each company name to uppercase one by one and print them out
    // for (const company of itCompanies) {
    //     console.log(company.toUpperCase())
    // }

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    // console.log(itCompanies.join(" ") + 'are big IT company')

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
    // let companyName = "FACEBOOk";

    //      // first convert the user input to sentence case.
    // companyName = companyName.charAt(0).toLocaleUpperCase().concat(companyName.slice(1).toLowerCase());
    // let isCompanyExist = (itCompanies.includes(companyName)) ? companyName : `${companyName} is not found.`
    // console.log(isCompanyExist);

// 14. Filter out companies which have more than one 'o' without the filter method
    // let companiesWithMoreThanOne_o = Array();
    // for (const company of itCompanies) {
    //     (company.indexOf('o') != company.lastIndexOf('o')) && companiesWithMoreThanOne_o.push(company); 
    // }; 
    // console.log(companiesWithMoreThanOne_o);

// 15. Sort the array using sort() method
    // console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method
    // console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
    // console.log(itCompanies.slice(0,3));

// 18. Slice out the last 3 companies from the array
    // console.log(itCompanies);
    // console.log(itCompanies.slice(-3));

// 19. Slice out the middle IT company or companies from the array
    // console.log(itCompanies.slice((itCompanies.length-1)/2, 4));

// 20. Remove the first IT company from the array
    // console.log(itCompanies.splice(0,1));
    // console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
    // console.log(itCompanies.splice((itCompanies.length-1)/2, 1));

// 22. Remove the last IT company from the array
    // console.log(itCompanies.splice(-1));
    // console.log(itCompanies);

// 23. Remove all IT companies
    // console.log(itCompanies.splice(0));
    // console.log(itCompanies);


// Level 2 -----------------------

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
    // let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    // let textWithoutPunctuations = text.replace(/[.,]/gi, "");
    // let words = textWithoutPunctuations.split(" ");
    // console.log(words)
    // console.log(words.length)

// 3. In the following shopping cart add, remove, edit items
    // const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
    // shoppingCart.unshift('Meat');
    // shoppingCart.push('Sugar');
    // shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
    // shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');
    // console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
        //  See answer in countries.js

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
    //  See answer in web_techs.js

// 6. Concatenate the following two variables and store it in a fullStack variable.
    // const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    // const backEnd = ['Node','Express', 'MongoDB']
    // const fullStack = frontEnd.concat(backEnd);
    // console.log(fullStack);


// Level 3 -----------------------------------------------------
//----------------------------------------------------------

// 1. The following is an array of 10 students ages:    
    //  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
    /**
     * Sort the array and find the min and max age
     * Find the median age(one middle item or two middle items divided by two)
     * Find the average age(all items divided by number of items)
     * Find the range of the ages(max minus min)
     * Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
     */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]; 
copyOfAges = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]; 
copyOfAges.sort()
let minAge = copyOfAges[0];
let maxAge = copyOfAges[copyOfAges.length - 1]

// I need help to find the average by formula

// To find the average(mean) age 👇
let sum = 0
for (let num of ages) {
    sum+=num
}
let aveAge =  Math.floor((sum/ages.length))
console.log(aveAge);
let rangeOfAges = maxAge - minAge;

console.log(Math.abs(( minAge - aveAge))  == (maxAge - aveAge))
console.log(copyOfAges);

