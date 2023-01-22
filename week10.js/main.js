//1.  create an empty set
    // const emptySet = new Set();
    // console.log(emptySet);

//2.  Create a set containing 0 to 10 using loop
/* 
    const numToTen = new Set();
    for (let i=0; i<=10; i++) {
        numToTen.add(i);
    }
    // console.log(numToTen);
*/

//3. Remove an element from a set
    // const numToTen = new Set();
    // for (let i=0; i<=10; i++) {
    //     numToTen.add(i);
    // }
    // console.log(numToTen);
    // console.log(numToTen.delete(6));
    // console.log(numToTen);

//4.  Clear a set
    // const fruits = new Set(['mango', 'orange'])
    // console.log(fruits)
    // console.log(fruits.clear());

//5.  Create a set of 5 string elements from array
    // const ArrOfFiveStr = new Array('Spoon', 'Pot', 'Stove', 'Matches', 'Salt' );
    // console.log(ArrOfFiveStr);
    // const setOfFiveStr = new Set(ArrOfFiveStr);
    // console.log(setOfFiveStr);

//6.  Create a map of countries and number of characters of a country
    // const nation = [['Oyo', 'Ibadan'], ['Ogun', 'Abeokun'], ['Ondo', 'Benin']]
    // const mapOfNation = new Map(nation);
    // console.log(mapOfNation);

//---------  Exercises:Level 2 ------------
// required given data
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
// const countries = ['Finland', 'Sweden', 'Norway'];

// 1. Find a union b
/*
    const A = new Set(a);
    const B = new Set (b);
    const c = [...a, ...b];
    const AuB = new Set(c);
    console.log(AuB);
*/

// 2. Find a intersection b
        // const A = new Set(a);
        // const B = new Set (b);
        // const uniq = a.filter(item => b.includes(item))
        // const AnB = new Set(uniq);
        // console.log(AnB);

// 3. Find a with b

// -------- Exercises:Level 3 -------------
//1. How many languages are there in the countries object file.
        // loop through countries.language array;
        // push in another array
        // get size of unique languages using set;
    let allLangs =[]
        for(item of countries) {
            item.languages.forEach(x=> allLangs.push(x));
    }
    const langSet = new Set(allLangs);
    console.log(langSet.size);
    // console.log(allLangs);
// *** Use the countries data to find the 10 most spoken languages:
let mostSpoken = new Set(Object.entries(countries.reduce((arr, obj) => (arr = arr.concat(obj.languages)), []).reduce((obj, name) => {
    obj[name] = (obj[name] || 0) +1;
    return obj;
 }, {}))); 
   // Your output should look like this
   /*
    console.log(mostSpokenLanguages(countries, 10));
    [
        { English: 91 },
        { French: 45 },
        { Arabic: 25 },
        { Spanish: 24 },
        { Russian: 9 },
        { Portuguese: 9 },
        { Dutch: 8 },
        { German: 7 },
        { Chinese: 5 },
        { Swahili: 4 },
        { Serbian: 4 }
    ];

    // Your output should look like this
    console.log(mostSpokenLanguages(countries, 3))
        [
        {English:91},
        {French:45},
        {Arabic:25}
        ];
  */