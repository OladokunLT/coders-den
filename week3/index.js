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
