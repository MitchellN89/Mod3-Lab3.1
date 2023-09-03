// 3. Which of the following console.log messages will print? Why?
if (0) console.log("#1 zero is true"); // won't print. 0 is a falsy value and equates to false as a boolean
if ("0") console.log("#2 zero is true"); // will print. A non-empty sting is a truthy value and equates to true as a boolean
if (null) console.log("null is true"); // won't print. null is a falsy value and equates to false as a boolean
if (-1) console.log("negative is true"); // will print, a non-0 number is a truthy value and equates to true as a boolean
if (1) console.log("positive is true"); // same as above
