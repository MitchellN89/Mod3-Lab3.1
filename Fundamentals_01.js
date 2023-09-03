// 1. What are the results of these expressions? (answer first, then use console.log() to check)
"" + 1 + 0; // "10", first part is a string, using + converts the rest to string
"" - 1 + 0; // -1, using - doesn't convert everything to string, it tries to interpret the string as a nurmeric value. In this case, probably 0
true + false; // 1, the nurmeric value of ture is 1, and the numeric value of false is 0
!true; // false, NOT true = false
6 / "3"; // 2, using / tries to interpret the string as a number
"2" * "3"; // 6, using * tries to interpret the string as a number
4 + 5 + "px"; // "9px", firstly, 4 + 5 are evaluated as numbers, they are then converted to string to concat the "px"
"$" + 4 + 5; // "$45", same as above, using + on a string, converts the rest to string
"4" - 2; // 2, converts string to number
"4px" - 2; // NaN, you cannot use - on a string
" -9 " + 5; // " -95", converts to string due to +
" -9 " - 5; // -14, converts string to number using -
null + 1; // 1 interstingly, I expected this initally to be NaN. I guess null has the numeric value of 0, making it 'falsy'
undefined + 1; // caught by surprise again, this time I expected it to match the above example. Nan this time...
undefined == null; // true, I believe this is because == forces coercion and both values are 'falsy'
undefined === null; // false, this will be due to the types being compared as well, of which they are not equal
" \t \n" - 2; // -2, I assume this will be due to '\t \n' not being proper characters. If there were normal characters in this I would expect Nan
" \t \n Hello!" - 2; // Nan, to illustrate my above comment
