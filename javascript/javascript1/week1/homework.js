// Age-ify (A future age calculator)
let yearOfBirth = 1999;
let yearFuture = 2050;
let age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

// Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth = 2020;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;
if ((shouldShowResultInDogYears = true)) {
  console.log(
    "Your dog will be " + dogYear * 7 + " dog years old in " + dogYearFuture
  );
} else if ((shouldShowResultInDogYears = false)) {
  console.log(
    "Your dog will be " + dogYear + " human years old in " + dogYearFuture
  );
}

// Housey pricey (A house price estimator)
let volumeInMetersPeter = 8 * 10 * 10;
let gardenSizeInM2Peter = 100;
let housePricePeter =
  volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
console.log(housePricePeter);
if (housePricePeter > 2500000) {
  console.log("Peter pays too little.");
} else if (housePricePeter < 2500000) {
  console.log("Peter pays too much.");
} else if (housePricePeter === 2500000) {
  console.log("Peter pays neither too much nor too little.");
}

let volumeInMetersJulia = 5 * 11 * 8;
let gardenSizeInM2Julia = 70;
let housePriceJulia =
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
const firstWords = ["Easy", "Awesome", "Corporate", "Innovative", "Dynamic", "Global", "Creative", "Digital", "Smart", "Future"];
const secondWords = ["Corporation", "Solutions", "Systems", "Labs", "Hub", "Tech", "Innovations", "Network", "Builders", "World"];
const randomNumberFirst = Math.floor(Math.random() * 10);
const randomNumberSecond = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumberFirst] + " " + secondWords[randomNumberSecond];
let nameCharNumber = startupName.length;
console.log("The startup: \"" + startupName + "\" " + "contains " + nameCharNumber + " characters")
