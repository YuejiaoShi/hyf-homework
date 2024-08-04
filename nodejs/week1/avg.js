import yargs from "yargs";

const argv = yargs(process.argv.slice(2)).argv;
const length = argv._.length;


console.log(length);
