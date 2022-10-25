// Level 1
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Lukman', 
    lastName='Oladokun', 
    country='Nigeria', 
    city='Ibadan', 
    age=120, 
    isMarried=false, 
    year=2022;    
console.log (
    typeof(firstName), 
    typeof (lastName), 
    typeof (country),
    typeof (city), 
    typeof (age), 
    typeof (isMarried), 
    typeof (year)
);

// 2. Check if type of '10' is equal to 10
console.log(typeof ('10') == 10);
console.log(typeof ('10') === 10);

// 3.Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10);
console.log(parseInt('9.8') === 10);

// 4. Boolean value is either true or false.
    // i. Write three JavaScript statement which provide truthy value.
console.log([1] == 1);
console.log(false == 0);
console.log(0 == "")
    // ii. Write three JavaScript statement which provide falsy value.
console.log([""] == [""]);
console.log({id: 101 } == {id : 101})
console.log(!1);

/* 5.
Figure out the result of the following comparison expression 
first without using console.log(). 
After you decide the result confirm it using console.log()
*/
console.log( 4 > 3 ) // true
console.log( 4 >= 3 ) // true
console.log( 4 < 3  ) // false
console.log( 4 <= 3 ) // false
console.log( 4 == 4 ) // true
console.log( 4 === 4) //true
console.log( 4 != 4 ) // false
console.log( 4 !== 4) // false
console.log( 4 != '4') // false
console.log( 4 == '4') // true
console.log( 4 === '4') // false
//Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length != 'jargon'.length); // false

/* 6.
Figure out the result of the following comparison expression 
first without using console.log(). 
After you decide the result confirm it using console.log()
*/
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); // true
    //There is no 'on' in both dragon and python
console.log(!("dragon".includes('on') && "python".includes('on'))) // false

// 7. Use the Date object to do the following activities
const now = new Date();
    //What is the year today?
console.log(now.getFullYear());
    //What is the month today as a number?
console.log(now.getMonth()); //
    //What is the date today?
console.log(now.getDate()); // 
    //What is the day today as a number?
console.log(now.getDay()); // 
    //What is the hours now?
console.log(now.getHours()); //
    //What is the minutes now?
console.log(now.getMinutes())
    //Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime());

///////// -----------Level 2 --------------------------
// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*
    let base = Number(prompt('Enter base:', 20));
    let height = Number(prompt('Enter height:', 10));
    let areaOfTriangle = base * height * 0.5;
    console.log(area);
*/

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/*
    let a = Number(prompt('Enter side a: ', 5));
    let b = parseInt(prompt('Enter side b: ', 4));
    let c = +(prompt('Enter side c: ', 3));
    let perimeterOfTriangle = a + b + c;
    console.log(perimeterOfTriangle);
*/

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)).
/*
    let length = Number(prompt('Enter side a: '));
    let width = parseInt(prompt('Enter side b: '));
    let areaOfRectangle = length * width;
    let perimeterOfRectangle = 2 * (length + width);
    console.log(areaOfRectangle);
    console.log(perimeterOfRectangle);
*/

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
/*
    let r = Number(prompt('Enter radius of circle (in cm): '));
    let areaOfCircle = Math.round(Math.PI * r**2);
    let perimeterOfCircle = Math.round(2 * Math.PI * r);
    console.log(areaOfCircle);
    console.log(perimeterOfCircle);
*/

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let x, y;
// switch (true) {
//     case x !== 0:
//         x = 0;
//         y = 2*x - 2;
//         console.log(`y-intercept is ${y}`)
        
//     case y !== 0:
//         y= 0;
//         x = 0 + 2/2;
//         console.log(`x-intercept is ${x}`);
//     default:
//         break;
// } 
// console.log(`slope is ${2/1}`);

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2, y1 = 2, x2 = 6, y2 = 10, m; 
    m = (y2 - y1)/(x2 -x1);
    console.log(`Slope is ${m} `);

// 7. Compare the slope of above two questions.
console.log(2 == 2); // m==m -> true

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x= -3;
let y=x**2 + 6*x + 9;
switch (x**2 + 6*x + 9) {
    case 0:
        console.log(`y = ${y} when x = ${x}`);
        break;
    default:
        console.log(`Wrong! ${x} is a is not the correct root value`);
}

// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
/*
    let hours = Number(prompt('Enter hours: '));
    let ratePerHour = Number(prompt('Enter rate per hour: '));
    let weeklyEarning = hours * ratePerHour;
    console.log(weeklyEarning);
*/

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.;
firstName.length > 7 ? console.log('Your name is long'): console.log('Your name is short');

// 11. Compare your first name length and your family name length and you should get this output.
console.log(`Your first name, ${firstName} is ${firstName>lastName ? 'longer':'shorter'} than your family name, ${lastName}
`);

// 12. 
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge-yourAge} older than you`);

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
/**
    let drivingAge = +prompt(`Enter birth year: 1995`)
    if (drivingAge) {
        console.log(`You are ${age}. You are old enough to drive`);
    } else {
        console.log(`You are ${age}. You will be allowed to drive after ${age-18} years.`)
    }
 */

// 14. 
