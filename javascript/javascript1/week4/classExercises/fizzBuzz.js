function fizzBuzz(num1, num2) {
  const arrayToPrint = [];
  for (let i = 1; i <= 100; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      arrayToPrint.push("FizzBuzz");
    } else if (i % num1 === 0) {
      arrayToPrint.push("Fizz");
    } else if (i % num2 === 0) {
      arrayToPrint.push("Buzz");
    } else {
      arrayToPrint.push(i);
    }
  }

  for (itemToPrint of arrayToPrint) {
    console.log(itemToPrint);
  }
}

fizzBuzz(3, 5);
