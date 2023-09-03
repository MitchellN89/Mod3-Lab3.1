// 2. The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.

function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

// a) What order will the four tests below print in? Why?

// #4-Not delayed at all followed by #3-0ms, followed by #2-20ms followed by #1-100ms. setTimeout functions are all executed around the same
// time and run asynchronously.

// b) Rewrite delayMsg as an arrow function

const delayMsgArrow = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsgArrow, 200, "Arrow Functions!!!");

// c) Add a fifth test which uses a large delay time (greater than 10 seconds)

const timer1 = setTimeout(
  delayMsgArrow,
  10000,
  "#5: This timer made it all the way to 10 seconds!!!"
);

// d) Use clearTimeout to prevent the fifth test from printing at all.

setTimeout(
  (msg) => {
    clearTimeout(timer1);
    console.log(msg);
  },
  5000,
  "Cancelled timer #5 after 5 seconds..."
);
