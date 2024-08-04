import yargs from "yargs";

const argv = yargs(process.argv.slice(2)).argv;

function avg(argv) {
  const numbers = argv._.map(Number);
  const length = argv._.length;

  if (length <= 0) {
    return 'Plz provide some arguments after "node avg.js".';
  } else if (numbers.some(isNaN)) {
    return "Plz provide numbers as arguments";
  } else {
    const sum = argv._.reduce((pre, cur) => pre + cur);
    const average = (sum / length).toFixed(2);
    return `Tha average is: ${average}.`;
  }
}
console.log(avg(argv));
