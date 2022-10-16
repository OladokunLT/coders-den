//---- Level 1 ------------------------------------------------

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript";

// 2. Print the string on the browser console using console.log()
console.log(challenge);

// 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// 4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

// 6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.slice(0, 2));

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(3));

// 8. Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

// 9. Split the string into an array using split() method
console.log("Script".split(''));

// 10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'));

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'));

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));

/* 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'
*/
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

/* 
18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
console.log(sentence.lastIndexOf("because"));

/* 19. Use search to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
console.log(sentence.search(/because/gi));
console.log(sentence.search("because"));

/* 20. Use trim() to remove any trailing whitespace at the 
beginning and the end of a string.E.g ' 30 Days Of JavaScript '. */
console.log(' 30 Days Of JavaScript '.trim());

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30 Days Of'));

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'));

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(/a/gi)); // 

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('30 Days of'.concat(" ", 'JavaScript'));

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

//----- LEVEL 2  ---------------------------------------

// 1. Using console.log() print out the following statement:
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");

// 2. Using console.log() print out the following quote by Mother Teresa:
let motherTeresa = "Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."
console.log(motherTeresa);

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10' === 10 ); // false
let numTen = parseInt('10');
console.log(numTen === 10);

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') === 10);
let numApprox = Math.round(parseFloat("9.8"));
console.log(numApprox === 10);

// 5. Check if 'on' is found in both python and jargon
console.log("python".includes('on'));
console.log(`jargon`.includes(`on`));

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log('I hope this course is not full of jargon'.match('jargon'));

// 7. Generate a random number between 0 and 100 inclusively. 
console.log(Math.floor(Math.random() * (100 - 0 + 1)) + 0 )  
// 8. Generate a random number between 50 and 100 inclusively.
let min=50, max= 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
Math.random();

// 9. Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * (225 - 0 + 1)) + 0)

// 10. Access the 'JavaScript' string characters using a random number.
let str = 'javaScript';
console.log(str.charAt(Math.floor(Math.random() * str.length)))

// 11. Use console.log() and escape characters to print the following pattern.
console.log(
    `
    ${1} ${1**0} ${1**1} ${1**2} ${1**3} \t
    ${2} ${2**0} ${2**1} ${2**2} ${2**3} \t
    ${3} ${3**0} ${3**1} ${3**2} ${3**3} \t
    ${4} ${4**0} ${4**1} ${4**2} ${4**3} \t
    ${5} ${5**0} ${5**1} ${5**2} ${5**3} \t
    `
);

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence); // You cannot end a ...
let startIndex = sentence.indexOf('because');
let stopIndex = 'because because because'.length + startIndex;
console.log(sentence.slice(startIndex, stopIndex));

// ---- LEVEL 3 --------------------------------------------

/* 1. 'Love is the best thing in this world. 
Some found their love and some are still looking for their love.' 
Count the number of word love in this sentence.*/
let quote = `Love is the best thing in this world. Some found their love and some are still looking for their love.`;
console.log(quote.match(/love/gi).length);

/* 2. Use match() to count the number of all because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'*/
console.log(sentence.match(/because/gi).length);

/* 3. Clean the following text and find the most frequent word 
(hint, use replace and regular expressions).*/
const sentence1 = `%I $am@% a %tea@cher%, &and& 
I lo%#ve %te@a@ching%;. 
The@re $is no@th@ing; 
&as& mo@re rewarding as educa@ting 
&and& @emp%o@weri@ng peo@ple. 
;I found tea@ching m%o@re interesting 
tha@n any ot#her %jo@bs. %Do@es thi%s 
mo@tiv#ate yo@u to be a tea@cher!? 
%Th#is 30#Days&OfJavaScript &is 
al@so $the $resu@lt of &love& of tea&ching`
let clean = sentence1.replace(/[%$@&#;!]/g, "");
console.log(clean);
console.log(clean.match(/I/g).length);
console.log(clean.match(/am/g).length);
console.log(clean.match(/a/g).length); 
console.log(clean.match(/teacher/gi).length);
console.log(clean.match(/and/gi).length);
console.log(clean.match(/love/gi).length);
console.log(clean.match(/teaching/gi).length)
console.log(clean.match(/there/gi).length);
console.log(clean.match(/is/gi).length);
console.log(clean.match(/as/gi).length);
console.log(clean.match(/more/gi).length);
console.log(clean.match(/rewarding/gi).length);
console.log(clean.match(/educating/gi).length);
console.log(clean.match(/than/gi).length);
console.log(clean.match(/any/gi).length);
console.log(clean.match(/other/gi).length);
console.log(clean.match(/jobs/gi).length);
console.log(clean.match(/does/gi).length);
console.log(clean.match(/this/gi).length);

/* 4. Calculate the total annual income of the person 
by extracting the numbers from the following text. 
'He earns 5000 euro from salary per month, 10000 euro annual bonus, 
15000 euro online courses per month.'*/
const salaryStr = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let numArr = salaryStr.match(/\d+/g);
console.log(+numArr[0] + +numArr[1] + +numArr[2])
