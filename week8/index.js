// === Exercise day 8
// 1. Create an empty object called dog
    // const dog = {};

// 2. Print the dog object to the console.
    // console.log(dog);

// 3. Add name, legs color, age and  bark properties for the dog objects. the bark property is a method which return woof woof.
const dog = {
    name: 'Bingo',
    legs: 4, 
    color: 'black', 
    age:7,
    bark: function() { return 'woof woof'},
}

// 4. Get name, legs, color, age and bark value from the dog object
    const key = Object.values(dog);
    console.log(key);

// 5. Set new properties the dog object: breed, getDogInfo.
dog.breed = 'localbreed';
dog.getDogInfo = function(){
    return  `The name of this dog is ${this.name} \nit has ${this.legs} legs and bark as ${this.bark()}`
};
// console.log(dog.getDogInfo());

// ===== Exercise Level 2 ======
// ------------------------------------------

    const users = [
      {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2020 9:00 AM",
        isLoggedIn: false,
      },
      {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2020 9:30 AM",
        isLoggedIn: true,
      },
      {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2020 9:45 AM",
        isLoggedIn: true,
      },
      {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
      },
      {
        _id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "08/01/2020 10:00 AM",
        isLoggedIn: false,
      },
    ];

    const products = [
      {
        _id: "eedfcf",
        name: "mobile phone",
        description: "Huawei Honor",
        price: 200,
        ratings: [
          { userId: "fg12cy", rate: 5 },
          { userId: "zwf8md", rate: 4.5 },
        ],
        likes: [],
      },
      {
        _id: "aegfal",
        name: "Laptop",
        description: "MacPro: System Darwin",
        price: 2500,
        ratings: [],
        likes: ["fg12cy"],
      },
      {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [{ userId: "fg12cy", rate: 5 }],
        likes: ["fg12cy"],
      },
    ];
    // console.table(users);
    // console.table(products)

// 1. Find the person who has many skills in the user object.
  // console.log(Object.values(users[0]));

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.

// 3. Find people who are MERN stack developer from the users object

// 4. Set your name in the users object without modifying the original users object

// 5. Get all keys or properties of users object

// 6. Get all the values of users object

// 7. Use the countries object to print a country name, capital, populations and languages.

//===== Exercises: Level 3
///=======================================
// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: 'Lukman',
  lastName: 'Oladokun',
  incomes: ""
}
// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
/*
    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
 */
// 2. Imagine you are getting the above users collection from a MongoDB database. 
//      2a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(_id, username, email, password, createdAt, isLoggedIn) {
  obj = {
    _id: _id, 
    username: username, 
    email: email, 
    password: password, 
    createdAt: createdAt, 
    isLoggedIn: isLoggedIn,
  }

  let regEmails = [];
  for(let i=0; i<users.length; i++){
    // console.log( users[i].email );
    regEmails.push(users[i].email)
  }
  // console.log(regEmails);
  if (regEmails.includes(obj.email)){
    return('email is already registered. Click signin button to login')
  }else 
  users.push(obj);
  return `You are now registered`  
}
console.log(
  signUp(    'fef83e', 'Lukman', 'lukpay@gmail.com', '$stEnsie4',
    `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getSeconds()} AM`,
    true,
  )
);

console.log( 
  signUp('fef83e', 'Lukman', 'lukpay@gmail.com', '$stEnsie4',
  `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getSeconds()} AM`,
  true,)
)
console.table(users);

//      2b. Create a function called signIn which allows user to sign in to the application

// 3. The products array has three elements and each of them has six properties. 
//      3a. Create a function called rateProduct which rates the product 
//      3b. Create a function called averageRating which calculate the average rating of a product

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.