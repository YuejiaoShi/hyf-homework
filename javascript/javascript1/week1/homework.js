// freeCodeCamp username: yuejiaoshi
// freeCodeCamp profile url: https://www.freecodecamp.org/yuejiaoshi

// Age-ify (A future age calculator)
const yearOfBirth = 1999;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2020;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
  console.log(
    "Your dog will be " + dogYear * 7 + " dog years old in " + dogYearFuture
  );
} else {
  console.log(
    "Your dog will be " + dogYear + " human years old in " + dogYearFuture
  );
}

// Housey pricey (A house price estimator)
const volumeInMetersPeter = 8 * 10 * 10;
const gardenSizeInM2Peter = 100;
const housePricePeter =
  volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
console.log(housePricePeter);
if (housePricePeter > 2500000) {
  console.log("Peter pays too little.");
} else if (housePricePeter < 2500000) {
  console.log("Peter pays too much.");
} else if (housePricePeter === 2500000) {
  console.log("Peter pays neither too much nor too little.");
}

const volumeInMetersJulia = 5 * 11 * 8;
const gardenSizeInM2Julia = 70;
const housePriceJulia =
  volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;
console.log(housePriceJulia);
if (housePriceJulia > 1000000) {
  console.log("Julia pays too little.");
} else if (housePriceJulia < 1000000) {
  console.log("Julia pays too much.");
} else if (housePriceJulia === 1000000) {
  console.log("Julia pays neither too much nor too little.");
}

// Ez Namey (Startup name generator) Optional
const firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Innovative",
  "Dynamic",
  "Global",
  "Creative",
  "Digital",
  "Smart",
  "Future",
];
const secondWords = [
  "Corporation",
  "Solutions",
  "Systems",
  "Labs",
  "Hub",
  "Tech",
  "Innovations",
  "Network",
  "Builders",
  "World",
];
const randomNumberFirst = Math.floor(Math.random() * 10);
const randomNumberSecond = Math.floor(Math.random() * 10);
const startupName =
  firstWords[randomNumberFirst] + " " + secondWords[randomNumberSecond];
const nameCharNumber = startupName.length - 1;
console.log(
  'The startup: "' +
    startupName +
    '" ' +
    "contains " +
    nameCharNumber +
    " characters"
);
