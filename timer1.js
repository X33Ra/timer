// Implement an alarm clock / timer
// which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
// EX:
//This will make it beep at:

// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds

const args = process.argv.slice(2);

const scheduleAlarm = function(time) {
  if (time <= 0 || isNaN(time)) {
    console.log('please write a positive number');
    return; // Ignore negative numbers and non-numeric inputs
  }
  
  setTimeout(() => {
    console.log('Beep!');
    process.stdout.write('\x07'); // Beep sound
  }, time * 1000);
};

for (const arg of args) {
  const time = parseInt(arg, 10);
  scheduleAlarm(time);
  if (!isNaN(time) && time > 0) {
    console.log(`Alarm scheduled in ${time} seconds`);
  }
}


// Confirm that our script can handle some common edge cases.
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.