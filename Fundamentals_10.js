// 10. The following constructor function creates a new Person object with the given name and age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separatevariable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a\third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function () {
    return this.age >= 16;
  };
}

const me = new Person("Mitchell Nilsson", 33);
const kirsty = new Person("Kirsty Reid", 31);

getProperties(me);
getProperties(kirsty);

function getProperties(obj) {
  for (let prop in obj) {
    console.log(prop, obj[prop]);
  }
}

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  canDrive() {
    return this.age >= 16;
  }
}

const john = new PersonClass("John Doe", 65);
const youngMan = new PersonClass("Timmy Youngman", 13);
const youngLady = new Person("Sally Youngins", 9);

console.log("john.canDrive():", john.canDrive()); //true
console.log("youngMan.canDrive():", youngMan.canDrive()); //false
console.log("youngLady.canDrive():", youngLady.canDrive()); //false
console.log("me.canDrive():", me.canDrive()); //true
