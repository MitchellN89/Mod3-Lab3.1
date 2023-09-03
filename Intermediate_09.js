// 9. Given the below salaries object, perform the following tasks.
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

function sumSalaries(salaries) {
  let sum = 0;
  for (let person in salaries) {
    sum += salaries[person];
  }
  return sum;
}

console.log("Salaries, summed: ", sumSalaries(salaries));

// b) Write a function topEarner(salaries) that calculates and returns the name of the person
// earning the highest salary

function topEarner(salaries) {
  let topEarner = "",
    salary = 0;
  for (let person in salaries) {
    if (salaries[person] > salary) {
      topEarner = person;
      salary = salaries[person];
    }
  }
  return topEarner;
}

console.log("Top earner: ", topEarner(salaries));
