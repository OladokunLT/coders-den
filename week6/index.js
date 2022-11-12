// level 1 ----------------------------------------------------------------
// ----------------------------------------------------------------

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
    //  Using for loop
    // for (i = 0; i <= 10; i++) {
    //     console.log(i);
    // }

    // Using while loop
    //  let i = 0;
    //  while(i<=10) {
    //     console.log(i);
    //     i++
    //  }

    // Using do while loop
    // let i = 0;
    // do {
    //     console.log(i);
    //     i++
    // }
    // while(i<=10);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
    // Using for loop
    // for (i = 10; i >= 0; i--) {
    //     console.log(i);
    // }

    
    // Using while loop
    //  let i = 10;
    //  while(i>=0) {
    //     console.log(i);
    //     i--
    //  }

    // Using do while loop
    // let i = 10;
    // do {
    //     console.log(i);
    //     i--
    // }
    // while(i>=0);
    
// 3. Iterate 0 to n using for loop.
    // n = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // for(i = 0; i <= n.length ; i++){
    //     console.log(i);
    // }


// 4. Write a loop that makes the following pattern using console.log():
/*  
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
    // let rightAngleTriangle = "";
    // for (let i = 1; i <= 7; i++) {
    //     rightAngleTriangle += '#'
    //     console.log(rightAngleTriangle);    
    // }


// 5. Use loop to print the following pattern:
/*
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
*/

    // for (let i = 0; i <=10; i++) {
    //     console.log(`${i} * ${i} = ${i*i}`);        
    // }
                        //OR
    // let i = 0;
    // while (i<=10) {
    //     console.log(`${i} * ${i} = ${i*i}`);
    //     i++
    // }


// 6. Using loop print the following pattern
/*
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
*/
// for (let i = 0; i <= 10; i++) {
//         console.log(`${i} \t ${Math.pow(i, 2)} \t ${i**3}`);
//     }


// 7. Use for loop to iterate from 0 to 100 and print only even numbers
//     for (let index = 0; index <= 100; index+=2) {
//         console.log (index);
//     }

//     for (let index = 0; index <= 100; index++) {
//         if (index % 2 == 0) {
//             console.log(index);
//         }
//     }

//     function even() {
//         for (let index = 0; index <= 100; index++) {
//             if (index % 2 == 0) {
//                 console.log(index);
//             }
//         }    
//     }
//     even();


// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
//     function odd() {
//         for (let index = 0; index <= 100; index++) {
//             if (index % 2 == 1) {
//                 console.log(index);
//             }
//         }    
//     }
//     odd();


// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
//     prime number are not divisible by other numbers
    // for (let i = 2; i <= 15; i++) {
    //     let flag = 0;
    //     // looping through 2 to user input number
    //     for (let j = 2; j < i; j++) {            
    //         if (i % j === 0) {
    //             flag = 1;
    //             break;
    //         }        
    //     }        
    //     // if number greater than 1 and not divisible by other numbers
    //     if ( flag !== 1) {
    //         console.log(i);
    //     }
    // }
    

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let ans = 0
// for (let index = 0; index <= 100.; index++) {
//     ans += index
// }
// console.log(`The sum of all numbers from 0 to 100 is ${ans}.`);

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let sumEven = 0,  sumOdd = 0;
// for (let index=0; index<=100; index++) {
//     index % 2 == 0 && (sumEven += index);
//     index % 2 !== 0 && (sumOdd += index);
// }
// console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`);

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
    // let sumEven = 0,  sumOdd = 0;
    // let  ans =[]
    // for (let index=0; index<=100; index++) {
    //     index % 2 == 0 && (sumEven += index);
    //     index % 2 !== 0 && (sumOdd += index);
    // }
    // ans.push(sumEven);
    // ans.push(sumOdd);
    // console.log(ans);


// 13. Develop a small script which generate array of 5 random numbers
    // let fiveRandomNumbers = [];
    // for (let index = 0; index < 5; index++) {
    //     fiveRandomNumbers.unshift( Math.floor(Math.random() * 11));
    // }
    // console.log(fiveRandomNumbers);


// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
        // let numbers = [];
        // for (let i = 0; i < 5; i++) {
        //   let a = true, n;
        //   console.log(a);

        // while(a) {
        //     n = Math.floor(Math.random() * 10);
        //     // console.log(n, "innerloop"); // print to visualize all random numbers
        //     a = numbers.includes(n);
        //     // console.log(a); // print true (number already exist), false (if number exist or not)
        // }
        // console.log(a);
        // numbers.push(n);
        // }
        // console.log(numbers);

//------------OR

        // let fiveRandomNumbers = [];
        //     for (let index = 0; index < 5; index++) {
        //         let num = Math.floor(Math.random() * 10)
        //         console.log(num);
        //         let check = fiveRandomNumbers.includes(num)
        //          while (check) {
        //             num = Math.floor(Math.random() * 10)
        //             check = fiveRandomNumbers.includes(num)
        //          }
        //          fiveRandomNumbers.unshift( num);      
        //     }
        //     console.log(fiveRandomNumbers);   


// 15. Develop a small script which generate a six characters random id:
    // let numArr = ["0","1","2","3","4","5","6","7","8","9"];
    // let letters ="abcdefghijklmnopqrstuvwxyxz";
    // let letterArr = letters.split("");

    // let allCharArr = numArr.concat(letterArr)
    // console.log(allCharArr);
    // console.log(allCharArr.length);
    // let id = [];

    // for (let index = 0; index < 6; index++) {
    //     // get random using Math.random() between 0 and 37
    //     let randomNumBtn_0_37 = Math.floor(Math.random() *  allCharArr.length) //(max - min +1)) + min
    //     console.log(randomNumBtn_0_37);

    //     // I need to grab each char by their index value
    //     let getRandomChar = allCharArr[randomNumBtn_0_37];
    //     console.log(getRandomChar);

    //     // i want to push the generated char into new array in 6 times.

    //     id.push(getRandomChar);
            
    // }
    // console.log(id);
    // console.log(id.join(""));


// Level 2---------------------------------
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Iceland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1. Develop a small script which generate any number of characters random id:


          //this code generates unique number 0-9 sparingly e.g 1372946085
        // let numArr = Array();
        // for (let i = 0; i < 10; i++){
        //     let num, isDuplicateNum = true;
        //     while(isDuplicateNum){
        //         num = Math.floor(Math.random() * 10)
        //         isDuplicateNum = numArr.includes(num);
        //     }
        //     numArr.push(num)
            
        // }  
        // console.log(numArr);

//     let numArr = "0123456789".split("")
//     let letters = "abcdefghijklmnopqrstuvwxyxz".split("");
//     let charArr = numArr.concat(letters)
//     const randomNumBtn_0_36 = Math.floor(Math.random()* charArr.length)
//     let randomId = [];
//     for (let i = 0; i < randomNumBtn_0_36; i++){ 
//         randomId.push(charArr[Math.floor(Math.random()* charArr.length)])   
//     }   
//     randomId = randomId.join("")    
//     console.log(randomId); // xkqci4utda1lmbelpkm03rba    // fe3jo1gl124g

               

//2. Write a script which generates a random hexadecimal number.
        // const charArr = "0123456789abcdef".split("")
        // console.log(charArr.length)
        //  randomId = [];
        // for (let i = 0; i < 6; i++){ 
        //     randomId.push(charArr[Math.floor(Math.random()* charArr.length)])   
        // }
        // randomId = `#${randomId.join("")}`
        // console.log(randomId); // #ee33df   randomly

// 3. Write a script which generates a random rgb color number.
        // let rgbColorNum = Array();
        // for(let i=0; i<3; i++){
        //     rgbColorNum.push(Math.floor(Math.random()*256));
        // }
        // console.log(rgbColorNum);
        // rgbColorNum = `rgb(${rgbColorNum.toString()})`;
        // console.log(rgbColorNum); // rgb(10,88,218)


// 4. Using the above countries array, create the following new array.
        // let countriesToUpperCase = Array();
        // for (let country of countries){
        //     countriesToUpperCase.push(country.toUpperCase());
        // }
        // console.log(countriesToUpperCase);

// 5. Using the above countries array, create an array for countries length'.
        // let countryCharSize = Array();
        // for (let country of countries){
        //     countryCharSize.push(country.length);
        // }
        // console.log(countryCharSize); // [ 7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5 ]


// 6. Use the countries array to create the following array of arrays:
/**
   [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
 */        
        // let outerArr = Array()
        // for(let i=0; i<countries.length; i++){
        //     const innerCountryArr = Array(
        //                                 countries[i], 
        //                                 countries[i].slice(0,3).toUpperCase(), 
        //                                 countries[i].length
        //                                 ) 
        //     outerArr.push(innerCountryArr)
        // }
        //  console.log(outerArr);

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
        // let countriesHasLand =[]
        // for (let i=0; i<countries.length; i++) {
        //     if(countries[i].includes('land')){
        //          countriesHasLand.push(countries[i]);
        //     }     
        // }
        // console.log(countriesHasLand);
                    
                    //---OR

        // let countriesHasLand = [];
        // for (const country of countries) {
        //     if(country.match(/land/gi)){
        //         countriesHasLand.push(country);
        //      }     
        // }
        // console.log(countriesHasLand);

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
        // let countriesHasLand = []
        // for (const country of countries) {
        //     if(country.endsWith('ia')){
        //         countriesHasLand.push(country)
        //      }  else{
        //         console.log(`These countries ends without ia`)
        //         break;
        //      }
        // }
        // console.log(countriesHasLand);

// 9. Using the above countries array, find the country containing the biggest number of characters.
        // let max = 0, isBiggestChar;
        // for (let i= 0; i <countries.length; i++){
        //         console.log(countries[i].length);
        //         if(max >= countries[i].length)  {
        //             continue
        //         };
        //     while(countries[i].length > max ){
        //         console.log(max);
        //         isBiggestChar = countries[i]
        //         max = countries[i].length
        //     }
        //     console.log(max);
        // }
        // console.log(isBiggestChar); //Ethiopia


// 10. Using the above countries array, find the country containing only 5 characters.
        //  let max = 5, isFiveChar =[];
        //  for (let i= 0; i <countries.length; i++){
        //    console.log(countries[i].length);
        //      if(max<countries[i].length || max>countries[i].length)  continue;
        //     while(countries[i].length == max ){
        //         console.log(max);
        //         isFiveChar.push(countries[i])
        //         max = countries[i].length
        //         break    
        //     }
        //     // console.log(max); // 5, 5
        // }
        // console.log(isFiveChar); // ['Japan', 'Kenya']

                     //   OR  simply as below

        // let fiveLetterCountry = []
        // for (const country of countries) {
        //      if(country.length === 5){
        //         fiveLetterCountry.push(country)
        //     }
        // }
        // console.log(fiveLetterCountry); // ['Japan', 'Kenya']


// 11. Find the longest word in the webTechs array
        // let highest = 0, isLongestWord
        // for (let i= 0; i < webTechs.length; i++){
        //     console.log(webTechs[i].length);
        //     if(highest>=webTechs[i].length)  continue;
        //     while(webTechs[i].length > highest ){
        //         console.log(highest);
        //         isLongestWord = webTechs[i]
        //         highest = webTechs[i].length
        //     } 
        //     console.log(highest);
        // }
        // console.log(isLongestWord); 


// 12 Use the webTechs array to create the following array of arrays:
/**
 [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
 */
        // let arr = [];
        // for (const webTech of webTechs) {
        //     let innerArr = [webTech, webTech.length]
        //     arr.push(innerArr)
        // }
        // console.log(arr);


// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
        // let acronym = [];
        // for (const i of mernStack) {
        //     acronym.push(i[0])
        // }
        // console.log(acronym.join(""));


// 14 ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
        // const teches = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
        // for (const item of teches) {
        //     console.log(item);
        // }

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
        // const fruits = ['banana', 'orange', 'mango', 'lemon']
        // let reverseFruit = [];
        // for (const fruit of fruits) {
        //     reverseFruit.unshift(fruit)
        // }
        // console.log(reverseFruit)


// 16. Print all the elements of array as shown below.

   const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
// let stacks = [];
    // for (const index of fullStack) {
    //     let m = index
    //     for (const stack of m) {
    //         console.log(stack);
    //     }
    // } 

/**
   HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
 */

  // Level 3  ---------------------------------   

// 1. Copy countries array(Avoid mutation)
        // let copyCountryArr = countries.slice(0);
        // console.log(copyCountryArr);

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
        // let copyArray = countries.slice(0);
        // let sortedCountries = copyArray.sort()
        // console.log(sortedCountries);

// 3. Sort the webTechs array and mernStack array
        // let copyWebTech = webTechs.slice(0);
        // let sortedWebTech = copyWebTech.sort();
        // console.log(sortedWebTech);
        // let copyMernStack = mernStack.slice(0);
        // let sortedMernStack = copyMernStack.sort();
        // console.log(sortedMernStack);

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
        // let countryHasLand = [];
        // for (const country of countries) {
        //     if(country.includes('land')) countryHasLand.push(country);
        // }
        // console.log(countryHasLand);


// 7. 
        // let countryHas4Char
        // for (const country of countries) {
        //     if(country.length === 4) {
        //         countryHas4Char.push(country)
        //     }else{
        //         console.log(`No country has 4 character`);
        //         break
        //     }
        // }
        // console.log(countryHas4Char);

// 9. Reverse the countries array and capitalize each country and stored it as an array
// let copyCountryArr = countries.slice(0);
// copyCountryArr.reverse();
// let arr = Array();
// for (let i = 0; i < copyCountryArr.length; i++) {
//         arr.push(copyCountryArr[i])
// }
// console.log(arr);
