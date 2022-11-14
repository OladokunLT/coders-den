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

