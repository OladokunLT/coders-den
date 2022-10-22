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


