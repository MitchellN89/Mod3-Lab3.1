// 8. The object below represents a single city.

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values.
// Test it using the sydney object below.

function getProperties(obj) {
  for (let prop in obj) {
    console.log(prop, obj[prop]);
  }
}
getProperties(sydney);

// b) Create a new object for a different city with different properties and call your
// function again with the new object.

const perth = {
  name: "Perth",
  population: 2_118_000,
  state: "WA",
  founded: "12 August 1829",
  timezone: "Australian Western Standard Time",
};
getProperties(perth);
