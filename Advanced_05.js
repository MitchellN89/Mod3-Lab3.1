// 5. The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails. Why?

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

car.description(); //works
setTimeout(car.description, 200); //fails

// a) Fix the setTimeout call by wrapping the call to car.description() inside a
// function

setTimeout(() => {
  car.description();
}, 300);

// setTimeout(car.description.bind(car), 200); // Could also do this!!

// b) Change the year for the car by creating a clone of the original and overriding it

const car2 = { ...car, year: 2000 }; // I guess I could have used Object.create() here but this seems more efficient

// c) Does the delayed description() call use the original values or the new values from
// b)? Why?

// The way I've done it, using spread and wrapping the call in a function, it should call it's own properties.
// This is because car2.description is a function that uses 'this' to reference it's own properties

setTimeout(() => {
  car2.description();
}, 400);

// d) Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function

setTimeout(car2.description.bind(car2), 500);

// e) Change another property of the car by creating a clone and overriding it, and test that
// setTimeout still uses the bound value from d)

const car3 = { ...car, make: " Toyota" };
setTimeout(car3.description.bind(car), 600);
// not sure I've fully understood the question here but this uses car3s description method but binds car to it
// This means the print will be cars details even though car3s desciption method was used
