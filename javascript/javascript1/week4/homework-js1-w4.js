// Find Class Exercises solutions in './classExercises';
// CodeWar Profile : https://www.codewars.com/users/YuejiaoShi

// Voice assistant

let userName = "";
let toDoList = [];
let currentToDO = "";

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
  return "I'm sorry, I couldn't understand your command.";
}

// Date


console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "Fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "Singing in the shower added to your todo"
console.log(getReply("What is on my todo?")); // "You have 2 todos, fishing and singing in the shower"
console.log(getReply("Add fishing to my todo")); // "You have already add Singing in the shower to your todo list"
