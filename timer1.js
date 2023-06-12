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
  setTimeout(() => {
    console.log('Beep!');
    process.stdout.write('\x07'); // Beep sound
  }, time * 1000);
};

for (const arg of args) {
  const time = parseInt(arg, 10);
  if (!isNaN(time) && time > 0) {
    scheduleAlarm(time);
    console.log(`Alarm scheduled in ${time} seconds`);
  }
}
