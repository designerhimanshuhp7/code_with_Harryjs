
// Seconds in an Hour
let secondsInAnMinutes = 60;
let minutesInAnHour = 60;
let secondsInAnHour = secondsInAnMinutes * minutesInAnHour;
console.log(secondsInAnHour);

// Seconds in a Day
let secondsInAnMinutesOne = 60;
let minutesInAnHourOne = 60;
let hoursInADayOne = 24;
let secondsInADay = secondsInAnMinutesOne * minutesInAnHourOne * hoursInADayOne;
console.log(secondsInADay);

// Seconds in a Week
let secondsInAnMinutesTwo = 60;
let minutesInAnHourTwo = 60;
let hoursInADayTwo = 24;
let dayInAWeekTwo = 7;
let secondsInAWeek = secondsInAnMinutesTwo * minutesInAnHourTwo * hoursInADayTwo * dayInAWeekTwo;
console.log(secondsInAWeek);

// Seconds in a Month
let secondsInAnMinutesThree = 60;
let minutesInAnHourThree = 60;
let hoursInADayThree = 24;
let dayInAWeekThree = 7;
let weekInAMonthThree = 4;
let secondsInAMonth = secondsInAnMinutesThree * minutesInAnHourThree * hoursInADayThree * dayInAWeekThree * weekInAMonthThree;
console.log(secondsInAMonth);

// Seconds in a Year and Age
let secondsInAnMinutesYear = 60;
let minutesInAnHourYear = 60;
let hoursInADayYear = 24;
let daysInAWeekYear = 7;
let weeksInAMonthYear = 4;
let monthsInAYear = 12;
let yearsInAge = 33;
let secondsInAYear = secondsInAnMinutesYear * minutesInAnHourYear * hoursInADayYear * daysInAWeekYear * weeksInAMonthYear * monthsInAYear;
let secondsInAAge = secondsInAnMinutesYear * minutesInAnHourYear * hoursInADayYear * daysInAWeekYear * weeksInAMonthYear * monthsInAYear * yearsInAge;
console.log(secondsInAYear);
console.log(secondsInAAge);

// Incrementing and Decrementing High Fives
let highFives = 0;
++highFives;
console.log(highFives);
++highFives;
console.log(highFives);
--highFives;
console.log(`Before increament  ${highFives}`);

let highFivesNew = 0;
highFivesNew++;
console.log(highFivesNew);
highFivesNew++;
console.log(highFivesNew);
highFivesNew--;
console.log(highFivesNew);

// Plus Equals and Minus Equals
var x =15;
x = x + 5;
console.log(x)

let baloons = 100;
baloons *= 2;
console.log(baloons);

baloons /= 4;
console.log(baloons);

baloons **= 2;
console.log(baloons);

baloons %= 5;
console.log(baloons);