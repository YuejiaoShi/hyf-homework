function fizzBuzz(num1, num2) {
  const arrayToPrint = [];
  let currentNum = 0;
  for (let i = 0; i < 100; i++) {
    currentNum = i + 1;
    if (currentNum % num1 === 0 && currentNum % num2 === 0) {
      arrayToPrint.push("FizzBuzz");
    } else if (currentNum % num1 === 0) {
      arrayToPrint.push("Fizz");
    } else if (currentNum % num2 === 0) {
      arrayToPrint.push("Buzz");
    } else {
      arrayToPrint.push(currentNum);
    }
  }

  for (itemToPrint of arrayToPrint) {
    console.log(itemToPrint);
  }
}

fizzBuzz(4, 12);
