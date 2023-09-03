// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// a) Print the total number of minutes that have passed so far today

console.log(
  "Minutes passed so far today: ",
  today.getMinutes() + today.getHours() * 60
);

// b) Print the total number of seconds that have passed so far today

console.log(
  "Seconds passed so far today: ",
  today.getHours() * 60 * 60 + today.getMinutes() * 60 + today.getSeconds()
);
console.log(today.getSeconds());

// c) Calculate and print your age as: 'I am x years, y months and z days old'

const myAge = new Date("1989-09-19");
let myBirthYear = myAge.getFullYear(),
  myBirthMonth = myAge.getMonth(),
  myBirthDay = myAge.getDate();
let todayYear = today.getFullYear(),
  todayMonth = today.getMonth(),
  todayDay = today.getDate();

let yearsOld = todayYear - myBirthYear,
  monthsOld = todayMonth - myBirthMonth,
  daysOld = todayDay - myBirthDay;
console.log(yearsOld, monthsOld, daysOld);

if (monthsOld <= 0 && daysOld < 0) {
  // first, im checking if today is either IN or after the month of my bday AND the current day is past my bday
  yearsOld--;
  monthsOld += 11;
  const prevMonthDays = new Date(yearsOld, monthsOld, 0).getDate();
  daysOld += prevMonthDays;
} else if (daysOld < 0) {
  // if not, I'm just checking if the current day is past my bday day in any month EXCEPT my bday month and after
  monthsOld--;
  const prevMonthDays = new Date(yearsOld, monthsOld, 0).getDate();
  daysOld += prevMonthDays;
} else if (monthsOld < 0) {
  // here, I'm just checking if ONLY the month is past my bday month but the day is not
  monthsOld += 12;
  yearsOld--;
}

console.log(
  `'I am ${yearsOld} years, ${monthsOld} months and ${daysOld} days old'`
);

// This took me an age to figure out. I must have spent about an hour playing around with things.
// I don't even know if this is the best way to do it!? Perhaps there is an easier way!?

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates.

function daysInBetween(date1, date2) {
  const msInDay = 8.64e7;
  const msBetween = date1 - date2 > 0 ? date1 - date2 : date2 - date1;
  return Math.floor(msBetween / msInDay);
}

// This one was WORLD's easier than c thankfully!!
