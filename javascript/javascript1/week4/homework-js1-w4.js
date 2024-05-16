// Find Class Exercises solutions in './classExercises';
// CodeWar Profile : https://www.codewars.com/users/YuejiaoShi

// Voice assistant

let userName = "";
let toDoList = [];
let currentToDO = "";
const operators = ["+", "-", "*", "/", "x"];

function capitalFirstChar(strOrArr) {
  return strOrArr.charAt(0).toUpperCase() + strOrArr.slice(1);
}

function saveName(arr) {
  const newName = arr[arr.indexOf("is") + 1];
  return (userName = capitalFirstChar(newName));
}

function addToDo(newToDo) {
  toDoList.push(newToDo);
  return (currentToDO = capitalFirstChar(newToDo));
}

function getReply(command) {
  const commandArr = command.split(" ").map((word) => word.toLowerCase());
  // Name
  if (command.toLowerCase().includes("hello my name is")) {
    if (userName === "") {
      saveName(commandArr);
      return `Nice to meet you ${userName}`;
    } else {
      return `We've already saved your name ${userName}`;
    }
  } else if (command.toLowerCase().includes("what is my name")) {
    return `Your name is ${userName}`;
  }

  // Todo
  else if (
    commandArr.includes("add") &&
    command.toLowerCase().includes("to my todo")
  ) {
    const newToDo = commandArr
      .slice(commandArr.indexOf("add") + 1, commandArr.indexOf("to"))
      .join(" ");
    if (!toDoList.includes(newToDo)) {
      addToDo(newToDo);
      return `${currentToDO} added to your todo`;
    } else {
      return `You have already add ${currentToDO} to your todo list`;
    }
  } else if (command.toLowerCase().includes("what is on my todo")) {
    return `You have ${toDoList.length} todos, ${toDoList.join(" and ")}`;
  }

  // Date
  else if (command.toLowerCase().includes("what day is it today")) {
    const today = new Date();
    const day = today.getDate();
    const monthIndex = today.getMonth();
    const year = today.getFullYear();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[monthIndex];

    return `Today is ${day}. of ${month} ${year}`;
  }

  // Do Math.
  else if (commandArr.some((word) => operators.includes(word))) {
    const operatorIndex = commandArr.findIndex((word) =>
      operators.includes(word)
    );
    if (operatorIndex !== -1) {
      const operator = commandArr[operatorIndex];
      const num1 = Number(commandArr.slice(operatorIndex - 1, operatorIndex));
      const num2 = Number(
        commandArr.slice(operatorIndex + 1, operatorIndex + 2)
      );
      switch (operator) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
        case "x":
          return num1 * num2;
        case "/":
          if (num2 === 0) {
            return "You cannot divide a number by zero";
          }
          return (num1 / num2).toFixed(2);
        default:
          return "Invalid Operator";
      }
    }
    return "Not found any operator in your question";
  }

  // Timer
  else if (command.toLowerCase().includes("set a timer for")) {
    const forIndex = commandArr.findIndex((word) => word === "for");
    if (forIndex !== -1 && forIndex < commandArr.length - 1) {
      const time = parseInt(commandArr[forIndex + 1]);
      if (
        command.toLowerCase().includes("minute") ||
        command.toLowerCase().includes("minutes") ||
        command.toLowerCase().includes("min")
      ) {
        setTimeout(() => {
          console.log("Timer done");
        }, time * 60 * 1000); // Convert minutes to milliseconds
        return `Timer set for ${time} minutes`;
      } else if (
        command.toLowerCase().includes("second") ||
        command.toLowerCase().includes("seconds") ||
        command.toLowerCase().includes("s")
      ) {
        setTimeout(() => {
          console.log("Timer done");
        }, time * 1000); // Convert seconds to milliseconds
        return `Timer set for ${time} seconds`;
      } else if (
        command.toLowerCase().includes("hour") ||
        command.toLowerCase().includes("hours") ||
        command.toLowerCase().includes("h")
      ) {
        setTimeout(() => {
          console.log("Timer done");
        }, time * 3600 * 1000); // Convert seconds to milliseconds
        return `Timer set for ${time} hours`;
      } else {
        return "Sorry, I couldn't recognize the time unit in your command.";
      }
    }
    return "Invalid timer command";
  }

  // Define a Word
  else if (command.toLowerCase().includes("define")) {
    const keyWord = command.substring(7);
    const wikiLink = `https://en.wikipedia.org/wiki/${keyWord}`;
    return `The definition of '${keyWord}' can be found here: ${wikiLink}`;
  }
  return "I'm sorry, I couldn't understand your command.";
}

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "Fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "Singing in the shower added to your todo"
console.log(getReply("What is on my todo?")); // "You have 2 todos, fishing and singing in the shower"
console.log(getReply("Add fishing to my todo")); // "You have already add Singing in the shower to your todo list"
console.log(getReply("What day is it today?")); //
console.log(getReply("What is 3 + 3")); // 6
console.log(getReply("What is 10 / 3")); // 3.33
console.log(getReply("What is 4 * 12")); // 48
console.log(getReply("Set a timer for 2 seconds")); // Will logout "Timer done" after 2 seconds.
console.log(getReply("Define HPLC"));
