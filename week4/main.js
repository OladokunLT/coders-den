// Level 1
// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/*
    let ageInput =  +prompt("Enter your age: ");
    if (ageInput >= 18) {
        console.log("You are old enough to drive.")
    } else {
        console.log(`You are left with ${18 - ageInput} years to drive.`)
    }
*/

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/*
    let myAge = 18;
    let yourAge = +prompt("Enter your age: ")
    if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`)
    } else {
        console.log(`I am ${myAge - yourAge} years older than me.`)
    }
*/

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways.
let a = 4, b = 3;
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is less than ${b}`)
}

a>b ? console.log(`${a} is greater than ${b}`)
    :     console.log(`${a} is less than ${b}`);

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = 9;
if (number % 2 == 0) {
    console.log(`${number} is an even.`);
} else {
    console.log(`${number} is an odd number.`)
}

// LEVEL 2 --------------------------------///
/*
1. Write a code which can give grades to students according to theirs scores:
     80-100, A
     70-89, B
     60-69, C
     50-59, D
     0-49, F
*/
let grade;
let mark = 43;
if (mark >= 0 && mark <=49) {
    grade = "F";
    console.log(grade);
}
else if(mark <=59) {
    grade = "D";
    console.log(grade);
}
else if(mark <=69) {
    grade = "C";
    console.log(grade);
}
else if(mark <=79) {
    grade = "B";
    console.log(grade);
}
else if(mark <=100) {
    grade = "A";
    console.log(grade);
} 
else {
console.log (`Enter number between 0 and 100`)
}

/*
2. Check if the season is Autumn, Winter, Spring or Summer. 
If the user input is :
    * September, October or November, the season is Autumn.
    * December, January or February, the season is Winter.
    * March, April or May, the season is Spring
    * June, July or August, the season is Summer
*/
let monthInputs = 'August';
switch (monthInputs.toLowerCase()) {
    case 'september':
    case 'october':
    case 'November':
        console.log('Autumn')
        break

    case 'december':
    case 'january':
    case 'february':
        console.log('Winter')
        break;

    case 'march':
    case 'april':
    case 'may':
        console.log('Spring')
        break;

    case 'june':
    case 'july':
    case 'august':
        console.log('Summer')
        break;

    default:
        console.log('Incorrect input')
        break;
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
let dayInput = 'monDAY';
dayInput = dayInput.toLowerCase();
let FirstCharToUppercase = dayInput.charAt(0).toUpperCase();
let day = FirstCharToUppercase.concat(dayInput.slice(1));
console.log(day);
switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log(`${day} is a working day.`);        
        break;

    case 'Saturday':
    case 'Sunday':
        console.log(`${day} is a weekend.`)
        break
    default:
        console.log(`Incorrect input! Enter name of day in full and correctly`);       
        break;
}

// LEVEL 3 ------------------------///
// 1. Write a program which tells the number of days in a month.
let monthInput = 'january';
monthInput = monthInput.toLowerCase();
let FirstLetterToUppercase = monthInput.charAt(0).toUpperCase();
let monthName = FirstLetterToUppercase.concat(monthInput.slice(1));
console.log(monthName);
switch (monthName) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${monthName} has 31 days.`);        
        break;

    case 'September':
    case 'April':
    case 'June':
    case 'November':
        console.log(`${monthName} has 30 days.`)
        break
    
    case 'February':
        console.log(`${monthName} has 28 days.`)
        break

    default:
        console.log(`Incorrect input! Enter name of Month in full and correctly`);
        break;
}

// 2. Write a program which tells the number of days in a month, now consider leap year.
// considering leap year

let userMonthInput = 'February';
userMonthInput = userMonthInput.toLowerCase();
let festCharToUppercase = userMonthInput.charAt(0).toUpperCase();
let nameOfMonth = festCharToUppercase.concat(userMonthInput.slice(1));
console.log(nameOfMonth);
switch (nameOfMonth) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${nameOfMonth} has 31 days.`);        
        break;

    case 'September':
    case 'April':
    case 'June':
    case 'November':
        console.log(`${nameOfMonth} has 30 days.`)
        break
    
    case 'February':
        console.log(`${nameOfMonth} has 29 days.`)
        break

    default:
        console.log(`Incorrect input! Enter name of Month in full and correctly`);
        break;
}