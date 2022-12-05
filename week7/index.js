// Exercise Level 1;
// 1. Declare a function fullName and it print out your name
    // function fullName(){
    //     console.log('Lukman Oladokun');
    // };
    // console.log(fullName());

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
    // function fullName(firstName, lastName) {
    //     return `firstName lastName`
    // }
    // console.log(fullName('Lukman', 'Oladokun'));

// 3. Declare function addNumbers and it takes two parameters and it returns sum.
    // const addNumbers = ((num1, num2) => num1 + num2)(2,5);
    // console.log(addNumbers) 

// 4. An area of a rectangle is calculated as follows: perimeter = length + widths. Write a function which calculates areaOfRectangle.
    // const areaOfRectangle = (length, breadth) => length * breadth;
    // console.log(areaOfRectangle(4,5));

// 5. A perimeter of a rectangle is calculated as follows: area = 2x(length + width). Write a functon which calculates perimeterOfTriangl.
    // const perimeterOfTriangle = (length, breadth) => 2 * (length + breadth);
    // console.log(perimeterOfTriangle(4,5));

// 6. A volume of a rectangular prism is calculated as follows: volume = lengthx width x height. Write a function which calculates volumeOfRectPrism.
    // const volumeOfRectPrism = (l,b,h) =>  l * b * h
    // console.log(volumeOfRectPrism(2,3,4));

// 7. Area of a circle is calculated as follows: area = pi*r*r. Write a fuction which calsculates areaOfCirle

    // const areaOfCirle = ((r) =>  Math.PI * Math.pow(r,2))(7);
    // console.log(areaOfCirle);

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
    // const perimeterOfCirle = ((r) =>  2 * Math.PI * r)(7);
    // console.log(perimeterOfCirle);

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
    // const density = (m, v) => m/v;
    // console.log(density(5,4)); 

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
    // const speed = (d, t) => d*t;
    // console.log(speed(20,5));

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
    // const weight = (m,g) => m*g;
    // console.log(weight(3,4));

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
    // const convertCelsiusToFahrenheit = (c) => (c * 9/5) + 32
    // console.log(convertCelsiusToFahrenheit(5));

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    // const bmi = (w,h) => {
    //     let result = w / (h*h);
    //     console.log(result);
    //     if (result < 18.5){
    //         return `Underweight: BMI is less than 18.5`;
    //     }
    //     else if (result >= 18.5 && result <= 24.9){
    //         return `Normal weight: BMI is 18.5 to 24.9`;
    //     }
    //     else if(result >= 25 && result <= 29.9){
    //         returns `Overweight: BMI is 25 to 29.9`
    //     }
    //     else{
    //         return `Obese: BMI is 30 or more`
    //     }
    // }
    // console.log(bmi(30, 1.2));

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
    // const checkSeason = (month) => {
    //     let season; 
    //     switch (month.toLowerCase()) {
    //         case 'september' || 'october' || 'November':
    //             season = 'Autumn'
    //             break

    //         case 'december'||'january'||'february':
    //             season ='Winter'
    //             break;

    //         case 'march'||'april'||'may':
    //             season = 'Spring'
    //             break;

    //         case 'june'||'july'||'august':
    //             season = 'Summer';
    //             break;

    //         default:
    //             season = 'Incorrect input'
    //     }
    //     return season
    // }
    // console.log(checkSeason(`December`));

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// finding the max value
    // const findMax = (num1, num2, num3) => {
    // let max
    //     if (num1 < (num2 && num3) || num1 < (num2 || num3 )){
    //         max = (num2 < num3)? num3 : num2
    //     }
    //     else{
    //         max = num1
    //     }
    //     return max
    // } 
    // console.log(findMax(0, 10, 5));
    // console.log(findMax(-15, -10, -12));
            // OR
    //this only work for positive intergers
    // const findMax = (...args) => {
    //     let max = 0;
    //     for(let arg of args ){
    //         (arg > max) && (max = arg)
    //     }
    //     return max
    // }
    // console.log(findMax(0, 10, 5));
    // console.log(findMax(-15, -10, -12)); // incorrect answer bcos this function only works for positive integers



//-----Exercise Level2-------------------------
//---------------------------------------------------

// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// I don't know how to solve this question


// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
    // const solveQuadEquation = (a, b, c) =>{
    //     let result1 = (-b + Math.sqrt(Math.pow(b,2)-4*a*c))/2*a;
    //     let result2 = (-b - Math.sqrt(Math.pow(b,2)-4*a*c))/2*a;
    //     return `${result1} , ${result2}`
    // }
    // console.log(solveQuadEquation(1, -5, 6));

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
    // const printArray = (...array) => {
    //     for (const arr of array) {
    //         console.log(arr);
    //     }
    // }
    // console.log(printArray('My', 'name', 'is', 'Lukman'));

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object
// function showDateTime() {
//     let now = new Date()
//     let years = now.getFullYear();
//     let months = now.getMonth() + 1;
//     let days = now.getDate();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let monthsTo2sf = months <= 9 ? "0" + months : months;
//     let daysTo2sf = days <= 9 ? "0" + days : days;
//     let hoursTo2sf = hours <= 9 ? "0" + hours : hours;
//     let minutesTo2sf = minutes <= 9 ? "0" + minutes : minutes;
//     // i. DD/MM/YYYY HH:mm eg. 14/11/2022 21:45
//     let currentTime = `${daysTo2sf}/${monthsTo2sf}/${years} ${hoursTo2sf}:${minutesTo2sf}`
//     console.log (currentTime);
// return currentTime
// }
// console.log(showDateTime()); // 14/11/2022 21:45

// 5. Declare a function name swapValues. This function swaps value of x to y.
/**
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
 */
    // const swapValues =  (function(x, y) {
    //     let m= x; let n=y;
    //     console.log(m, n);
    // })(8,6);
    
// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
    // function reverseArray(array) {
    //     let ans = [];
    //     for (const arr of array) {
    //         ans.unshift(arr);
    //     }
    //     return ans
    // }
    // console.log(reverseArray([1, 2, 3, 4, 5])); //[5, 4, 3, 2, 1]
    // console.log(reverseArray(['A', 'B', 'C'])); //['C', 'B', 'A']

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
    // const capitalizeArray = (array) =>{
    //     let capitalizedArray = Array();
    //     for (const arr of array) {
    //         capitalizedArray.push(arr.toUpperCase())
    //     }
    //     return capitalizedArray
    // }
    // console.log(capitalizeArray(['Lukman', 'Oladokun']));

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
    // const addItem = (array) => {
    // array.push('Oladokun', 'Tunde')
    // return array
    // }
    // console.log(addItem(['Lukman']));

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
    // const removeItem = (index) => {
    // let items = ['Lukman', 'Oladokun', 'Tunde'];
    // items.splice(index, 1)
    // return items
    // }
    // console.log(removeItem(2)); 

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
    // function sumOfOdds (num){
    //     let sum = 0;
    //     for (let i = 0; i < num; i++) {
    //         sum += i
    //     }
    //     return sum
    // }
    // console.log(sumOfOdds(10));

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
    // function sumOfOdds (num){
    //     let sum = 0;
    //     for (let i = 1; i < num; i+=2) {
    //         sum += i
    //     }
    //     return sum
    // }
    // console.log(sumOfOdds(10));

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
    // function sumOfEven (num){
    //     let sum = 0;
    //     for (let i = 0; i < num; i+=2) {
    //         sum += i
    //     }
    //     return sum
    // }
    // console.log(sumOfEven(10));

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
    // const evensAndOdds = (num) => {
    // let even = [], odd=[];
    //     for(i=0; i<=num; i++){
    //         (i % 2 === 0) ? even.push(i) : odd.push(i)
    //     }
    //     return `
    //     The number of odds are ${odd.length}
    //     The number of evens are ${even.length}`
    // }
    // console.log(evensAndOdds(100));

// 14. Write a function which takes any number of arguments and return the sum of the arguments
    // const sum = (...args) => {
    //     let sum = 0;
    //     for(const elements of args){
    //         sum += elements;
    //         }
    //         return sum
    //     }
    // console.log(sum(2,3,4))

// 15. Writ a function which generates a randomUserIp.
    // const randomUserIp = (() => {
    //     let ip = [];
    //     let i=0;
    //     while (i<4) {
    //        ip.push(Math.floor(Math.random()*256))       
    //         i++
    //     }
    //     ip = ip.join(".")
    //     return ip;
    // })()
    // console.log(randomUserIp); //154.35.222.56


// 16. Write a function which generates a randomMacAddress
/**
    const randomMacAddressUnit = (() => {
        let hexaChar = '0123456789ABCDEFabcdef'.split("")
        let twoChar = [];
        for (let i = 0; i < 2; i++) {
            twoChar.push(hexaChar[Math.floor(Math.random()*hexaChar.length)])
        }
        return twoChar.join("")
    })
    function randomMacAddress () {
        macAddress = []
        for(i=0; i<6; i++){
            macAddress.push(randomMacAddressUnit())
        }
        macAddress = macAddress.join(':');
        return macAddress;
    }
    console.log(randomMacAddress()) // 8c:6D:26:88:0E:Bf
 */

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
    // const randomHexaNumberGenerator = () => {
    //     let array = '0123456789abcdef'.split("")
    //     let hexaNumber = [];
    //     for(i=0; i<6; i++) {
    //        hexaNumber.push(array[Math.floor(Math.random()*array.length)]);
    //     }    
    //     hexaNumber= hexaNumber.join("");
    //     hexaNumber = `#${hexaNumber}`;
    //     return hexaNumber;
    // }
    // console.log(randomHexaNumberGenerator());


//18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
    // const userIdGenerator = () => {
    //     let array = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
    //     let userId = [];
    //     for(i=0; i<10; i++) {
    //        userId.push(array[Math.floor(Math.random()*array.length)]);
    //     }    
    //     userId= userId.join("");
    //     return userId;
    // }
    // console.log(userIdGenerator()); // generates random userId - 10 characters e.g S0ulDvBvE4

// ------------------- LExercises: Level 3 --------------------------------------
//-------------------------------------------------------------------------------
// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

/**
 userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
 */

// Solution Below ------
/**
    let idLength = Number(prompt("Enter id length  in figure "));
    let idTime = Number(prompt("Enter id times in figure "));
    const userIdGenerator = () => {
        let array = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
        let userId = [];
        for(i=0; i<idLength; i++) {
            userId.push(array[Math.floor(Math.random()*array.length)]);
        }    
        userId= userId.join("");
        return userId;
    }
    const timeN = () => {
        let idTimes = [];
        for (let index = 0; index < idTime; index++) {
        idTimes.push(userIdGenerator());
        }
        idTimes = idTimes.join(" ");
        return idTimes;
    }
    console.log(timeN());
 */

// 2. Write a function name rgbColorGenerator and it generates rgb colors.
    // function rgbColorGenerator () {
    //     let rgbColorNum = Array();
    //     for(let i=0; i<3; i++){
    //         rgbColorNum.push(Math.floor(Math.random()*256));
    //     }
    //     console.log(rgbColorNum);
    //     rgbColorNum = `rgb(${rgbColorNum.toString()})`;
    //     return (rgbColorNum);
    // }
    // console.log(rgbColorGenerator());

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
    // function arrayOfHexaColors() {
    //     let arrOfHexaColors = [];
    //     for (let index = 0; index < Math.ceil(Math.random()*11); index++) {
    //         arrOfHexaColors.push( //pushing a nested anonymous callback function
    //             (() => { 
    //                 const charArr = "0123456789abcdef".split("")
    //                 let randomId = [];
    //                 for (let i = 0; i < 6; i++){ 
    //                     randomId.push(charArr[Math.floor(Math.random()* charArr.length)])   
    //                 }
    //                 return randomId = `#${randomId.join("")}`
    //             })()
    //         );
    //     }
    //     return arrOfHexaColors   
    // }
    // console.log(arrayOfHexaColors());

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
    // function arrayOfRgbColors() {
    //     let arrOfRgbColors = [];
    //     for (let index = 0; index < Math.ceil(Math.random()*11); index++) {
    //         arrOfRgbColors.push( //pushing a nested anonymous callback function
    //             (()=> {
    //                 let rgbColorNum = Array();
    //                 for(let i=0; i<3; i++){
    //                     rgbColorNum.push(Math.floor(Math.random()*256));
    //                 }
    //                 console.log(rgbColorNum);
    //                 rgbColorNum = `rgb(${rgbColorNum.toString()})`;
    //                 return (rgbColorNum);
    //             })()
    //         );
    //     }
    //     return arrOfRgbColors   
    // }
    // console.log(arrayOfRgbColors());

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
    // function convertHexaToRgb(hexaColor) {
    //     hexaColor = (hexaColor[0]==='#')?hexaColor.slice(1):hexaColor;
    //     console.log(hexaColor);  //01e2ff
    //     if(hexaColor.length<6){
    //         return ("Hexacolor must be 6 characters");
    //     } 
    //     else {
    //         let getHexComponents, toRgb, rgb = [];
    //         for (let index = 0; index < hexaColor.length; index+=2) {
    //             getHexComponents = hexaColor.slice(index, index+2);  // "01", "e2", "ff"
    //             toRgb = parseInt(getHexComponents, 16);
    //             rgb.push(toRgb);
    //         }
    //         return (`rgb(${rgb.toString()})`)
    //     }
    // }    
    // console.log(convertHexaToRgb('#01e2ff'));  // rgb(1,226,255)


// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
//     function convertRgbToHex (rgb){
//         const hexColor = Array();
//         const rgbValArr = rgb.match(/\d+/g);
//         for(let i=0; i<rgbValArr.length; i++) {
//             hexValue = (+rgbValArr[i]).toString(16);
//             (hexValue.length === 1) && (hexValue = "0" + hexValue);
//             hexColor.push(hexValue) 
//         }
//         return ("#" + hexColor.join(""));
//     }
//     console.log( convertRgbToHex('(170, 40, 16)') ); 

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
    // function generateColors(hexaOrRgb, num =1){
    //     if(hexaOrRgb === "hexa"){
    //         return arrayOfHexaColors = (function() {
    //             let arrOfHexaColors = [];
    //             for (let index = 0; index < num; index++) {
    //                 arrOfHexaColors.push( //pushing a nested anonymous callback function
    //                     (() => { 
    //                         const charArr = "0123456789abcdef".split("")
    //                         let randomId = [];
    //                         for (let i = 0; i < 6; i++){ 
    //                             randomId.push(charArr[Math.floor(Math.random()* charArr.length)])   
    //                         }
    //                         return randomId = `#${randomId.join("")}`
    //                     })()
    //                 );
    //             }
    //             (arrOfHexaColors.length === 1) && (arrOfHexaColors=arrOfHexaColors.join(""));
    //             return arrOfHexaColors   
    //         })()
    //     } else if(hexaOrRgb === "rgb"){    
    //         return arrayOfRgbColors = (function() {
    //             let arrOfRgbColors = [];
    //             for (let index = 0; index < num; index++) {
    //                 arrOfRgbColors.push( //pushing a nested anonymous callback function
    //                     (()=> {
    //                         let rgbColorNum = Array();
    //                         for(let i=0; i<3; i++){
    //                             rgbColorNum.push(Math.floor(Math.random()*256));
    //                         }
    //                         console.log(rgbColorNum);
    //                         rgbColorNum = `rgb(${rgbColorNum.toString()})`;
    //                         console.log(rgbColorNum);
    //                         return (rgbColorNum);
    //                     })()
    //                 );
    //             }
    //             (arrOfRgbColors.length=== 1)&&(arrOfRgbColors=arrOfRgbColors.toString());
    //             return arrOfRgbColors   
    //         })()
        
    //     } else {
    //         return ('Invalid request! Enter "hexa" or "rgb" and number in digit')
    //     }
    // }
    // console.log(generateColors("hexa",  2));

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
    // function shuffleArray (array){
    //     let arr = [];
    //     for (let index = 0; index < array.length; index++) {
    //         element = array[Math.floor(Math.random()* array.length)];
    //         console.log(element);
    //         while (arr.includes(element)){
    //             element = array[Math.floor(Math.random()* array.length)];
    //         }
    //         arr.unshift(element);
    //     }
    //     return arr;
    // }
    // console.log(shuffleArray([1, 2, 3, 4, 5]));
    // console.log(shuffleArray(['boy', 'man', 'lad','old', 'new']));

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
    // function factorial(n){
    //     if (n<=0){
    //         return 1;
    //     } else{
    //         return (n * factorial(n-1)); 
    //     } 
    // }
    // console.log(factorial(5));

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not


// 11. Call your function sum, it takes any number of arguments and it returns the sum.
    // function sum(){
    //     let total=0;
    //     for (let index = 0; index < arguments.length; index++) {
    //         total += arguments[index];
    //     }
    //     return total;
    // }
    // console.log(sum(4,5,3));

            //or
    
    // const sumAll = (...arg) => {
    // let total = 0;
    // for (let index = 0; index < arg.length; index++) {
    //     total += arg[index];
    // }
    // return total;
    // }
    // console.log(sumAll(3,4,5));

// 12.Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
    // function sumOfArrayItems(arrayOfItems) {
    //     let sum = 0;
    //     for (const item of arrayOfItems) {
    //         if (typeof item !== 'number') {
    //         return ("items must be number")
    //         } else {
    //             sum += item;
    //         }
    //     }
    //     return sum;
    // }
    // console.log(sumOfArrayItems([1,"",2,3,5]));
    // console.log(sumOfArrayItems([1,2,3,5]));

// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
    // function average(arrayOfItems) {
    //     let sum = 0;
    //     for (const item of arrayOfItems) {
    //         if (typeof item !== 'number') {
    //         return ("items must be number")
    //         } else {
    //             sum += item;
    //         }
    //     }
    //     return sum/arrayOfItems.length;
    // }
    // console.log(average([2,5,4,6,3]));

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
    // function modifyArray(arrayOfItems) {
    //     if (arrayOfItems.length < 5){   return 'Not found'
    //     } else {
    //         let item5 = arrayOfItems.slice(4,5).toString().toUpperCase();
    //         arrayOfItems.splice(4,1,item5);
    //         return modifyArray = arrayOfItems;
    //     }
    // }
    // console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
    

// 15. Write a function called isPrime, which checks if a number is prime number.

// 16. Write a functions which checks if all items are unique in the array.


// 17. Write a function which checks if all the items of the array are the same data type.

// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.


// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
    // function sevenRandomNumbers(){
    //     let numArr = Array();
    //     for (let i = 0; i < 7; i++){
    //         let num, isDuplicateNum = true;
    //         while(isDuplicateNum){
    //             num = Math.floor(Math.random() * 10)
    //             isDuplicateNum = numArr.includes(num);
    //         }
    //         numArr.push(num)
    //     }   
    //     return numArr;
    // }
    // console.log(sevenRandomNumbers());

// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
    // function reverseCountries(countryArray) {
    //     let copyCountry = countryArray.slice(0);
    //     return copyCountry.reverse()
    // }
    // console.log(reverseCountries(['Nigeria', 'Canada', 'Japan', 'Jamaica']));