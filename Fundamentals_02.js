// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four; // incorrect - "34" this has concatenated the strings "3" and "4"
let multiplication = three * four; // correct - this operator attempts to convert the string to number
let division = three / four; // correct - as above
let subtraction = three - four; // correct - as above
let lessThan1 = three < four; // correct, although for the wrong reason. Answer given is based on the lexicographical order
let lessThan2 = thirty < four; // incorrect, for the reason above
// best way to correct these is by declaring three, four and thirty correctly. As below...
three = 3;
four = 4;
thirty = 30;
