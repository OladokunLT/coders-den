// 7. Use for loop to iterate from 0 to 100 and print only even numbers
// for (let index = 0; index <= 100; index+=2) {
//     console.log (index);
// }

// for (let index = 0; index <= 100; index++) {
//     if (index % 2 == 0) {
//         console.log(index);
//     }
// }

// function even() {
//     for (let index = 0; index <= 100; index++) {
//         if (index % 2 == 0) {
//             console.log(index);
//         }
//     }    
// }
// even();

// function odd() {
//     for (let index = 0; index <= 100; index++) {
//         if (index % 2 == 1) {
//             console.log(index);
//         }
//     }    
// }
// odd();

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



// 8. Generate a random number between 50 and 100 inclusively.
// let min=50, max= 100;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// Math.random();

// // 9. Generate a random number between 0 and 255 inclusively.
// console.log(Math.floor(Math.random() * (225 - 0 + 1)) + 0)

// // 10. Access the 'JavaScript' string characters using a random number.

// let str = 'javaScript';
// let randomChar = str.charAt(Math.floor(Math.random() * str.length))
// console.log(randomChar)

// global;
// function scope
// block scope

// global



