//--- Exercises
// -- Exercises: Level 1

// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
// const pattern = /\d+/g
// let numArr = text.match(pattern)
// console.log(numArr);
const sum = text.match(/\d+/g).reduce((acc, cur) => {return acc + +cur},0);
// console.log(sum); // 19500

// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
/*
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
distance = 12
*/
const txt = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.';
const points = txt.match(/-?\d+/g).map(x => +x).sort((a,b)=>{
    // if (a>b) return 1;
    // if (a<b) return -1;
    // else return 0;
    return a-b;
});
// console.log(points);
// console.log( points[points.length -1] - points[0]);

// function sorted (param){
//     param.sort((a,b)=>{
//         if(a>b) return 1;
//         if(a<b) return -1;
//         else return 0;
//     });
// }; 

// 3. Write a pattern which identify if a string is a valid JavaScript variable
/*
is_valid_variable('first_name') # True
is_valid_variable('first-name') # False
is_valid_variable('1first_name') # False
is_valid_variable('firstname') # True
*/
/*
const pattern = /^[A-Za-z_$][1-9a-zA-Z_$]*$/
const variable = '_firstname';
const is_valid_variable = pattern.test(variable)

console.log(is_valid_variable);
*/

// Exercises: Level 2
// 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

   let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

   const pattern = /\w+/gi
   const allWords = paragraph.match(pattern)
   const uniqueWords = new Set(allWords);
   console.log(allWords);
   console.log(uniqueWords);
   let counts = 0;
   for (let index = 0; index < uniqueWords.length; index++) {
        // pos = allWords.indexOf(uniqueWords[0]);
        // console.log(pos)
   }

/*
    console.log(tenMostFrequentWords(paragraph))

    [
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}]

console.log(tenMostFrequentWords(paragraph, 10))
    [{word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1}
    ]
*/
// --------
// solution goes here
// --------



// Exercises: Level 3
//Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
 /*
 console.log(cleanText(sentence))
 
 I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
 ```

 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

```js
 console.log(mostFrequentWords(cleanedText))
 [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]
 */


// const indices = [];
// const array = ["b", "a", "a", "c", "a", "d"];
// const element = "c";
// let idx = array.indexOf(element);
// let count = 0;
// while (idx !== -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
//   count++;
// }
// console.log(indices);
// console.log(count);
// [0, 2, 4]

 