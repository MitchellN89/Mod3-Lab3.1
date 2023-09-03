// 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let moreSports = [...teamSports];
moreSports.push("Blitzball", "Quidditch", "Grifball", "Basketbrawl");
moreSports.unshift("Gwent", "Quodpot");

let dog1 = "Bingo";
let dog2 = dog1; // Have assigned dog2 the same value as dog1
dog2 = "Rover"; // changed it's value to "Rover"

let cat1 = { name: "Fluffy", breed: "Siberian" };
let cat2 = { ...cat1 };
cat2.name = "Charlie";

console.log(teamSports, dog1, cat1);
// If declaring an object or an array as equal to an existing Array or Object, you're capturing the reference of the Array / Object in the variable. Therefore any changes to either the original variable or the new variable will be reflected in both variables.
// Strings however aren't reference types, they are primitive types. Declaring a variable as equal to another string variable captures the value at that moment of the 2nd variable and stores 'a clone' of it in the variable you are declaring.
// I've updated the above using the spread syntax to declare new variables for the arrays and objects using the original Array and Object as a 'template'. Illustrated below...
console.log(teamSports, moreSports, dog1, dog2, cat1, cat2);
