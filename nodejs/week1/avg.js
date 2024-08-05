const args = process.argv.slice(2);

function avg(args) {
  const numbers = args.map((arg) => parseFloat(arg));
  const length = args.length;

  if (length <= 0) {
    return 'Plz provide some arguments after "node avg.js".';
  } else if (numbers.some(isNaN)) {
    return "Plz provide numbers as arguments";
  } else {
    const sum = numbers.reduce((pre, curr) => pre + curr, 0);
    const average = (sum / length).toFixed(2);
    return `Tha average is: ${average}.`;
  }
}
console.log(avg(args));
