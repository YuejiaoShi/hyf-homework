//**********************************************/
// WARM UP
//**********************************************/

//--------------------------
// Item array removal
//--------------------------
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1); // cannot use slice() here because slice doesn't modify the original array
  }
}
// // Another solution
// const index = names.indexOf(nameToRemove);
// if (index !== -1) {
//   names.splice(index, 1);
// }

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//--------------------------
// When will we be there??
//--------------------------
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function time({ speed, destinationDistance }) {
  const timeInPercentage = destinationDistance / speed;
  const hour = Math.floor(timeInPercentage);
  const minute = Math.floor((timeInPercentage - hour) * 60);

  const hourString = hour === 1 || hour === 0 ? "hour" : "hours";
  const minuteString = minute === 1 || minute === 0 ? "minute" : "minutes";

  return `${hour} ${hourString} and ${minute} ${minuteString}`;
}

const travelTime = time(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

//--------------------------
// Series duration of my life
//--------------------------
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
  {
    title: "The Colbert Report",
    days: 24,
    hours: 2,
    minutes: 47,
  },
];
const lifespan = 80;
const yearToMinuteIndex = 365 * 24 * 60;
const dayToMinuteIndex = 24 * 60;
const hourToMinuteIndex = 60;
const decimalPlaces = 3;

function calculatePercentage({ days, hours, minutes }) {
  return (
    ((days * dayToMinuteIndex + hours * hourToMinuteIndex + minutes) /
      (lifespan * yearToMinuteIndex)) *
    100
  );
}

function logOutSeriesText() {
  let totalPercentage = 0;
  for (let series of seriesDurations) {
    let eachPercentage = 0;
    eachPercentage = calculatePercentage(series);
    totalPercentage += eachPercentage;
    console.log(
      `${series.title} took ${eachPercentage.toFixed(
        decimalPlaces
      )}% of my life`
    );
  }
  console.log(
    `In total that is ${totalPercentage.toFixed(decimalPlaces)}% of my life`
  );
}
logOutSeriesText();

//**********************************************/
// Smart-ease - Back to the basics!
//**********************************************/

//---------------------------------
// NOnoN0nOYes (Note taking app)
//---------------------------------

// ++++ Save a note ++++
const notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// ++++ Get a note ++++
function getNote(id) {
  for (let note of notes) {
    if (id === note.id) {
      return note;
    } else {
      return "Error: Invalid ID";
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// ++++ Log out notes ++++
function logOutNotesFormatted() {
  for (let note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`
    );
  }
}

logOutNotesFormatted(); // should log out the text below
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

// ++++ Unique feature (Delete a note) ++++
function deleteNote(num) {
  for (let i = 0; i < notes.length; i++) {
    if (num === notes[i].id) {
      notes.splice(i, 1);
      console.log(`Note with id: ${num} has been deleted.`);
    }
  }
}

deleteNote(1);
console.log(notes);

//---------------------------------
// CactusIO-interactive (Smart phone usage app)
//---------------------------------

// ++++ Adding an activity (with optional tasks) ++++
const activities = [];

function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration }); // Can write a shorthand when the key and the value is the same namespace.
}
addActivity("23/7-18", "Youtube", 30);
addActivity("24/7-18", "Facebook", 100);
addActivity("25/7-18", "Gaming", 120);
console.log(activities);

// ++++ Show my status and Usage limit ++++
const timeLimit = 120;
function showStatus(arr) {
  let totalDuration = 0;
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      totalDuration += arr[i].duration;
    }
    console.log(
      `You have added ${arr.length} activities. They amount to ${totalDuration} min. of usage`
    );
    if (totalDuration >= timeLimit) {
      console.log(`You have reached your limit, no more smartphoning for you!`);
    }
  } else {
    console.log(`Add some activities before calling showStatus`);
  }
}

// ++++ Extra feature: List all app usage based on duration in descending order. ++++
function listAppUsageDescending(arr) {
  arr.sort((a, b) => b.duration - a.duration);
  console.log(arr);
}
listAppUsageDescending(activities);

// Optional: Lets improve the addActivity, so that we dont need to specify the date, but the function automatically figures out what the date is.
function addActivityWithoutDate(activity, duration) {
  const todayIndex = new Date();
  const today = `${todayIndex.getDate()}/${
    todayIndex.getMonth() + 1
  }-${todayIndex.getFullYear()}`;
  activities.push({ date: today, activity: activity, duration: duration });
}
addActivityWithoutDate("Emailing", 20);
addActivityWithoutDate("Linkedin", 100);
addActivityWithoutDate("Spotify", 80);
console.log(activities);

// Optional: Improve the showStatus function by only showing the number of actitivies for that specific day.
function showStatusAtDate(arr, date) {
  let totalActivities = 0;
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].date === date) {
        totalActivities++;
      }
    }
    console.log(`You have ${totalActivities} activities at ${date}`);
  } else {
    console.log(`Add some activities before calling showStatus`);
  }
}

showStatusAtDate(activities, "24/7-18");

// Optional: Create a function for calculating the activity a user has spent the most time on.
function activitySpentMostTime(arr) {
  const mostTimeActivity = arr.reduce((a, b) =>
    a.duration > b.duration ? a : b
  );
  console.log(
    `You spent the most time on ${mostTimeActivity.activity}, totally ${mostTimeActivity.duration} min!`
  );
}
activitySpentMostTime(activities);
