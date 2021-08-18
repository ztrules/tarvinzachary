/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log = (23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log (typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x + 1
x --;
x --;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

////////////////////////////////////
//Coding Challenge 1

//const markWeight = 78;
//const markHeight = 1.69;
//const johnWeight = 92;
//const johnHeight = 1.95;

/*
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
*/

// Strings and Template Literals
/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year -
    birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year -
    birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`)
*/

////////////////////////////////////
// If / Else Statements

/*
const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another $
    {yearsLeft} years ;)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

////////////////////////////////////
// Coding Challenge 2

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

/*
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
*/

////////////////////////////////////
// Type Conversion and Coercion

/*
// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18)

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, "", undefined, null, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""))

const money = 100;
if (money) {
    console.log("Don't spend it all ;)")
} else {
    console.log("You should get a job!")
};

let height = 0;
if (height) {
    console.log("YAY! Height is defined")
} else {
    console.log("Height is UNDEFINED")
}
*/

////////////////////////////////////
// Equality Operators: == vs. ===

/*
const age = "18";
if (age === 18) console.log("You just became an adult \n\
:D (strict)");

if (age == 18) console.log("You just became and adult \n\
:D (loose)")

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log("Cool! 23 is an amazing number!")
} else if (favorite === 7) {
    console.log("7 is also a cool number")
} else if (favorite === 9) {
    console.log("9 is also a cool number")
} else {
    console.log("Number is not 23 or 7 or 9")
}

if (favorite !== 23) console.log("Why not 23?")
*/

////////////////////////////////////
// Logical Operators

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision &&
    isTired);


if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}
*/

////////////////////////////////////
// Code Challenge 3

/*
const scoreDolphins1 = 96;
const scoreDolphins2 = 108;
const scoreDolphins3 = 89;
const scoreKoalas1 = 88;
const scoreKoalas2 = 91;
const scoreKoalas3 = 110;

const averageDolphinsScore = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
const averageKoalasScore = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
console.log(averageDolphinsScore);
console.log(averageKoalasScore);

if (averageDolphinsScore > averageKoalasScore) {
    console.log("The Dolphins Win!")
} else if (averageDolphinsScore < averageKoalasScore) {
    console.log("The Koalas Win!")
} else { console.log("It's a draw!") }

const scoreDolphins1 = 97;
const scoreDolphins2 = 112;
const scoreDolphins3 = 101;
const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 123;

const averageDolphinsScore = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
const averageKoalasScore = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
console.log(averageDolphinsScore, averageKoalasScore)
if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore > 100) {
    console.log("The Dolphins Win!")
} else if (averageKoalasScore > averageDolphinsScore && averageKoalasScore > 100) {
    console.log("The Koalas Win!")
} else if (averageDolphinsScore = averageKoalasScore || !averageDolphinsScore > 100 && !averageKoalasScore > 100) {
    console.log("It's a draw!")
}

const scoreDolphins1 = 97;
const scoreDolphins2 = 112;
const scoreDolphins3 = 80;
const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 50;

const averageDolphinsScore = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
const averageKoalasScore = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
console.log(averageDolphinsScore, averageKoalasScore)
if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= 100) {
    console.log("The Dolphins win!")
} else if (averageKoalasScore > averageDolphinsScore && averageKoalasScore >= 100) {
    console.log("The Koalas win!")
} else if (averageDolphinsScore == averageKoalasScore && averageDolphinsScore >= 100 && averageKoalasScore >= 100) {
    console.log("It's a draw!")
} else {
    console.log("Nobody wins!")
}
*/

////////////////////////////////////
// The Switch Statement

// const day = "Monday";

// switch (day) {
//     case "Monday":
//         console.log("Plan course structure");
//         console.log("Go to coding meetup")
//         break;
//     case "Tuesday":
//         console.log("Prepare theory videos");
//         break;
//     case "Wednesday":
//     case "Thursday":
//         console.log("Write code examples");
//         break;
//     case "Friday":
//         console.log("Record videos");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("Enjoy the weekend");
//         break;
//     default:
//         console.log("Not a valid day!");
// }

/*
const day = "Monday";

if (day === "Monday") {
    console.log("Plan course structure")
    console.log("Go to coding meetup")
} else if (day === "Tuesday") {
    console.log("Prepare theory videos")
} else if ((day === "Wednesday" && day !== "Thursday")
    || (day === "Thursday" && day !== "Wednesday")) {
    console.log("Write code examples");
} else if (day === "Friday") {
    console.log("Record videos")
} else if ((day === "Saturday" && day !== "Sunday")
    || (day === "Sunday" && day !== "Saturday")) {
    console.log("Enjoy the weekend")
} else {
    console.log("Not a valid day!")
}
*/

////////////////////////////////////
// Statements and Expressions

/*
3 + 4 //expression
1991 //expression
true && false && !false //expression

if (23 > 10) {
    const str = "23 is bigger";
} //statement
*/

////////////////////////////////////
// The Conditional (Ternary) Operator

/*
const age = 23;
//age >= 18 ? console.log("I like to drink wine") :
//   console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

////////////////////////////////////
// Coding Challenge 4

/*
let bill = 438;
let tip;
50 <= bill && bill <= 300 ? tip = .15 * bill : tip = .2 * bill;
console.log(`The bill was ${bill}, the tip was ${tip},
and the total was ${bill + tip}`)
*/