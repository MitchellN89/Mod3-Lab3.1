// 7. In JavaScript, the toString method is used to convert an object to a string representation.
// By default, when an object is converted to a String, it returns a string that looks something
// like [object Object].
// However, we can define our own toString methods for custom objects to provide a more
// meaningful string representation.

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.toString = function () {
  const { name, age, gender } = this;
  return `${name}, ${age}, ${gender}`;
};

const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1); //prints person1: [object Object]\

// a) Define a custom toString method for the Person object that will format and print
// their details
// // // I've modifed the original contructor above. I've used a method toString and used the JSON.stringfy to return the object as a string

// b) Test your method by creating 2 different people using the below constructor function
// and printing them

const person2 = new Person("Mitchell Nilsson", 33, "Male");
const person3 = new Person("Kirsty Reid", 31, "Female");
console.log("person2: " + person2);
console.log("person3: " + person3);

// c) Create a new constructor function Student that uses call to inherit from Person and
// add an extra property cohort

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

// d) Add a custom toString for Student objects that formats and prints their details. Test
// with 2 students.

Student.prototype.toString = function () {
  const { name, age, gender, cohort } = this;
  return `${name}, ${age}, ${gender}, ${cohort}`;
};

const student1 = new Student("John Wilkons", 30, "Male", "July 2023");
const student2 = new Student("Jane Walace", 37, "Female", "July 2023");
const student3 = new Student("Jack Williams", 43, "Male", "July 2023");
const student4 = new Student("Janet Waldrom", 51, "Female", "July 2023");
const student5 = new Student("Jerry Wickleman", 24, "Male", "July 2023");

console.log("Student 1's details are: " + student1);
console.log("Student 2's details are: " + student2);
console.log("Student 3's details are: " + student3);
console.log("Student 4's details are: " + student4);
console.log("Student 5's details are: " + student5);
