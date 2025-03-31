//This is my age
let myAge = 24;

//Early Years
let earlyYears = 2;
earlyYears *= 10.5;

//Later Years
let laterYears = myAge - 2;

//Multiply the laterYears by 4 to calculate dog years accounted for by your later years.
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//My age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//My name in lower case
let myName = "Salomão Ferreira Junior".toLowerCase();

//Print for my age, my name and my dog age
console.log(
  `My name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} old in dog years.`
);
