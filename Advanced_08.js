// 8. The following DigitalClock class uses an interval to print the time every second once
// started, until stopped.

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
// const myClock = new DigitalClock("my clock:"); // Have commented this out in order for clarity in the console
// myClock.start();

// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
// parameter precision – the number of ms between 'ticks'. This precision parameter
// should default to 1 second if not supplied.

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision) {
    super(prefix);
    this.precision = precision;
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

// const myPrecisionClock = new PrecisionClock("my p clock: ", 2000);
// myPrecisionClock.start();

// b) Create a new class AlarmClock that inherits from DigitalClock and adds the
// parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
// should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
// default to 07:00 if not supplied.

class AlarmClock extends DigitalClock {
  constructor(prefix, alarmTime = "07:00") {
    super(prefix);
    this.alarmTime = alarmTime;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    if (`${hours}:${mins}` === this.alarmTime) {
      this.soundAlarm();
    }
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  soundAlarm() {
    clearInterval(this.timer);
    console.log("TIME TO WAKE UP");
  }
}

const myAlarm = new AlarmClock("Alarm Clock: ", "14:38");
myAlarm.start();
