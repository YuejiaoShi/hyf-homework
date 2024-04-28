// freeCodeCamp username: yuejiaoshi
// freeCodeCamp profile url: https://www.freecodecamp.org/yuejiaoshi

//*****************************************/
// Flight booking fullname function
//*****************************************/
function getFullname(firstname, surname, useFormalName = false, gender) {
  if (!useFormalName) {
    return firstname + " " + surname;
  } else {
    if (gender === "man") {
      return "Lord" + " " + firstname + " " + surname;
    } else if (gender === "woman") {
      return "Lady" + " " + firstname + " " + surname;
    } else {
      return (
        "Please provide gender of " +
        firstname +
        " " +
        surname +
        " for a formal name," +
        " 'man' or 'woman'?"
      );
    }
  }
}
const fullname1 = getFullname("Benjamin", "Hughes", true, "man");
const fullname2 = getFullname("Yuejiao", "Shi", true, "woman");
console.log(fullname1);
console.log(fullname2);

//*****************************************/
// Event application
//*****************************************/
const currentDate = new Date();
const todayIndex = currentDate.getDay();
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getEventWeekday(daysFromToday) {
  const eventDay = weekdays[(todayIndex + daysFromToday) % 7];
  return eventDay;
}

console.log(getEventWeekday(2));

//*****************************************/
// Weather wear
//*****************************************/
function getClothes(temp) {
  if (temp <= -20) {
    return "It's too cold, please do not go out.";
  } else if (temp <= -5) {
    return "Down jacket, warm scarf, and gloves";
  } else if (temp <= 10) {
    return "Heavier coat, sweater or hoodie, and jeans";
  } else if (temp <= 20) {
    return "Light jacket, light jeans";
  } else if (temp <= 40) {
    return "Skirt, shorts and a t-shirt";
  } else if (40 < temp) {
    return "It's too hot, please do not go out.";
  }
}

const clothesToWear = getClothes(18);
console.log(clothesToWear);

//*****************************************/
// Student manager
//*****************************************/
const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  const lowercaseClass07Students = class07Students.map((name) =>
    name.toLowerCase()
  );
  if (typeof studentName !== "string" || studentName === "") {
    console.log("Please provide a valid name.");
  } else if (lowercaseClass07Students.includes(studentName.toLowerCase())) {
    console.log(`Student ${studentName} is already in the class`);
  } else if (getNumberOfStudents() <= 5) {
    class07Students.push(studentName);
    console.log(`${studentName} has been successfully added.`);
  } else if (studentName === "Queen") {
    class07Students.push(studentName);
    console.log(`${studentName} has been successfully added.`);
  } else {
    console.log("Cannot add more students to class 07");
  }
}

function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}

addStudentToClass("Benjamin");
addStudentToClass("Alice");
addStudentToClass("Bob");
addStudentToClass("Julia");
addStudentToClass("Jacob");
addStudentToClass("Amy");
addStudentToClass("John"); // Add more students than there is space for.
addStudentToClass(""); // Try to add an empty string.
addStudentToClass("Benjamin"); // Add a student that is already in the class.
addStudentToClass("Queen"); // Add the Queen to a full class.
console.log(getNumberOfStudents());

//*****************************************/
// Candy helper optional
//*****************************************/
const candyPrice = {
  "sweet": 0.5,
  "chocolate": 0.7,
  "toffee": 1.1,
  "chewing-gum": 0.03,
};
const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  const calculateCandyPrice = candyPrice[candyType.toLowerCase()] * weight;
  boughtCandyPrices.push(calculateCandyPrice);
}

const amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
  let totalCost = 0;
  for (i = 0; i < boughtCandyPrices.length; i++) {
    totalCost += boughtCandyPrices[i];
  }
  if (totalCost >= amountToSpend) {
    console.log("Enough candy for you!");
    return false;
  } else {
    console.log("You can buy more, so please do!");
    return true;
  }
}
addCandy("sweet", 50);
addCandy("chocolate", 20);
addCandy("toffee", 10);
canBuyMoreCandy();

// Optional: Use a while loop instead of a for loop.

// function canBuyMoreCandy() {
//   let totalCost = 0;
//   let i = 0;
//   while (i < boughtCandyPrices.length) {
//     totalCost += boughtCandyPrices[i];
//     i++;
//   }
//   if (totalCost >= amountToSpend) {
//     console.log("Enough candy for you!");
//     return false;
//   } else {
//     console.log("You can buy more, so please do!");
//     return true;
//   }
// }
