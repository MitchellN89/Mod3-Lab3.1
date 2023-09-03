// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:

// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array

// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.

const animals = ["Tiger", "Giraffe"];
console.log(animals);

// My code below;
animals.push("Black Bear", "Polar Bear");
animals.unshift("Grizzly Bear", "Sun Bear");

console.log("Before sort: ", animals);

animals.sort(); // this will work for the text.
animals.sort((a, b) => {
  return a - b;
}); //this would work if there were also numbers in there

console.log("After sort: ", animals);

function replaceMiddleAnimal(newAnimal) {
  const arrayLength = animals.length;
  const targetAnimal = Math.round((arrayLength - 1) / 2);
  animals[targetAnimal] = newAnimal;
}

replaceMiddleAnimal("Penguin"); // in case the length of the array is an odd number, the function rounds

console.log("After replace: ", animals);
