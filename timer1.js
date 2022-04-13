//Implement an alarm clock / timer which will beep after a specified amount 
//of time has passed. 
//The user can specify an unlimited number of alarms using command line 
//arguments
const alarmTimes = process.argv.slice(2);

const timer = function () {
  
  for (let i = 0; i < alarmTimes.length; i++) {
    //if a number continue iterating
    if (alarmTimes[i] > 0 && !isNaN(alarmTimes[i])) {
      // delay value is alarmtimes value x 1000 
      let delay = alarmTimes[i] * 1000; // 1000mS per second
      
      setTimeout(() => {
        //print out timer beep
        process.stdout.write("\x07");
      }, delay);
    }
    
  }
};
timer(alarmTimes)



//No numbers are provided: Easy. It should just not beep at all and end 
//immediately since no beeps should get scheduled.
//is a negative number: Ignore/skip any numbers that are negative. We can't 
//schedule anything in the past.
//An input is not a number: Ignore/skip these as well, instead of attempting
//to call setTimeout with a non - number.
