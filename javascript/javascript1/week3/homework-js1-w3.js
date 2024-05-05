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
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//--------------------------
// When will we be there??
//--------------------------
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function time(obj) {
  const timeInPercentage = obj.destinationDistance / obj.speed;
  const hour = Math.floor(timeInPercentage);
  const minute = Math.floor((timeInPercentage - hour) * 60);
  return `${hour} hours and ${minute} minutes`;
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

function calculatePercentage(obj) {
  return (
    ((obj.days * dayToMinuteIndex +
      obj.hours * hourToMinuteIndex +
      obj.minutes) /
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
  console.log();
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


//---------------------------------
// CactusIO-interactive (Smart phone usage app)
//---------------------------------
