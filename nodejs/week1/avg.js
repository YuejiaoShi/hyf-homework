import yargs from "yargs";

const argv = yargs(process.argv.slice(2)).argv;
const length = argv._.length;
if (length <= 0) {
  console.log('Plz provide some arguments after "node avg.js".');
} else if (argv._.map((item) => typeof item !== 'number')) {
  console.log("Plz provide numbers as arguments");
}

console.log(length);
