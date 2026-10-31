let name = "Bryan";
let age = 30;

let raining = false;

let message = raining ? "take an umbrella" : "it's not raining, enjoy your day";

let eligible = age >= 18 ? "You are eligible" : "You are not eligible";

// switch (name) {
//   case "John":
//     console.log(`welcome ${name}`);
//     break;
//   case "Kate":
//     console.log(`welcome ${name}`);
//     break;
//   case "Bryan":
//     console.log(`welcome ${name}`);
//     break;

//   default:
//     console.log("you were not invited");
// }

// switch (age) {
//   case 18:
//     console.log("you are 18 years old");
//     break;
//   case 25:
//     console.log("you are 25 years old");
//     break;
//   case 50:
//     console.log();
//   default:
//     console.log("you are neither 18 nor 25 years old");
// }

const greet = (name) => `Hello, ${name}!`;

// const add = (a, b) => a + b;

// function add(a, b) {
//   return a + b;
// }

//What is an array
// An array is a data structure that stores multiple values in a single variable.
//

const fruits = ["apple", "banana", "orange", "grape"];

// an array can also contain other arrays
const fruitsAndVegetables = [
  "apple",
  "banana",
  "orange",
  "grape",
  ["carrot", "broccoli", "spinach"],
];

const arraysOfNumbersAndLetters = [1, 2, 3, 4, ["a", "b", "c", "d"]];

const users = ["John", "Jerry", "Henry", "Mary"];

const NamesWithJ = users.findIndex((user) => user.startsWith("J"));

// console.log(evenNumber);
// console.log(NamesWithJ);

//objects

const person = {
  name: "Bryan",
  age: 30,
  occupation: "Trader",
};

const book = {
  title: "The sound of silence",
  author: "John Doe",
  publishedDate: "2026",
};

//array of objects

const students = [
  {
    name: "John",
    regNumber: "JJ234",
    age: 20,
    paidFees: false,
    email: null,
    department: "Computer Science",
  },
  {
    name: "Joel",
    regNumber: "JJ235",
    department: "Mass Communication",
  },
  {
    name: "Mary",
    regNumber: "JJ236",
    department: "Law",
  },
];

const car = {
  brandName: "Toyota",
  model: "Camry",
  year: 2020,
};

// console.log(car["brandName"]);
// console.log(car["year"]);
// console.log(car["model"]);

// filters

const rawContacts = [
  "John",
  "john@example.com",
  "Jane",
  "samuel",
  "samuel@example.com",
];
const emails = rawContacts.filter((contact) => contact.includes("@"));

// console.log(emails);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const greaterThanFive = numbers.filter((number) => number > 5);

console.log(greaterThanFive);

//map
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

numbers.forEach((number) => console.log(number));
