// 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
// similar requests until there's a brief pause, then only executing the most recent of those
// requests. See https://www.techtarget.com/whatis/definition/debouncing
// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
// requests being initiated if a user clicks repeatedly on a button.
// Using the following code to test and start with:

function printMe(msg) {
  console.log("printing debounced message", msg);
}

printMe = debounce(printMe, 1000); //create this debounce function for

// a) fire off 3 calls to printMe within 300ms - only the LAST one should print, after
// 1000ms of no calls

setTimeout(printMe, 0, "First Timer");
setTimeout(printMe, 1000, "Second Timer");
setTimeout(printMe, 2000, "Third Timer");

// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// pause, the most recent call to func should be executed and any others ignored.

function debounce(func, timeOut) {
  // ok so, declaring my wrapper function here
  let timer1; // creating a variable here for the return function to use to hold the timer id. I have to define here otherwise I'll get an error the first time the func runs
  return function () {
    // creating the return function which does the following...
    clearTimeout(timer1); // if this timer is already running from another func call, it clears that timer first...
    timer1 = setTimeout(
      function (args) {
        // now we have the args parameter to us. Arguments are passed into this below
        // starts a timer here which takes 1 second to execute. if the function isn't called again, this timer isn't cleared and the function will run
        func.apply(this, args);
      },
      timeOut,
      arguments // arguments from the function are passed into the setTimeout here
    );
  };
}

// b) Extend the debounce decorator function to take a second argument ms, which defines the
// length of the period of inactivity instead of hardcoding to 1000ms
// // // done as above

// c) Extend debounce to allow the original debounced function printMe to take an argument
// msg which is included in the console.log statement.
// // // done as above

// My Extra
// After playing around with it a little, I wanted to try something a little different
// Below is a debouncer that executes the function immediately but stops the execution of the function happening again within a time.

function anotherPrintMe(str) {
  console.log("printing debounced message", str);
}

function debounce2(func, timeout) {
  let timer2;
  return function () {
    if (!timer2) {
      func.apply(this, arguments);
      timer2 = setTimeout(() => {
        timer2 = null;
      }, timeout);
    }
  };
}

const printMeDebounce2 = debounce2(anotherPrintMe, 1000);

setTimeout(
  printMeDebounce2,
  100,
  "Debounce 2: First Timer - This one will fire"
);
setTimeout(printMeDebounce2, 300, "Debounce 2: Second Timer");
setTimeout(printMeDebounce2, 500, "Debounce 2: Third Timer");
setTimeout(printMeDebounce2, 700, "Debounce 2: Fourth Timer");
setTimeout(printMeDebounce2, 900, "Debounce 2: Fifth Timer");
setTimeout(
  printMeDebounce2,
  1200,
  "Debounce 2: Sixth Timer - This one should fire again as it's called AFTER the 1000ms!"
);
