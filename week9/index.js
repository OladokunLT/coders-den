// 💻 Exercises
// Exercises: Level 1
const nations = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. Explain the difference between forEach, map, filter, and reduce.
// 2. Define a callback function before you use it in forEach, map, filter or reduce.
// 3. Use forEach to console.log each country in the countries array.
    // countries.forEach(country => {console.log(country)});

// 4. Use forEach to console.log each name in the names array.
    // names.forEach(name => { console.log(name) });

// 5. Use forEach to console.log each number in the numbers array.
    // numbers.forEach(num => { console.log(num) });

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
    // const countriesToUpperCase = countries.map( country =>  country.toUpperCase() );
    // console.log(countriesToUpperCase)

// 7. Use map to create an array of countries length from countries array.
    // const countryLength = countries.map( country => country.length )
    // console.log(countryLength);

// 8. Use map to create a new array by changing each number to square in the numbers array
    // const squarNum = numbers.map(num =>num *num)
    // console.log(squarNum);
    
// 9. Use map to change to each name to uppercase in the names array
    // namesToLowerCase = names.map(name => name.toLowerCase())
    // console.log(namesToLowerCase)

// 10. Use map to map the products array to its corresponding prices
    // const productPrice = products.map(product =>  product.price  )
    // console.log(productPrice)

// 11. Use filter to filter out countries containing land.
    // const countriesThatContainLand = countries.filter(country => country.includes('land')) 
    // console.log(countriesThatContainLand);

// 12. Use filter to filter out countries having six character.
    // const countryHas6Char = countries.filter( country => {return country.length === 6});
    // console.log(countryHas6Char);

// 13. Use filter to filter out countries containing six letters and more in the country array.
    // const countryHasAtLeast6Char = countries.filter( country => {return country.length >= 6});
    // console.log(countryHasAtLeast6Char);

// 14. Use filter to filter out country start with 'E';
    // const countryStartWithCharE = countries.filter( country => country.startsWith('E'))
    // console.log(countryStartWithCharE);

// 15. Use filter to filter out only prices with values.
    // const pricesWithValue = products.filter((item)=> {
    //     if(typeof item.price === "number") return item
    // })
    // console.log(pricesWithValue)

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
    // arr = ['Bright', 'Monday', 'morning']
    // const getStringLists = arr.map( string => {return string})
    // console.log(getStringLists)

// function getStrings () {
//     let empty = []
//     arr = ['Bright', 'Monday', 'morning'];
//     arr.map( (string) => { empty.push(string)})
//     return empty
// }
// console.log(getStrings())

// 17. Use reduce to sum all the numbers in the numbers array.
    // const sum = numbers.reduce((acc, cur) => {return acc + cur}, 0)
    // console.log(sum);
    
// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries.
    // function concatCountries (countries){
    //     let minusLastCountry = countries.slice (0, -1);
    //     let lastCountry = countries.slice(-1);
    //     let concat = minusLastCountry.reduce((all, item) => {return all + item + ', '}, "");
    //     let statement =  `${concat} and ${lastCountry[0]} are north European countries.`;

    //     return statement;
    // }
    // console.log(concatCountries(countries));

// 19. Explain the difference between some and every

// 20. Use some to check if some names' length greater than seven in names array
    // const greater7 = names.some(name => name.length > 7);
    // console.log(greater7);

// 21. Use every to check if all the countries contain the word land
    // const checkAllCountryContainLand = countries.every(country => country.includes('land'))
    // console.log(checkAllCountryContainLand)


// 22. Explain the difference between find and findIndex.
    //find returns the first value if true while findIndex returns position if true.

// 23. Use find to find the first country containing only six letters in the countries array
    // const first6CharCountry = countries.find(country => country.length === 6);
    // console.log(first6CharCountry);

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
    // const first6CharCountryPosition = countries.findIndex(country => country.length === 6);
    // console.log(first6CharCountryPosition);

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
    // const positionOfNorway = countries.findIndex(country=> country.includes('Norway'));
    // console.log(positionOfNorway)

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
    // const positionOfRussia = countries.findIndex(country=> country === 'Russia');
    // console.log(positionOfRussia)

// Exercises: Level 2

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
    // const totalPrice = products.filter((item)=> typeof item.price === 'number').reduce((total, each) => total + each.price, 0);
    // console.log(totalPrice);

// 2. Find the sum of price of products using only reduce reduce(callback))
    // const totalPrice = products.reduce((sum, each) => {return typeof each.price ==='number' ? sum + each.price : sum},0)
    // console.log(totalPrice);

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// countries.js(eg 'land', 'ia', 'island','stan'));
// function categorizeCountries() {
//     // console.log(nations)
//     let answer = []
//     const cat1 = nations.filter(country => country.includes('land'))
//     const cat2 = nations.filter(country => country.includes('ia'));
//     const cat3 = nations.filter(country => country.includes()) // I still need to get other countries.
//     answer.push(cat1, cat2, cat3)
//     return (answer)
// }
// console.log(categorizeCountries())

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

/*  
  function countInitials (obj) {
    let count = 0, curChar, pos, preChar = "";
    let res = {}, arr =[];
    let letters = obj.map(x => x.name[0]);
    for(i = 0; i<letters.length; i++){
      curChar = letters[i];
      pos = letters.indexOf(curChar);
      if (curChar === preChar) continue;
      while(pos!==-1){
        count++;
        pos = letters.indexOf(curChar, pos +1);
        res[curChar] = count;
      }
    count = 0;
    preChar = curChar;
    }
    return res;
  }
  
  console.log(countInitials(countries));
*/

// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


// Exercises: Level 3
// 1.  Use the countries information, in the data folder. Sort countries by name, by capital, by population

// 2. *** Find the 10 most spoken languages:
/**
     * // Your output should look like this
    console.log(mostSpokenLanguages(countries, 10))
    [
    {country: 'English',count:91},
    {country: 'French',count:45},
    {country: 'Arabic',count:25},
    {country: 'Spanish',count:24},
    {country:'Russian',count:9},
    {country:'Portuguese', count:9},
    {country:'Dutch',count:8},
    {country:'German',count:7},
    {country:'Chinese',count:5},
    {country:'Swahili',count:4}
    ]

    // Your output should look like this
    console.log(mostSpokenLanguages(countries, 3))
    [
    {country: 'English',count: 91},
    {country: 'French',count: 45},
    {country: 'Arabic',count: 25},
    ]```
*/


// 3. *** Use countries_data.js file create a function which create the ten most populated countries
    /**
    console.log(mostPopulatedCountries(countries, 10))

    [
    {country: 'China', population: 1377422166},
    {country: 'India', population: 1295210000},
    {country: 'United States of America', population: 323947000},
    {country: 'Indonesia', population: 258705000},
    {country: 'Brazil', population: 206135893},
    {country: 'Pakistan', population: 194125062},
    {country: 'Nigeria', population: 186988000},
    {country: 'Bangladesh', population: 161006790},
    {country: 'Russian Federation', population: 146599183},
    {country: 'Japan', population: 126960000}
    ]

    console.log(mostPopulatedCountries(countries, 3))
    
    [
    {country: 'China', population: 1377422166},
    {country: 'India', population: 1295210000},
    {country: 'United States of America', population: 323947000}
    ]
    ```

    */

// 4. *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

/**
    const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

    console.log('Count:', statistics.count()) // 25
    console.log('Sum: ', statistics.sum()) // 744
    console.log('Min: ', statistics.min()) // 24
    console.log('Max: ', statistics.max()) // 38
    console.log('Range: ', statistics.range() // 14
    console.log('Mean: ', statistics.mean()) // 30
    console.log('Median: ',statistics.median()) // 29
    console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
    console.log('Variance: ',statistics.var()) // 17.5
    console.log('Standard Deviation: ', statistics.std()) // 4.2
    console.log('Variance: ',statistics.var()) // 17.5
    console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/

/**
console.log(statistics.describe())
    Count: 25
    Sum:  744
    Min:  24
    Max:  38
    Range:  14
    Mean:  30
    Median:  29
    Mode:  (26, 5)
    Variance:  17.5
    Standard Deviation:  4.2
    Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
 */

