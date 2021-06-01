'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D")

// const interface = "Audio";
// const private = 534;
*/

////////////////////////////////////
// Functions

/*
function logger() {
    console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and
    ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

////////////////////////////////////
// Function Declaration vs. Expressions

/*
// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear
}

const age1 = calcAge1(1991);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

////////////////////////////////////
// Arrow Functions

/*
// Arrow function example
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

////////////////////////////////////
// Functions Calling Other Functions

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

////////////////////////////////////
// Code Challenge 1

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else { console.log(`No one wins`) }
}
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
*/

////////////////////////////////////
// Introduction to Arrays

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages)
*/

////////////////////////////////////
// Basic Array Operations (Methods)

/*
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove Elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift() //First
console.log(friends)

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven")
}
*/

////////////////////////////////////
// Code Challenge 2

/*
const bills = [125, 555, 44]

const calcTip = function (bills) {
    if (bills >= 50 && bills <= 300) {
        return bills * .15
    } else {
        return bills * .20
    }
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips)

const totals = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];
console.log(totals);
*/

////////////////////////////////////
// Introduction to Objects

/*
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven",]
];

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};
*/

////////////////////////////////////
// Dot vs. Bracket Notation

/*
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(jonas);

console.log(jonas.lastName); // Dot Notation
console.log(jonas["lastName"]); // Bracket Notation

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas."last" + nameKey);

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends")

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

////////////////////////////////////
// Object Methods

/*
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's licence.`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
*/

////////////////////////////////////
// Code Challenge 3

/*
const mark = {
    fullName: "Mark Miller",
    height: 1.69,
    mass: 78,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI
    }
};

const john = {
    fullName: "John Smith",
    height: 1.95,
    mass: 92,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`)
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`)
}
*/

////////////////////////////////////
// Iteration: The For Loop

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

/*

const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "Teacher",
    ["Michael", "Peter", "Steven"],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i])
};

console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = []

for (let y = 0; y < years.length; y++) {
    ages.push(2037 - years[y]);

}
console.log(ages)

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== "string") continue;

    console.log(jonas[i], typeof jonas[i]);
};

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] == "number") break;

    console.log(jonas[i], typeof jonas[i]);
};
*/

// Looping Backwards and Loops in Loops

/*
const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "Teacher",
    ["Michael", "Peter", "Steven"],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`Starting exercise ${exercise}`);

    for (let rep = 1; rep <= 5; rep++)
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
}
*/

// The While Loop


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1
// // while (rep <= 10) {
// //     console.log(`Lifting weights repetition ${rep}`);
// rep++
// }

/*
let dice = Math.trunc(Math.random() * 6) + 1

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6) console.log("Loop is about to end...")
}
*/

// Code Challenge 4

/*
const calcTip = function (bills) {
    if (bills >= 50 && bills <= 300) {
        return bills * .15
    } else {
        return bills * .20
    }
}
const bills = [22, 295, 176, 448, 37, 185, 1100, 86, 52]
const tips = []
const totals = []

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
*/