// 8. The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F

const phoneBookDEF = new Map();

// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

const phoneBookDefNewArrays = [
  ["Darren", "021123123"],
  ["Ellen", "02115515"],
  ["Freddy", "021321321"],
];

phoneBookDefNewArrays.forEach((item) => {
  phoneBookDEF.set(item[0], item[1]);
});

// c) Update the phone number for Caroline

phoneBookABC.set("Caroline", "022212231");

// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map

function printPhoneBook(contacts) {
  contacts.forEach((val, key) => {
    console.log(key + ": " + val);
  });
}

printPhoneBook(phoneBookDEF);

// e) Combine the contents of the two individual Maps into a single phoneBook Map

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// f) Print out the full list of names in the combined phone book

// Assuming this means just from a console.log? I'm guessing there is a few ways to do it
// Option 1: just returning the keys as a MapIterator
console.log(phoneBook.keys());

// Option 2: iterating over the keys() method and printing names.
for (let contact of phoneBook.keys()) {
  // Have used for loop here.
  console.log(contact);
}

// There will be more ways to do it undoubtedly!
