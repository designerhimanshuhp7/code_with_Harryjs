// Question ONE :

const age = 12;

if ((age > 10) && (age < 20)) {
  console.log("You lie in between the range of age : " + age + "\r\n");
}
else {
  console.log("Sorry you are above the range of age." + "\r\n");
}

// Quesion ONe with Video

// Question Two :
let fruit = prompt('Which fruit you really like ? ');
let Apple, Mango, Papaya, Guava;

switch(fruit){
    case 'Apple' :
    console.log(`Yes ${fruit} is available how much you want ?` + "\r\n");
    break;
    
    case 'Mango' :
    console.log(`Yes ${fruit} is available how much you want ?` + "\r\n");
    break;
    
    case 'Papaya' :
    console.log(`Yes ${fruit} is available how much you want ?` + "\r\n");
    break;
    
    case 'Guava' :
    console.log(`Yes ${fruit} is available how much you want ?` + "\r\n");
    break;
    
    default :
    console.log(`Could you take some other Fruits besides ${fruit}` + "\r\n")
}   

// Quesion Two with Video
let ageVideo = prompt("What's your age ?");
switch (ageVideo) {
  case '12':
    console.log("Your age is 12" + "\r\n");
    break;

  case '13':
    console.log("Your age is 13" + "\r\n");
    break;

  case '14':
    console.log("Your age is 14" + "\r\n");
    break;

  case 'dfdfdf':
    console.log("Your age is 15" + "\r\n");
    break;

  default:
    console.log(`Your age ${ageVideo} is not match` + "\r\n")
}


// Question THREE :
let divBy = prompt("Type a Number for divide please : ");
divBy = Number.parseInt(divBy);
if ((divBy % 2 == 0) && (divBy % 3 == 0)) {
  console.log("Yes it is divisible by 2 and 3 and " + "\r\n");
}
if (divBy % 2 == 0) {
  console.log("It is divisible by 2" + "\r\n");
}
else if (divBy % 3 == 0) {
  console.log("Yes it is divisible by 3 " + "\r\n");
}
else {
  console.log(`${divBy} is not divisible by either 2 or 3 ` + "\r\n");
}
console.log(typeof divBy);
// Quesion THREE with Video

// Question FOUR :
// console.log("Done in Question 3." + "\r\n");

// Quesion FOUR with Video
let modBy = prompt("Type a Number please : ");
modBy = Number.parseInt(modBy);
if ((modBy % 2 == 0) || (modBy % 3 == 0)) {
  console.log("Yes it is divisible by either 2 or 3" + "\r\n");
}
else {
  console.log(`${modBy} is not divisible by either 2 or 3 `);
}

console.log(typeof modBy +  "\r\n");

// Question Five :
let ageForDrive = prompt("What is your age for Driving ?");
if (ageForDrive > 18) {
  console.log("You can drive a bike you are an adult.");
}
else {
  console.log("Sorry You can't drive you are a kid.")
}

// Quesion Five with Video

let result = null == undefined;
if (result) {
console.log(true);
} else {
console.log(false);
}

// Ternary operator
let ternaryAge = prompt("What is you age for drive in ternary ?")
let a = ternaryAge >18 ? "You can drive" : "You cannot drive";
console.log(a);