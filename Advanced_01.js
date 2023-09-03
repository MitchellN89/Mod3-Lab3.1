// 1. makeCounter below is a decorator function which creates and returns a function that
// increments a counter.

function makeCounter(startFrom = 0, defaultIncrementBy = 1) {
  let currentCount = startFrom;
  return function (incrementBy = defaultIncrementBy) {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

// a) Create a second counter counter2 using the makeCounter function and test to see if
// it remains independent to counter1

const counter2 = makeCounter();
counter2();
counter2();

// b) Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)

// as above... I've added in a default value for if no arg is passed in
const counter3 = makeCounter(5);
counter3();
counter3();

// c) Modify makeCounter to take another argument incrementBy, which specifies how
// much each call to counter() should increase the counter value by.

// as above... I've allowed two options here, you can set the default incrementation in the makeCounter function or you can override it each time you call the coutner.
const counter4 = makeCounter(0, 2);
counter4();
counter4();
counter4(5);
counter4(10);
counter4(50);
counter4();
counter4();
