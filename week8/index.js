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
let dogName = this.name
return  `The name of this dog is ${this.name} \nit has ${this.legs} legs and bark as ${this.bark()}`
}
console.log(dog.getDogInfo());
